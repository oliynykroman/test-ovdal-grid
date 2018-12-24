import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseDetailRoutingModule } from './case-detail-routing.module';
import { CaseDetailComponent } from './case-detail.component';
import {ArticleModule} from "../../../modules/article/article.module";
import {MainTitleModule} from "../../../modules/main-title/main-title.module";

@NgModule({
  imports: [
    CommonModule,
    CaseDetailRoutingModule,
    ArticleModule,
    MainTitleModule
  ],
  declarations: [CaseDetailComponent]
})
export class CaseDetailModule { }
