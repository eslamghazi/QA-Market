import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { product } from './../../Models/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
@Input() data!:product
@Output() item = new EventEmitter()
addButton:boolean = false
amount:number = 1

  constructor(private toastr:ToastrService,
              private translate:TranslateService) { }

  ngOnInit(): void {
  }
add(){
this.item.emit({item:this.data,quantity:this.amount})
}

minsAmount(){
  if(this.amount > 1){
    this.amount--
  }
}

plusAmount(){
  if(this.amount < this.data.rating.count){
  this.amount++

}else{
  this.toastr.warning(this.translate.instant("toaster.exceedCount"))
}
}
}
