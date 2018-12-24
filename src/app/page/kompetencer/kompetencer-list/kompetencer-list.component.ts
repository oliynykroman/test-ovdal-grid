import {Component, OnInit} from '@angular/core';
import {KomeptecerList, KompetencerService} from "../../../service/kompetencer.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-kompetencer-list',
  templateUrl: './kompetencer-list.component.html',
  styleUrls: ['./kompetencer-list.component.scss']
})
export class KompetencerListComponent implements OnInit {
  kompetencerItem$: Observable<KomeptecerList[]>;

  constructor(private kompetecerService: KompetencerService) {
  }

  ngOnInit() {
    this.getKompetencerItems();
  }

  getKompetencerItems(): void {
  this.kompetencerItem$ =  this.kompetecerService.getKompetencers();
  }
}
