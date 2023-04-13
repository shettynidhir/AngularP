import { Component } from '@angular/core';
import {navs} from './navlist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OUR PRODUCTS';
  navlinks=navs

  mainhead:string[]=this.navlinks.mainhead;
  imgsrc:string[]=this.navlinks.imgsrc;
  
  descriptions:string[]=
  [
    this.navlinks.seo,
    this.navlinks.branding,
    this.navlinks.logo
  ]
}
