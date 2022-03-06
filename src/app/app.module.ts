import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Components/product/product.component';
import { CategoryComponent } from './Components/category/category.component';
import { NaviComponent } from './Components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http'; //****************** */
import { VatAddedPipe } from './pipes/vat-added.pipe'; 
import { FormsModule ,ReactiveFormsModule,} from '@angular/forms'; //****************************** */
import { FilterPipePipe } from './pipes/filter-pipe.pipe'; //***************************** */
import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './Components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './Components/product-add/product-add.component';
import { LoginComponent } from './Components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,//************************************************ */
    FormsModule , 
    BrowserAnimationsModule,
    ReactiveFormsModule, //******Önemli */
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
