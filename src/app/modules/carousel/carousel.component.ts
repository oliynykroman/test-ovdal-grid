import {Component, Input, OnInit} from '@angular/core';
import {CasesList} from "../../service/cases.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() item: CasesList[];

  constructor() {
  }

  ngOnInit() {
  }

}
