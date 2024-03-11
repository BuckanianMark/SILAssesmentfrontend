import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsService } from 'src/app/Helpers/services/albums.service';

@Component({
  selector: 'app-paginated-controls',
  templateUrl: './paginated-controls.component.html',
  styleUrls: ['./paginated-controls.component.css']
})
export class PaginatedControlsComponent implements OnInit{
  albums:any[]=[]
  currentIndex = -1;
  page=1;
  count=0;
  pageSize=5;
constructor(private albumService:AlbumsService){}
  ngOnInit(): void {
   
  }
  getRequestParams(page:number,pageSize:number):any{
    let params:any ={}
    if(page){
      params[`page`] = page-1;
    }
    if(pageSize)
    {
      params[`limit`] = pageSize;
    }
    return params;
  }
  retrieveAlbums():void
{
  const params = this.getRequestParams(this.page,this.pageSize);
  this.albumService.getPaginatedAlbums(params)
  .subscribe(
    response => {
      const {albums,total} = response;
      this.albums = albums;
      this.count = total;
      console.log(response)

    },
    error => {
      console.log(error)
    }
  )
}
  handlePageChange(event:any):void{
    this.pageSize = event.tathet.value;
    this.page =1
    this.retrieveAlbums()
  }
}
