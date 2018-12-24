import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseItemComponent } from './case-item.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CaseItemComponent
  ],
  declarations: [CaseItemComponent]
})
export class CaseItemModule { }
