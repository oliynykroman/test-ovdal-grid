import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KompetencerListRoutingModule } from './kompetencer-list-routing.module';
import { KompetencerListComponent } from './kompetencer-list.component';
import {KompetencerItemModule} from "../../../modules/kompetencer/kompetencer-item/kompetencer-item.module";
import {MainTitleModule} from "../../../modules/main-title/main-title.module";
import {ArticleModule} from "../../../modules/article/article.module";

@NgModule({
  imports: [
    CommonModule,
    KompetencerListRoutingModule,
    KompetencerItemModule,
    MainTitleModule,
    ArticleModule
  ],
  declarations: [KompetencerListComponent]
})
export class KompetencerListModule { }
