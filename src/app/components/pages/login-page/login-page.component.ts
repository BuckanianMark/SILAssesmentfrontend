import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Helpers/services/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  sampleemail:string="burky@gmail.com"
  type:string = 'password';
  isText:boolean = false;
  eyeIcon:string = "fa-eye-slash"
  loginForm!:FormGroup
  isSubmitted = false;
  returnUrl =''
  constructor(
    private fb:FormBuilder,
    private authService:AuthServiceService,
    private router:Router,
    private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon =  "fa-eye-slash"
    this.isText ? this.type ="text" :this.type = "password";
  }
  get fc(){
    return this.loginForm.controls;
  }
  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;
    this.authService.login({email:this.fc['email'].value,password:this.fc['password'].value}).subscribe(() => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }
 
}
