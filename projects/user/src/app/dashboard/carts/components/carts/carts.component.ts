import { TranslateService } from '@ngx-translate/core';
import { TransSenderService } from './../../../../core/trans-sender.service';
import { ToastrService } from 'ngx-toastr';
import { CartsService } from './../../services/carts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
  cartproducts:any[]=[]
  total:number = 0
  success:boolean = false
  page:any=1
  totalItems:any=0
  langu:any
  titleFilter:any={item:{title:""}}
  ratingCount = 0
  constructor(private service:CartsService,
              private toastr:ToastrService,
              private TransSenderService:TransSenderService,
              private translate:TranslateService)
              { this.TransSenderService.lang.subscribe((trans)=>{
                this.langu=trans})
               }

  ngOnInit(): void {
    this.getCartProducts()

  }
getCartProducts(){
  if('cart' in localStorage){
    this.cartproducts = JSON.parse(localStorage.getItem('cart')!)


  }
  this.getCartTotal()


}


plusAmount(index:number){
  if(this.cartproducts[index].quantity < this.cartproducts[index].item.rating?.count){

  this.cartproducts[index].quantity++
  this.getCartTotal()
  localStorage.setItem('cart',JSON.stringify(this.cartproducts))
}else{
  this.toastr.warning(this.translate.instant("toaster.exceedCount"))
}


 }

 minsAmount(index:number){
  if(this.cartproducts[index].quantity > 1){
    this.cartproducts[index].quantity--
    this.getCartTotal()
    localStorage.setItem('cart',JSON.stringify(this.cartproducts))
  }
 }

 detectAmount(){

    this.getCartTotal()
    localStorage.setItem('cart',JSON.stringify(this.cartproducts))

 }

 deleteProduct(index:any){
this.cartproducts.splice(index , 1)
this.getCartTotal()
localStorage.setItem('cart',JSON.stringify(this.cartproducts))
 }

 clearCart(){
this.cartproducts = []
this.getCartTotal()
localStorage.setItem('cart',JSON.stringify(this.cartproducts))


 }


getCartTotal(){
this.total = 0
for(let x in this.cartproducts){
  this.total += this.cartproducts[x].item.price * this.cartproducts[x].quantity
}
}

creatCart(){
  let products = this.cartproducts.map(item=>{
    return {productId:item.item.id,quantity:item.quantity}
  })
  let MODEL = {
    userId:5,
    date: new Date(),
    products:products
  }
this.service.createCart(MODEL).subscribe((res)=>{

this.clearCart()
this.toastr.success(this.translate.instant("toaster.sendCart"))
this.success = true
})
}


}
