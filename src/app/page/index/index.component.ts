import {Component, OnInit} from '@angular/core';
import {CasesService} from "../../service/cases.service";
import {KomeptecerList, KompetencerService} from "../../service/kompetencer.service";
import {Indexblock, IndexService} from "./index.service";
import {Observable} from "rxjs";
import {CasesList} from "../../service/cases.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {

  caseList$: Observable<CasesList[]>;
  kompetencerList$: Observable<KomeptecerList[]>;
  indexPageData$: Observable<Indexblock>;

  constructor(
    private casesService: CasesService,
    private kompetencerService: KompetencerService,
    private indexPageService: IndexService) {
  }

  ngOnInit() {
    this.getCasesList();
    this.getKompetencerList();
    this.getIndexPageData();
  }

  getCasesList(): void {
    this.caseList$ =  this.casesService.getCases();
  }

  getKompetencerList(): void {
    this.kompetencerList$ = this.kompetencerService.getKompetencers();
  }

  getIndexPageData() {
    this.indexPageData$ = this.indexPageService.getIndexData().pipe();

  }
}
