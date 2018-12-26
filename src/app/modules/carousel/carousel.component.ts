import {Component, Input, OnInit} from '@angular/core';
import {CasesList, CasesService} from "../../service/cases.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  caseList$: Observable<CasesList[]>;

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  constructor(private casesService: CasesService) {
  }

  ngOnInit() {
    this.getCasesList();
  }

  getCasesList(): void {
    this.caseList$ = this.casesService.getCases();
  }

}
