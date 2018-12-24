import {Component, Input} from '@angular/core';

export interface imageM {
  gridName: string;
  margin:boolean;
  src: string;
  alt: string;

}

@Component({
  selector: 'app-image-module',
  templateUrl: './image-module.component.html',
  styleUrls: ['./image-module.component.scss']
})

export class ImageModuleComponent {
  @Input() item: imageM;
  constructor() {
  }
}
