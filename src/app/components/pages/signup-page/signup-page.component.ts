import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserRegister } from 'src/app/Helpers/interfaces/IUserRegister';
import { AuthServiceService } from 'src/app/Helpers/services/auth-service.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit{

  type:string = 'password'
  isText:boolean = false
  eyeIcon:string = "fa-eye-slash"
  signupForm!:FormGroup
  isSubmitted = false;
  returnUrl = ''
  constructor(
    private fb:FormBuilder,
    private authService:AuthServiceService,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ){}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl']
  }
  hideShowPass(){
    this.isText =! this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash"
    this.isText ? this.type ="text" : this.type = "password"; 
  }
  get fc(){
    return this.signupForm.controls
  }
  submit(){
    console.log("saving")
    this.isSubmitted =true;
    if(this.signupForm.invalid) return;
    const fv = this.signupForm.value;
    const user:IUserRegister ={
      name:fv.name,
      email:fv.email,
      password:fv.password
    }
    this.authService.register(user).subscribe(_ => {
      this.router.navigateByUrl("/login")
    })
  }
  // submit(){
  //   this.isSubmitted = true;
  //   if(this.signupForm.invalid) return;
  //   this.authService.register({email:this.fc['email'].value,password:this.fc['password'].value,name:this.fc['name'].value}).subscribe(() => {
  //     console.log("Endpoint hit")
  //     this.router.navigateByUrl(this.returnUrl);
  //   })
  // }
}
