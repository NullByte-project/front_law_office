import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  /**
   * Maneja el evento de inicio de sesión.
   * Imprime el usuario y la contraseña en consola.
   * Aquí se puede agregar la lógica para validar credenciales, llamar a una API o redirigir al usuario.
   */
  onLogin() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    // Aquí puedes redirigir, validar, llamar API, etc.
  }
}
