import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KompetencerDetailRoutingModule } from './kompetencer-detail-routing.module';
import { KompetencerDetailComponent } from './kompetencer-detail.component';

@NgModule({
  imports: [
    CommonModule,
    KompetencerDetailRoutingModule
  ],
  declarations: [KompetencerDetailComponent]
})
export class KompetencerDetailModule { }
