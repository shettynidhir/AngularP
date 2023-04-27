import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsServiceService {

  httpOptions:any;
  constructor(private http:HttpClient) { }
  getDetails(id:number):Observable<any>
  {
    return this.http.get("http://localhost:4500/products/"+id)
  }

  postDetails(obj:any):Observable<any>
  {
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
    return this.http.post("http://localhost:4500/reviews",obj,this.httpOptions);
  }


}
