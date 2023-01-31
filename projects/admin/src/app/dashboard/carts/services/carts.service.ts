import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }

  getAllCarts(param?:any){
    let params = new HttpParams()
    params = params.append("startDate", param?.start).append("endDate", param?.end)
    return this.http.get(environment.baseApi + "carts"  , {params})
  }
  deleteCart(id:number){
return this.http.delete(environment.baseApi + 'carts/' + id)
  }

  getProductById(id:any){
    return this.http.get(environment.baseApi + 'products/' + id);
  }

  getAllTasks(){

      return this.http.get(environment.loginApi + '/all-tasks')
    }
}
