import {Component, Input, OnInit} from '@angular/core';
import {KomeptecerList} from "../../../service/kompetencer.service";

@Component({
  selector: 'app-kompetencer-item',
  templateUrl: './kompetencer-item.component.html',
  styleUrls: ['./kompetencer-item.component.scss']
})
export class KompetencerItemComponent implements OnInit {

  @Input() kompItem: KomeptecerList;

  constructor() {
  }

  ngOnInit() {
  }

}
