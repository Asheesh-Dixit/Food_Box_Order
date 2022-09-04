import { Product } from '../addproduct';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../card.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  
  result=0.0;
  num2=0.0;
  constructor (private cardservice:CardService,private router:Router){}
  productsaveform!:FormGroup
  product: Product=new Product();
  submitted = false;


   
  ngOnInit(){
    this.productsaveform=new FormGroup({
      product_name:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),
      product_price:new FormControl( ),
      product_total_price:new FormControl( ),
    });
}
saveProduct(saveProduct): void{ 
  this.product=new Product();   
  this.product.product_name=this.ProductName.value;
  this.product.product_price=this.ProductPrice.value;
  this.product.product_total_price=this.ProductTotalPrice.value;
  
  //this.submitted = true;
 /* if(this.productsaveform.invalid)
  {
    this.submitted=false;
    alert("PLease Fill UP ALL TABS THANKS!");
    return;
  }*/
 // alert("suess");
  this.submitted = true;
  //this.addition();
  this.save();
  this.adproductForm();
}
save() {
  this.cardservice.createProduct(this.product)
    .subscribe(data => console.log(data), error => console.log(error));
  this.product = new Product();
}
get ProductName(){
  return this.productsaveform.get('product_name');
}
get ProductPrice(){
  return this.productsaveform.get('product_price');
}
get ProductTotalPrice(){
  return this.productsaveform.get('product_total_price');
}
addition() {
  this.num2=parseFloat(this.ProductPrice.value)
  this.result=this.num2+this.result;
  this.product.product_total_price=this.result;
  }
  
  
  adproductForm(){
    this.submitted=false;
    this.productsaveform;
  }
  productclose()
  {
    this.router.navigate([`/slidebar`]);
  }
  }
 


