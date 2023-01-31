import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(environment.baseApi + 'products');
  }
  getAllCategories() {
    return this.http.get(environment.baseApi + 'products/categories');
  }
  getProductsByCategory(keyword:string) {
    return this.http.get(environment.baseApi + 'products/category/' + keyword);
  }
  getProductById(id:any){
    return this.http.get(environment.baseApi + 'products/' + id);
  }

  getAllTasks(){

    return this.http.get(environment.loginApi + '/all-tasks')
  }
}
