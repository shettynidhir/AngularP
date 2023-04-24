import { Component } from '@angular/core';
import { ProdserviceService } from '../services/prodservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any;
  types:string[]=[
    "All",
    "Electronics",
    "Grocery",
    "Stationary",
   
  ]
  selected:any="All";
  minval:number=100;
  maxval:any=500;
  constructor(private prd:ProdserviceService)
  {
    this.prd.getProducts().subscribe(
      {
        next:(data:any)=>this.products=data,
        error:()=>this.products=[]
      }
    )
  }

}
