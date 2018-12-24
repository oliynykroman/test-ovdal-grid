import {Component, Input, OnInit} from '@angular/core';

export interface textM {
  gridName: string;
  title: string;
  descr: string;
}

@Component({
  selector: 'app-text-module',
  templateUrl: './text-module.component.html',
  styleUrls: ['./text-module.component.scss']
})
export class TextModuleComponent implements OnInit {
  @Input() item: textM;

  constructor() {
  }

  ngOnInit() {
  }

}
