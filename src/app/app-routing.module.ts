import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './Components/login/login.component';
import { ProductAddComponent } from './Components/product-add/product-add.component';
import { ProductComponent } from './Components/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},
  {path:"Products",component:ProductComponent},
  {path:"Products/category/:categoryId",component:ProductComponent},
  {path:"Products/add",component:ProductAddComponent,canActivate:[LoginGuard]},
  {path:"User/login",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
