import { Category } from './../models/category';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';






@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  getApiUrl = "https://localhost:44363/api/Categories/GetAll"
 

  constructor(private httpClient: HttpClient) { }
  getCategories(): Observable<ListResponseModel<Category>> {
   return this.httpClient.get<ListResponseModel<Category>>(this.getApiUrl)
    
  }
}