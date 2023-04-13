import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-below',
  templateUrl: './below.component.html',
  styleUrls: ['./below.component.css']
})
export class BelowComponent {
  title:string="OUR PRODUCTS";
  @Input() mhead:string=""
  @Input() description:string=""
  @Input() imgsrc:string=""

  

}
