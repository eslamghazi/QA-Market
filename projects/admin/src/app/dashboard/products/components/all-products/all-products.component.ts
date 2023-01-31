import { TranslateService } from '@ngx-translate/core';
import { TransSenderService } from './../../../../core/trans-sender.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { product } from './../../Models/product';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit{
  products:product[]=[]
  categories:string[]=[]
  cartproducts:any[]=[]
  base64:any = ''
  form!:FormGroup
  item:any
  page:any=1
  totalItems:any=0
  langu:any
  titleFilter:any={title:""}
constructor(private service:ProductsService,
            private toastr:ToastrService,
            private build:FormBuilder,
            private TransSenderService:TransSenderService,
            private translate:TranslateService)
            {this.TransSenderService.lang.subscribe((trans)=>{
              this.langu=trans})
             }

  ngOnInit() {
    this.form = this.build.group({
title:['',[Validators.required]],
price:['',[Validators.required]],
description:['',[Validators.required]],
image:['',[Validators.required]],
category:['',[Validators.required]],
    })
    this.getAllProducts()
    this.getAllCategories()
  }

getAllProducts(){
  this.service.getAllProducts().subscribe((res:any)=>{
    this.products=res


  }
  )
}

getAllCategories(){
  this.service.getAllCategories().subscribe((res:any)=>{
    this.categories=res


  }
  )
}

delete(item:any){
this.service.delete(item.id).subscribe((res)=>{
  this.toastr.success(this.translate.instant("toaster.deleteProduct"))
  this.getAllProducts()
})
}

filterCategory(event:any){
  /////You must put semi-column manually after decleration to avoid fake type error////////
  let value = event.target.value;
  /////You must put semi-column manually after decleration to avoid fake type error////////
(value =='all') ? this.getAllProducts(): this.getProductsByCategory(value)

}

getProductsByCategory(keyword:string){

  this.service.getProductsByCategory(keyword).subscribe((res:any)=>{


    this.products = res
  })
}

getSelectedCategory(event:any){
  this.form.get('category')?.setValue(event.target.value)

}

getImagePath(event:any){
const file = event.target.files[0]
const reader = new FileReader()
reader.readAsDataURL(file)
reader.onload = () => {
  this.base64 = reader.result
  this.form.get('image')?.setValue('this.base64')

}
}


add(){
this.item = ''
  this.form.reset()
  this.base64=''

}


addProduct(){

  const model =this.form.value
  this.service.createProduct(model).subscribe((res)=>{
    this.toastr.success(this.translate.instant("toaster.addProduct"))
    this.getAllProducts()
  })

}

update(item:any){
  this.form.patchValue({
    title:item.title,
    price:item.price,
    description:item.description,
    image:item.image,
    category:item.category,

  })

  this.item =item

this.base64 = item.image

}
updateProduct(){
  const model =  this.form.value
    this.service.updateproduct(this.item.id , model).subscribe((res)=>{
      this.toastr.success(this.translate.instant("toaster.updateProduct"))
      this.getAllProducts()
    })






}
}
