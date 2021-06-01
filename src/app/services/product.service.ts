import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponceModel } from '../models/productResponseModule';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  apiUrl = "https://localhost:44323/api/products/getall";
  
  getProducts():Observable<ProductResponceModel> {
    return this.httpClient.get<ProductResponceModel>(this.apiUrl);
  }
}
