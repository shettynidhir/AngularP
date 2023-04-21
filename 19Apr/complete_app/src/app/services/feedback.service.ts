import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  getFeedback():Observable<any>
  {
    return this.http.get("http://localhost:4500/feedbacks")
  }
}
