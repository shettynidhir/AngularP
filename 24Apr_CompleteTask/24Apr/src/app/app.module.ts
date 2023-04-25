import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProdComponent } from './products/prod/prod.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { FormsModule } from '@angular/forms';
import { CategoryPipe } from './products/category.pipe';
import { RangepipePipe } from './products/rangepipe.pipe';
import { ComplaintComponent } from './page/complaint/complaint.component';
import { MenubarComponent } from './menubar/menubar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProdComponent,
  
    CategoryPipe,
       RangepipePipe,
       ComplaintComponent,
       MenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
