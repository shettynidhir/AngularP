import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsergroupRoutingModule } from './usergroup-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProdComponent } from './products/prod/prod.component';
import { MaterialModule } from '../material/material.module';
import { NutritionvalueComponent } from './nutritionvalue/nutritionvalue.component';
import { MiniprodComponent } from './nutritionvalue/miniprod/miniprod.component';
import { FormsModule } from '@angular/forms';
import { TypefilterPipe } from './typefilter.pipe';
import { DietplanComponent } from './dietplan/dietplan.component';
import { DietComponent } from './dietplan/diet/diet.component';
import { DietdescComponent } from './dietdesc/dietdesc.component';
import { TypesearchPipe } from './typesearch.pipe';
import { ConsultexpertComponent } from './consultexpert/consultexpert.component';




@NgModule({
  declarations: [
    ProductsComponent,
    ProdComponent,
    NutritionvalueComponent,
    MiniprodComponent,
    TypefilterPipe,
    DietplanComponent,
    DietComponent,
    DietdescComponent,
    TypesearchPipe,
    ConsultexpertComponent,
    
 
   
  ],
  imports: [
    CommonModule,
    UsergroupRoutingModule,
    MaterialModule,
    FormsModule,
  

  ],
  exports:[
    ProductsComponent,
    ProdComponent,
    NutritionvalueComponent,
    MiniprodComponent,
    TypefilterPipe,
    DietdescComponent
  ]
})
export class UsergroupModule { }
