import { CartService } from './../../services/cart.service';
import { Product } from 'src/app/models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]=[];
  dataLoaded=false;
  filterText="";
  
 
  constructor(private productService:ProductService,private activatedRoote:ActivatedRoute,private toastrService:ToastrService,
    private cartService:CartService ) {

  }

  ngOnInit(): void {
  this.activatedRoote.params.subscribe(params=>{
    if(params["categoryId"]){
    this.getProductByCategory(params["categoryId"])
    }
    else{
      this.getProducts();
    }
  })



  }
  getProducts(){
  this.productService.getProducts().subscribe(response=>{
    this.products=response.data;
    this.dataLoaded=true;
  })
  }
  getProductByCategory(categoryId:number){
  this.productService.getProductsByCategory(categoryId).subscribe(response=>{
    this.products=response.data;
    this.dataLoaded=true;
  })
  }
addToCart(product:Product){
this.toastrService.success("sepete eklendi.",product.productName)
this.cartService.addToCart(product);
}

}
