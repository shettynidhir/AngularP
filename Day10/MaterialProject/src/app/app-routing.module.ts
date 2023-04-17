import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { ButtonComponent } from './button/button.component';

const routes: Routes = [
  {path:"",component:ButtonComponent},
  {path:"register",component:DialogboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
