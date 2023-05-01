import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarComponent } from './menubar/menubar.component';
import { UsergroupModule } from './usergroup/usergroup.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MiniprodComponent } from './usergroup/nutritionvalue/miniprod/miniprod.component';
import { DietComponent } from './usergroup/dietplan/diet/diet.component';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UsergroupModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
