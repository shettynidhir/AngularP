import { Component } from '@angular/core';
import { ProdserviceService } from '../services/prodservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any;
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
