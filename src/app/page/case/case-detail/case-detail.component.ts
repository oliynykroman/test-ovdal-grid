import { Component, OnInit } from '@angular/core';
import {casesDetails, CasesService} from "../../../service/cases.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.scss']
})
export class CaseDetailComponent implements OnInit {

  caseDetail$ : Observable<casesDetails>;

  constructor(private caseService: CasesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getCaseDetail();
  }

  getCaseDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.caseDetail$ = this.caseService.getCase(id);
  }
}
