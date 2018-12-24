import {Component, OnInit} from '@angular/core';
import {Adress, Copyright, TermsAdressService} from "../../service/terms-adress.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  adress$: Observable<Adress[]>;
  copyright$: Observable<Copyright[]>;

  constructor(private adressCopyService: TermsAdressService) {
  }

  ngOnInit() {
    this.getFooterData();
  }

  getFooterData(): void {
    this.adress$ = this.adressCopyService.getAdress();
    this.copyright$ = this.adressCopyService.getCopyright();
  }

}
