import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KompetencerDetailComponent} from "./kompetencer-detail.component";

const routes: Routes = [
  {path:'', component:KompetencerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KompetencerDetailRoutingModule { }
