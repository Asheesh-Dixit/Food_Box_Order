import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlidebarComponent } from '../slidebar/slidebar.component';
import { AddproductComponent } from './addproduct.component';

const routes: Routes = [
  { path: 'slidebar', component: SlidebarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddcardRoutingModule { }
