import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleGeneratorRoutingModule } from './article-generator-routing.module';
import { ArticleGeneratorComponent } from './article-generator.component';
import {MainTitleModule} from "../../modules/main-title/main-title.module";
import {ArticleModule} from "../../modules/article/article.module";

@NgModule({
  imports: [
    CommonModule,
    ArticleGeneratorRoutingModule,
    ArticleModule,
    MainTitleModule,
  ],
  declarations: [ArticleGeneratorComponent]
})
export class ArticleGeneratorModule { }
