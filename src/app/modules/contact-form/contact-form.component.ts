import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    textMessage: ['']
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  onSubmit() {

    console.log(this.contactForm.value);
  }

}
