import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  submitted = false;
  darkMode = false;

  formData = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^[A-Za-z][A-Za-z0-9]*$/) // starts with letter, alphanumeric only
    ]),
    address: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    maritalStatus: new FormControl('', Validators.required),
    birthDate: new FormControl(null, Validators.required),
    angularSkillLevel: new FormControl(5, Validators.required)
  });

  onClickSubmit() {
    const birthDate = this.formData.value.birthDate;
    if (birthDate) {
      const birthYear = new Date(birthDate).getFullYear();
      if (birthYear > 2006) {
        alert('Only users born in 2006 or earlier are allowed.');
        return;
      }
    }

    if (this.formData.valid) {
      this.submitted = true;
      console.log('Form Submitted!', this.formData.value);
    } else {
      console.log('Form is not valid!');
    }
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-theme', this.darkMode);
  }
}
