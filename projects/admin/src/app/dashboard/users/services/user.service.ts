import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getAllUsers(){
    return this.http.get(environment.baseApi + 'users')
  }
  AddUser(model:any){
    return this.http.post (environment.baseApi + 'users' , model)

  }
  updateUser(id:number,model:any){
    return this.http.put(environment.baseApi + 'users/' + id , model)

  }
  deleteUser(id:number){
    return this.http.delete (environment.baseApi + 'users/' + id)

  }
}
