import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-user-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule],
  templateUrl: './user-sign-up.component.html',
  styleUrl: './user-sign-up.component.scss'
})
export class UserSignUpComponent {
  user = {
    name: '',
    lastName: '',
    secondLastName: '',
    email: '',
    phone: '',
    student_code: '',
    practice_level: '',
    speciality: '',
    document: '',
    type_document: '',
    gender: '',
    password: ''
  };

  submitUser() {
    console.log('Usuario a registrar:', this.user);
    // Aquí puedes llamar al servicio para enviar el POST al backend
  }
}
