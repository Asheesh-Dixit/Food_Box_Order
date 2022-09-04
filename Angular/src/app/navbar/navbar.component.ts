import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private router_1:Router,private router_2:Router,private router_3:Router) { }

  ngOnInit() {
  }
  goSearch():void{
    this.router.navigate([`/search`]);
  }

  goCart():void{
    this.router_1.navigate([`/addcard`]);
  }

  cardd():void{
    this.router_2.navigate([`/carduser`]);
  }
  
  cardA():void{
    this.router_3.navigate([`/account`]);
  }
}
