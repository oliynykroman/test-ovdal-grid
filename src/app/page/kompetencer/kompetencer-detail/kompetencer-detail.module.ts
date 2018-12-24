import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KompetencerDetailRoutingModule } from './kompetencer-detail-routing.module';
import { KompetencerDetailComponent } from './kompetencer-detail.component';
import {ArticleModule} from "../../../modules/article/article.module";
import {MainTitleModule} from "../../../modules/main-title/main-title.module";

@NgModule({
  imports: [
    CommonModule,
    KompetencerDetailRoutingModule,
    ArticleModule,
    MainTitleModule
  ],
  declarations: [KompetencerDetailComponent]
})
export class KompetencerDetailModule { }
