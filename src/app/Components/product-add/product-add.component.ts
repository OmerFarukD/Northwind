import { ToastrService } from 'ngx-toastr';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private producttService:ProductService,private toastrService:ToastrService) { }
productAddForm:FormGroup;

  ngOnInit(): void {
    this.createAddProductForm();
  }
createAddProductForm(){
this.productAddForm=this.formBuilder.group({
  productName:["",Validators.required],
  unitPrice:["",Validators.required],
  categoryId:["",Validators.required]
});
}
add(){
 if(this.productAddForm.valid){
  let productModel=Object.assign({},this.productAddForm.value)
  this.producttService.add(productModel).subscribe(response=>{
    console.log(response)
    this.toastrService.success(response.message);
    this.toastrService.error();
  },responseError=>{
this.toastrService.error(responseError.error)
  })
 }
 else{
   this.toastrService.error("form eksik","Dikkat!!!")
 }
}
}
