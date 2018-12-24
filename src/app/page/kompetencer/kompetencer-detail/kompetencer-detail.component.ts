import {Component, OnInit} from '@angular/core';
import {KomeptecerDetail, KompetencerService} from "../../../service/kompetencer.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-kompetencer-detail',
  templateUrl: './kompetencer-detail.component.html',
  styleUrls: ['./kompetencer-detail.component.scss']
})
export class KompetencerDetailComponent implements OnInit {
  kompetencer$: Observable<KomeptecerDetail>;

  constructor(private kompetencerService: KompetencerService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.getKompetencerItem();
  }

  getKompetencerItem(): void {
    const id = +this.router.snapshot.paramMap.get('id');
    this.kompetencer$ = this.kompetencerService.getKompetencer(id);
  }
}
