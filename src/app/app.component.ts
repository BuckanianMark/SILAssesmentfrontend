import { Component } from '@angular/core';
import { AuthServiceService } from './Helpers/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SIL Informatics';
  // constructor(private authService:AuthServiceService){

  // }
  // loadCurrentUser(){
  //   const token = localStorage.getItem("SIL_iNFORMATICS_USER")
  //   if(token){
  //     this.authService.
  //   }
  // }
}
