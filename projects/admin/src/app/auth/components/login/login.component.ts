import { LoginService } from './../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

export  interface Login {
  email: string,
  password: string,
  role:string
};

export interface LoginResponse {
  token: string,
  userId: string,
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {


  constructor (private fb:FormBuilder,
  private service:LoginService,
  private toaster:ToastrService,
  private router:Router,
  private translate:TranslateService)  { }

  loginForm!:FormGroup
  ngOnInit(): void {
    this.createForm()
  }

createForm(){
  this.loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    role:['admin'],
  })
}
login(){
this.service.login(this.loginForm.value).subscribe((res:any)=> {
  localStorage.setItem("token",res.token)
  this.toaster.success(this.translate.instant('toaster.loginSucs'))
  this.router.navigate(['/carts'])
})

}
}
