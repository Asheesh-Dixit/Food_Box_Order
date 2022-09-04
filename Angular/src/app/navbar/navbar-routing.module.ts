import { AddcardComponent } from './../addcard/addcard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { CarduserComponent } from '../carduser/carduser.component';
import { AccountComponent } from '../account/account.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent},
  { path: 'addcard', component: AddcardComponent},
  { path: 'carduser', component: CarduserComponent},
  { path: 'account', component: AccountComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
