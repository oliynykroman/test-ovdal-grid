import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ContactDataService, contactFormFields} from "../../service/contact-data.service";
import {subscribeOn} from "rxjs/internal/operators";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm = this.fb.group({
    email: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: [''],
    textMessage: ['']
  })

  constructor(private fb: FormBuilder, private dataService: ContactDataService) {
  }

  ngOnInit() {
  }

  done: boolean = false;
  requestState: any;
  errorMessage: any;

  onSubmit() {
    this.dataService.addContactData(this.contactForm.value).subscribe(request => this.requestState = request, (error => console.log(error.message)));
  }


}
