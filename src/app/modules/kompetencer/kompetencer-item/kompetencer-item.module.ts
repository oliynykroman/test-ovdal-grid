import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KompetencerItemComponent} from './kompetencer-item.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    KompetencerItemComponent
  ],
  declarations: [KompetencerItemComponent]
})
export class KompetencerItemModule {
}
