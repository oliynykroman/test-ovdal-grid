import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import {ImageModuleComponent} from "../../components/article/image-module/image-module.component";
import {TextModuleComponent} from "../../components/article/text-module/text-module.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    ArticleComponent
  ],
  declarations: [ArticleComponent, ImageModuleComponent, TextModuleComponent]
})
export class ArticleModule { }
