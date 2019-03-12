import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutRoutingModule} from './about-routing.module';
import {AboutComponent} from './about.component';
import {ArticleModule} from "../../modules/article/article.module";
import {MainTitleModule} from "../../modules/main-title/main-title.module";
import {ContactFormModule} from "../../modules/contact-form/contact-form.module";

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    ArticleModule,
    MainTitleModule,
    ContactFormModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule {
}
