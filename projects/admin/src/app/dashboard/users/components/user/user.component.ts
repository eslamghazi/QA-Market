import { TransSenderService } from './../../../../core/trans-sender.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
users:any[] =['']
form!:FormGroup
item:any
page:any=1
totalItems:any=0
langu:any
usernameFilter:any={username:""}

  constructor(private service:UserService,
              private build:FormBuilder,
              private toastr:ToastrService,
              private TransSenderService:TransSenderService,
              private translate:TranslateService) {
                this.TransSenderService.lang.subscribe((trans)=>{
                  this.langu=trans})}

  ngOnInit(): void {
    this.form = this.build.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      email:['',[Validators.required]],
      // phone:['',[Validators.required]],
    })
    this.getAllUsers()
  }
getAllUsers(){
  this.service.getAllUsers().subscribe((res:any)=>{
    this.users = res

  })
}

add(){
  this.item = ''
    this.form.reset()


  }


  addUser(){

    const model =this.form.value
    this.service.AddUser(model).subscribe((res)=>{
      this.toastr.success(this.translate.instant("toaster.addUser"))
      this.getAllUsers()
    })

  }




update(item:any){
  this.form.patchValue({
    username:item.username,
    password:item.password,
    email:item.email,
    phone:item.phone,


  })

  this.item =item
}

delete(item:any){
  this.service.deleteUser(item.id).subscribe((res)=>{
    this.toastr.success(this.translate.instant("toaster.deleteUser"))
    this.getAllUsers()


  })
  }

updateUser(){
  const model =  this.form.value
    this.service.updateUser(this.item.id , model).subscribe((res)=>{
      this.toastr.success(this.translate.instant("toaster.updateUser"))
      this.getAllUsers()
    })

}
}
