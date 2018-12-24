import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CaseDetailComponent} from "./case-detail.component";

const routes: Routes = [
  {
    path: '', component: CaseDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseDetailRoutingModule {
}
