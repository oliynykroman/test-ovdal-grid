import {Component, OnInit} from '@angular/core';
import {CasesList, CasesService} from "../../../service/cases.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss']
})
export class CaseListComponent implements OnInit {
  caseList$: Observable<CasesList[]>;

  constructor(private casesService: CasesService) {
  }

  ngOnInit() {
    this.getCasesList();
  }

  getCasesList(): void {
    this.caseList$ = this.casesService.getCases();
  }
}
