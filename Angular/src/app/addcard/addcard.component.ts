import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent implements OnInit {

  constructor (private cardservice:CardService,private router:Router){}
  cardsaveform!:FormGroup
  card : Card=new Card();
  submitted = false;

 

  ngOnInit() {
    //this.submitted=false;
    
   this.cardsaveform=new FormGroup({
    card_user:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),
    card_email:new FormControl('',[Validators.required, Validators.email]),
    card_phone:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),
     Validators.minLength(10), Validators.maxLength(10)]),
    card_address:new FormControl('',[Validators.required]),
    card_date_time:new FormControl(),
    card_branch:new FormControl(),
    card_user_name:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),
    card_new_number:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),
    Validators.minLength(16), Validators.maxLength(16)]),
    card_expaire:new FormControl('',[Validators.required]),
    card_cvv:new FormControl('',[Validators.required]),


  });
  }
  
 
  saveCard(saveCard): void{
    this.card=new Card();   
    this.card.card_user=this.CardUser.value;
    this.card.card_email=this.CradEmail.value;
    this.card.card_phone=this.CardPhone.value;
    this.card.card_address=this.CardAddress.value;
    this.card.card_date_time=this.CardDateTime.value;
    this.card.card_branch=this.CardBranch.value;
    this.card.card_user_name=this.CardUserName.value;
    this.card.card_new_number=this.CardNewNumber.value;
    this.card.card_expaire=this.CardExpaire.value;
    this.card.card_cvv=this.CardCvv.value;
    //this.submitted = true;
    if(this.cardsaveform.invalid)
    {
      this.submitted=false;
      alert("Fill UP ALL TABS THANKS!");
      return;
    }
    this.submitted = true;
    alert("suess");
    this.save();
    
   this.addCardForm();
  }

  

  save() {
    this.cardservice.createCard(this.card)
      .subscribe(data => console.log(data), error => console.log(error));
    this.card = new Card();
  }

  get CardUser(){
    return this.cardsaveform.get('card_user');
  }

  get CradEmail(){
    return this.cardsaveform.get('card_email');
  }

  get CardPhone(){
    return this.cardsaveform.get('card_phone');
  }

  get CardAddress(){
    return this.cardsaveform.get('card_address');
  }

  get CardDateTime(){
    return this.cardsaveform.get('card_date_time');
  }

  get CardBranch(){
    return this.cardsaveform.get('card_branch');
  }

  get CardUserName(){
    return this.cardsaveform.get('card_user_name');
  }

  get CardNewNumber(){
    return this.cardsaveform.get('card_new_number');

  }

  get CardExpaire(){
    return this.cardsaveform.get('card_expaire');
  }

  get CardCvv(){
    return this.cardsaveform.get('card_cvv');
  }

  addCardForm(){
    this.router.navigate([`/addproduct`]);
  }
}
