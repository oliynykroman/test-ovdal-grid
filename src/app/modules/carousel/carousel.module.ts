import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './carousel.component';
import {SlickCarouselModule} from "ngx-slick-carousel";

@NgModule({
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [
    CarouselComponent
  ],
  declarations: [CarouselComponent]
})
export class CarouselModule {
}
