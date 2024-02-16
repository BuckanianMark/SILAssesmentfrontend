import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsService } from 'src/app/Helpers/services/albums.service';
import { UsersService } from 'src/app/Helpers/services/users.service';

@Component({
  selector: 'app-display-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent {
  albums:any[] = []
  users:any[] = []
  constructor(private albumsService:AlbumsService,private userService:UsersService){
  this.loadAllbums()
  this.loadUsers()
  
  }
  loadAllbums(){
    this.albumsService.loadAllAlbums().subscribe((data:any) => {
      this.albums = data
    })
  }
  loadUsers(){
    this.userService.loadAllUser().subscribe((data:any) => {
      this.users = data;
    })
  }
}
