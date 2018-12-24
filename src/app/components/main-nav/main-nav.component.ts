import { Component, OnInit } from '@angular/core';
import {MainNavService} from "./main-nav.service";
import {MainNav} from "./main-nav";
import {Observable} from "rxjs/index";
import {share, tap} from "rxjs/internal/operators";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
   menuItems$ : Observable<MainNav[]>;

  constructor(private mainNavService: MainNavService) { }

  ngOnInit() {
    this.getMenuNav();

  }
  getMenuNav():void{
     this.menuItems$ = this.mainNavService.getMainNav().
     pipe(
       share()
     );
  }

}
