import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ALBUMS_URL, PAGINATED_ALBUMS_URL } from '../../constants/url';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  loadAllAlbums(){
    return this.http.get(ALBUMS_URL);
  }
  getPaginatedAlbums(params:any):Observable<any>{
    return this.http.get(PAGINATED_ALBUMS_URL);
  }
}
