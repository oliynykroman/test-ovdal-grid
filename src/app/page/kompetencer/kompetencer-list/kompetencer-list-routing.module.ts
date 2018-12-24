import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {KompetencerListComponent} from "./kompetencer-list.component";

const routes: Routes = [
  {path: '', component: KompetencerListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KompetencerListRoutingModule {
}
