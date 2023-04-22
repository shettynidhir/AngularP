import { Component } from '@angular/core';
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { theme1,theme2 } from '../themestyle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   icon=faHeart;

   currentheme = theme1
chngetheme(theme:string):void
{
    this.currentheme=theme=="theme1"?theme1:theme2;
}

}

