import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsService } from 'src/app/Helpers/services/albums.service';

@Component({
  selector: 'app-albums-page',
  standalone: true,
  imports: [CommonModule],
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
