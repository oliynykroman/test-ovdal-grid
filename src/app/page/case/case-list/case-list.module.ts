import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseListRoutingModule } from './case-list-routing.module';
import { CaseListComponent } from './case-list.component';
import {CaseItemModule} from "../../../modules/cases/case-item/case-item.module";
import {MainTitleModule} from "../../../modules/main-title/main-title.module";

@NgModule({
  imports: [
    CommonModule,
    CaseListRoutingModule,
    CaseItemModule,
    MainTitleModule
  ],
  declarations: [CaseListComponent]
})
export class CaseListModule { }
