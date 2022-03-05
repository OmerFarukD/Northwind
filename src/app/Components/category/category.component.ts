import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categories:Category[]=[];
currentCategory:Category; //tsconfig.json "strictPropertyInitialization" false olacak.
dataLoaded=false;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }
getCategories():void{
this.categoryService.getCategories().subscribe(response=>{
  this.categories=response.data;
  this.dataLoaded=true;
})
}
setCurrentCategory(category:Category){
this.currentCategory=category;
}
getCurrentCategoryClass(category:Category){
if(category==this.currentCategory){
return "list-group active";
}
return "list-group";
}
getAllCategoryClass(){
  if(!this.currentCategory){
    return "list-group-item active";
  }
  else{
    return "list-group-item";
  }
}
}