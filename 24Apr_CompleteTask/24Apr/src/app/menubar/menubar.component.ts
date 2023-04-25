import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})

export class MenubarComponent {
  types:string[]=[
    "All",
    "Electronics",
    "Grocery",
    "Stationary",
   
  ]
  selected:any="All";
  minval:number=100;
  maxval:any=500;

}
