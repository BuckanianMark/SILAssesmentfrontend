import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosService } from 'src/app/Helpers/services/photos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-title-edit-page',
  templateUrl: './title-edit-page.component.html',
  styleUrls: ['./title-edit-page.component.css']
})
export class TitleEditPageComponent implements OnInit{
photo!:any
editPhoto!:FormGroup
title!:any
constructor(
  private fb:FormBuilder,
  private toastr:ToastrService,
  private photoService:PhotosService,
  private activatedRoute:ActivatedRoute,
  private router:Router){
  activatedRoute.params.subscribe((params) => {
    if(params['id']){
     this.photoService.loadAPhoto(params['id']).subscribe(serverphoto => {
      if(serverphoto !== null){
        this.photo = serverphoto
      } 
     })
    }
  })
}
  ngOnInit(): void {
    this.initializeForm();
  }
initializeForm(){
  this.editPhoto = this.fb.group({
    value:['',Validators.required]
  })
}
onSubmit(){
  const newTitle = this.editPhoto.get('value')?.value
  const photoId = this.photo._id;
  this.photoService.editPhotoTitle(photoId,newTitle).subscribe(data =>{
    this.toastr.success("Title successfully edited!!" )
    this.photo = data
    this.router.navigateByUrl('/photos')
  },(error) => {
    this.toastr.error("Update failed!!")
    console.log("falied", error)
  })
}
}
