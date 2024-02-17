import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/Helpers/models/User';
import { AuthServiceService } from 'src/app/Helpers/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @ViewChild("li") li!:ElementRef<HTMLLIElement>;
  @ViewChild("smallscrenslider") smallscreendiv!:ElementRef<HTMLDivElement>
  @ViewChild("logout") logout!:ElementRef<HTMLAnchorElement>
  user!:User;
  constructor(private authService:AuthServiceService,private router:Router){
   authService.userObservable.subscribe(newUser => {
    this.user = newUser;
   })
   window.onscroll = this.handledivHide.bind(this);
   //this.li.nativeElement.addEventListener('click',this.handledivHide.bind(this))
  }
  ngOnInit(): void {
   
  }
  handledivShow(){
    this.smallscreendiv.nativeElement.classList.remove("translate-y-[-100%]")
  }
  handledivHide(){
    this.smallscreendiv.nativeElement.classList.add("translate-y-[-100%]")
  }
  handleshow(){
    this.logout.nativeElement.classList.toggle("hidden")
  }
  
  logOut(){
    this.authService.logout()
    this.router.navigateByUrl("/")
  }
  get IsAuth(){
    return this.user.name
  }

}
