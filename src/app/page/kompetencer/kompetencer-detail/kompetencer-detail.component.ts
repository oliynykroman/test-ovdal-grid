import {Component, OnInit} from '@angular/core';
import {KompetencerService} from "../../../service/kompetencer.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-kompetencer-detail',
  templateUrl: './kompetencer-detail.component.html',
  styleUrls: ['./kompetencer-detail.component.scss']
})
export class KompetencerDetailComponent implements OnInit {
  // kompetencerItem: Kompetencer;

  constructor(private kompetencerService: KompetencerService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    // this.getKompetencerItem();
  }

  // getKompetencerItem(): void {
  //   const id = +this.router.snapshot.paramMap.get('id');
  //   this.kompetencerService.getKompetencer(id).subscribe(kompetencer => this.kompetencerItem = kompetencer);
  // }
}
