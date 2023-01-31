import { TranslateService } from '@ngx-translate/core';
import { TransSenderService } from './../../../../core/trans-sender.service';
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
  page:any=1
  totalItems:any=0
  langu:any
  titleFilter:any={title:""}
constructor(private service:ProductsService,
            private toastr:ToastrService,
            private TransSenderService:TransSenderService,
            private translate:TranslateService)
            {this.TransSenderService.lang.subscribe((trans)=>{
              this.langu=trans})
             }


  ngOnInit() {
    this.getAllProducts()
    this.getAllCategories()
    this.getAllTasks()
  }

  getAllTasks() {
    this.service.getAllTasks().subscribe((res:any)=>{
    })
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
addToCart(event:any){
  //Send data to localStorage ----> JSON.stringify()//

  //Receive data from localStorage -----> JSON.parse()//
  if('cart' in localStorage){
    this.cartproducts = JSON.parse(localStorage.getItem('cart')!)
    let exist = this.cartproducts.find(item => item.item.id == event.item.id)
    ////// For preventing dublicating Items//////
    if (exist){
      this.toastr.warning(this.translate.instant("toaster.alreadyExist"))
    }else{
      this.cartproducts.push(event)
      localStorage.setItem('cart',JSON.stringify(this.cartproducts))
    this.toastr.success(this.translate.instant("toaster.addProduct"))
    }
    ////// For preventing dublicating Items//////
  }else{
    this.cartproducts.push(event)
    localStorage.setItem('cart',JSON.stringify(this.cartproducts))
    this.toastr.success(this.translate.instant("toaster.addProduct"))
  }
   (event);

}

}
