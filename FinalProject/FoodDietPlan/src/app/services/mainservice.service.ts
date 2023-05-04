import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  httpOptions:any;

  constructor(private http:HttpClient) { }
  getProducts():Observable<any>
  {
    return this.http.get("http://localhost:4500/foodproducts")
  }

  getSingleProduct(id:number):Observable<any>
  {
    return this.http.get("http://localhost:4500/foodproducts/"+id)
  }

  getNutrition(id:number):Observable<any>
  {
    return this.http.get("http://localhost:4500/foodproducts/"+id)
  }

 
  getDietPlan():Observable<any>
  {
    return this.http.get("http://localhost:4500/dietplans")
  }

   getSingleDiet(id:number):Observable<any>
  {
    return this.http.get("http://localhost:4500/dietplans/"+id)
  }
  postQues(obj:any):Observable<any>{

    this.httpOptions =  new HttpHeaders({
      'Content-Type': 'application/json',
    })

  return this.http.post("http://localhost:4500/quesans",obj,this.httpOptions);
 }

 postProduct(obj:any):Observable<any>{

  this.httpOptions =  new HttpHeaders({
    'Content-Type': 'application/json',
  })

return this.http.post("http://localhost:4500/foodproducts",obj,this.httpOptions);
}




postAnswer(obj:any):Observable<any>{

  this.httpOptions =  new HttpHeaders({
    'Content-Type': 'application/json',
  })

return this.http.post("http://localhost:4500/answers",obj,this.httpOptions);
}

getQuestion():Observable<any>
{
  return this.http.get("http://localhost:4500/quesans");
}
getAnswers():Observable<any>
{
  return this.http.get("http://localhost:4500/answers")
 
}


}


