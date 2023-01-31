import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../components/login/login.component';
import { Register } from '../components/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(model:Login){
    return this.http.post(environment.loginApi.replace('tasks','auth')+'/login',model)
  }

  register(model:Register){
    return this.http.post(environment.loginApi.replace('tasks','auth')+'/createAccount',model)

  }
}
