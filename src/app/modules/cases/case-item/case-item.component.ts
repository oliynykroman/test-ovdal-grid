import {Component, Input, OnInit} from '@angular/core';
import {CasesList} from "../../../service/cases.service";

@Component({
  selector: 'app-case-item',
  templateUrl: './case-item.component.html',
  styleUrls: ['./case-item.component.scss']
})
export class CaseItemComponent implements OnInit {

  @Input() item: CasesList;

  constructor() {
  }
  ngOnInit() {
  }

}
