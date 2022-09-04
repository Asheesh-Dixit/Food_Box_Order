import { NavbarComponent } from './navbar/navbar.component';
import { CarduserComponent } from './carduser/carduser.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcardComponent } from './addcard/addcard.component';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [

 // {path: '', redirectTo: 'navbar', pathMatch: 'full'},
  {path: '', redirectTo: 'slidebar', pathMatch: 'full'},
 { path: 'navbar', component: NavbarComponent},
  { path: 'slidebar', component: SlidebarComponent },
  { path: 'addcard', component: AddcardComponent},
 // { path: 'addproduct', component: AddproductComponent},
  { path: 'search', component: SearchComponent},
  { path: 'carduser', component: CarduserComponent},
  { path: 'account', component: AccountComponent},
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
