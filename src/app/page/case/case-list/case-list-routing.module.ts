import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CaseListComponent} from "./case-list.component";

const routes: Routes = [
  {path: '', component: CaseListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseListRoutingModule {
}
