import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
    item="";
   searhItem(item_select:string){
    this.item=item_select;
   }
   goTopage():void{
    this.router.navigate([`/addcard`]);
  }


}
