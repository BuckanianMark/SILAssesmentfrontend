import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/Helpers/services/users.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit{
  
  users:any[] = [];
  constructor(private userService:UsersService,private activatedRoute:ActivatedRoute)
  {
  }
  ngOnInit(): void {
    this.loadUsers()
  }
  loadUsers(){
    this.userService.loadAllUser().subscribe((data:any) => {
      this.users = data;
    })
  }
}
