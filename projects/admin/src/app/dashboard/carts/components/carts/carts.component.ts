import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { CartsService } from './../../services/carts.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
  carts:any[]=[]
  products:any[]=[]
  total = 0
  form!:FormGroup
  details:any
  page:any=1
  totalItems:any=0
  langu:any
  titleFilter:any={date:""}

  constructor(private service:CartsService,
              private toastr:ToastrService,
              private build:FormBuilder,
              private translate:TranslateService) { }

  ngOnInit(): void {
    this.getAllTasks()
    this.form = this.build.group({
      start:[''],
      end:['']
    })

    this.getAllCarts()

  }


  getAllTasks() {
    this.service.getAllTasks().subscribe((res:any)=>{
    })
  }

getAllCarts(){
  this.service.getAllCarts().subscribe((res:any)=>{
    this.carts = res


  })
}

deleteCart(id:number){
this.service.deleteCart(id).subscribe((res)=>{
  this.getAllCarts()
  this.toastr.success(this.translate.instant("toaster.deleteCart"))
})
}

applyFilter(){
  let date = this.form.value
  this.service.getAllCarts(date).subscribe((res:any)=>{
    this.carts = res
  })
}

getTotal(){
  this.total = 0
  for(let x in this.products){
    this.total += this.products[x].quantity * this.products[x].item.price
  }
}

view(index:number){
  this.products = []
this.details = this.carts[index];
for(let x in this.details.products){
this.service.getProductById(this.details.products[x].productId).subscribe((res)=>{
  this.products.push({item: res , quantity:this.details.products[x].quantity})
  this.getTotal()
})
}
}
}
