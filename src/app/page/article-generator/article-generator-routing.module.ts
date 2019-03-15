import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArticleGeneratorComponent} from "./article-generator.component";

const routes: Routes = [
  {path: '', component: ArticleGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleGeneratorRoutingModule {
}
