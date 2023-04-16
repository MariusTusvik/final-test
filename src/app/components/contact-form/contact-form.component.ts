import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  constructor(private snackBar: MatSnackBar) {}
  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      organization: new FormControl(null, Validators.required),
      telephone: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required),
      agree: new FormControl(false, Validators.requiredTrue),
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log("Contact information", this.contactForm.value);
      // Send form data to your server here
      this.snackBar.open('Success! Your form has been submitted.', 'Close', {
        duration: 7000,
        panelClass: ['success-snackbar'],
      });
      this.contactForm.reset();
    } else {
      console.log('Form is not valid');
      this.snackBar.open('Invalid form! Please check your input.', 'Close', {
        duration: 7000,
        panelClass: ['invalid-form-snackbar'],
      });
    }
  }
}
