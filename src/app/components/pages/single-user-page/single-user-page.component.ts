import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Helpers/services/users.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-single-user-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-user-page.component.html',
  styleUrls: ['./single-user-page.component.css']
})
export class SingleUserPageComponent {
user:any
albums:any[] = []
constructor(private bcs:BreadcrumbService,private userService:UsersService,private router:Router,private activatedRoute:ActivatedRoute){
  this.bcs.set("@user","")
  activatedRoute.params.subscribe((params) => {
    if(params['id'])
    {
      this.userService.loadAUser(params['id']).subscribe(serveruser => {
        this.user = serveruser;
        // console.log(serveruser)
        this.bcs.set("@user",this.user.userName)
      })
    }
  })
}
}
