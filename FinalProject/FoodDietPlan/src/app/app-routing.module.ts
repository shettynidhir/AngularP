import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutritionvalueComponent } from './usergroup/nutritionvalue/nutritionvalue.component';
import { ProductsComponent } from './usergroup/products/products.component';
import { DietplanComponent } from './usergroup/dietplan/dietplan.component';
import { DietdescComponent } from './usergroup/dietdesc/dietdesc.component';
import { ConsultexpertComponent } from './usergroup/consultexpert/consultexpert.component';

const routes: Routes = [
  {path:"",component:ProductsComponent},
  {path:"nutrition/:id",component:NutritionvalueComponent},
  {path:"products",component:ProductsComponent},
  {path:"dietplan",component:DietplanComponent},
  {path:"dietdesc/:id",component:DietdescComponent},
  {path:"consultexp",component:ConsultexpertComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
