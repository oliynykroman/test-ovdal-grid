import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  },
  {
    path: 'index',
    loadChildren: './page/index/index.module#IndexModule'
  },
  {
    path: 'cases',
    loadChildren: './page/case/case-list/case-list.module#CaseListModule',
    data: {breadcrumb: 'Cases'}
  },
  {
    path: 'cases/:id',
    loadChildren: './page/case/case-detail/case-detail.module#CaseDetailModule',
    data: {breadcrumb: 'id'}
  },
  {
    path: 'kompetencer',
    loadChildren: './page/kompetencer/kompetencer-list/kompetencer-list.module#KompetencerListModule',
    data: {breadcrumb: 'Kompetencer'}
  },
  {
    path: 'kompetencer/:id',
    loadChildren: './page/kompetencer/kompetencer-detail/kompetencer-detail.module#KompetencerDetailModule',
    data: {breadcrumb: 'id'}
  },
  {
    path: 'about',
    loadChildren: './page/about/about.module#AboutModule',
    data:{breadcrumb:'About'}
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})]
})
export class AppRoutingModule {
}
