import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsService } from 'src/app/Helpers/services/albums.service';
import { PaginatedControlsComponent } from '../../partials/paginated-controls/paginated-controls.component';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.css']
})
export class AlbumsPageComponent implements OnInit{
  albums:any[] = []

  constructor(private albumsService:AlbumsService){}
  ngOnInit(): void {
    this.loadAllbums();
  }
  loadAllbums(){
    this.albumsService.loadAllAlbums().subscribe((data:any) => {
      this.albums = data
    })
  }

}
