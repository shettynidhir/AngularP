import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddproductComponent } from '../addproduct/addproduct.component';

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.css']
})
export class AdminmenuComponent {

  constructor(public dialog:MatDialog)
  {}
  openDialog():void{
    this.dialog.open(AddproductComponent);
  }
  
}
