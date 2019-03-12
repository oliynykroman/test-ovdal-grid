import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IndexRoutingModule} from './index-routing.module';
import {IndexComponent} from './index.component';
import {BannerModule} from "../../modules/banner/banner.module";
import {ProccessModule} from "../../modules/proccess/proccess.module";
import {CaseItemModule} from "../../modules/cases/case-item/case-item.module";
import {KompetencerItemModule} from "../../modules/kompetencer/kompetencer-item/kompetencer-item.module";
import {CarouselModule} from "../../modules/carousel/carousel.module";

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    BannerModule,
    ProccessModule,
    CaseItemModule,
    CarouselModule,
    KompetencerItemModule,
  ],
  declarations: [IndexComponent],
  exports: [
    CaseItemModule,
    KompetencerItemModule
  ]
})
export class IndexModule {
}
