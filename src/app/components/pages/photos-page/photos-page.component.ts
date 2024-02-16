import { Component, ElementRef,  OnInit, ViewChild } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { PhotosService } from 'src/app/Helpers/services/photos.service';

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.css']
})
export class PhotosPageComponent implements OnInit{
  @ViewChild("modal") modal!:ElementRef<HTMLDivElement>
  @ViewChild("input") input!:ElementRef<HTMLInputElement>

  // showHide(){
  //   if(this.btn){
  //     this.btn.nativeElement.addEventListener('click', ()=> console.log("clicked"))
  //   }
  // }
  handlehide(){
   this.modal.nativeElement.classList.replace("top-0","top-[100%]")
  }
  handleshow(){
    this.modal.nativeElement.classList.replace('top-[100%]','top-0')
  }
  photos!:any[]
  constructor(private photosservice:PhotosService){}
  ngOnInit(): void {
    this.loadAllPhotos()  
  }
  loadAllPhotos(){
    this.photosservice.loadPhotos().subscribe((data:any) => {
      this.photos = data
    })
  }



}
