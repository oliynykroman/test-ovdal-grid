import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTitleComponent } from './main-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    MainTitleComponent
  ],
  declarations: [MainTitleComponent]
})
export class MainTitleModule { }
