import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddproductComponent } from './addproduct.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidebarComponent } from '../slidebar/slidebar.component';

@NgModule({
  declarations: [
    AddproductComponent,
    SlidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
  ]
})
export class AddproductModule { }
