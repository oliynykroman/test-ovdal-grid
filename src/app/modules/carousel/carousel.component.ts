import {Component, Input, OnInit} from '@angular/core';
import {CasesList, CasesService} from "../../service/cases.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() item: CasesList;
  caseList$: Observable<CasesList[]>;

  slideConfig = {
    "slidesToShow": 2,
    "slidesToScroll": 1
  };

  constructor(private casesService: CasesService) {
  }

  ngOnInit() {
    this.getCasesList();
  }

  getCasesList(): void {
    this.caseList$ = this.casesService.getCases();
  }

}
