import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }
  password="Amnin";
  email="Admin"
  ngOnInit() {
  }

  goTopage(email,password):void{
    if( this.email=="Admin" || this.email=="admin" || this.email=="ADMIN")
      {
        if(this.email=="Admin" || this.email=="admin" || this.email=="ADMIN")
        {
          alert("congratulation you have admin login access");
        }

      }
  }

}
