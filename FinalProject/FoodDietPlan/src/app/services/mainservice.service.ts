import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

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

}
