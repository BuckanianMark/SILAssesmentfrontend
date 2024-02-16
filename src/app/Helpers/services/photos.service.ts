import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EDIT_PHOTO_URL, GET_PHOTO_BY_ID, PHOTOS_URL } from '../../constants/url';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient) { }
  loadPhotos(){
    return this.http.get(PHOTOS_URL)
  }
  editPhotoTitle(id:string,newTitle:string){
    const payload = {newTitle}
    return this.http.put(EDIT_PHOTO_URL + id,payload)
  }
  loadAPhoto(photoId:string){
    return this.http.get(GET_PHOTO_BY_ID + photoId)
  }
}
