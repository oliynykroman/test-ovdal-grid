import {Component, OnInit} from '@angular/core';
import {Banner} from "./banner";
import {BannerService} from "./banner.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {

  bannerItem: Banner[];

  constructor(private bannerService: BannerService) {
  }

  ngOnInit() {
    this.getBannerItem();
  }

  getBannerItem(): void {
    this.bannerService.getBannerItem().subscribe(banner => this.bannerItem = banner);
  }

}
