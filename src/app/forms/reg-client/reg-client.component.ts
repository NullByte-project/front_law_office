import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ClientService } from '../../services/client.service';
import { AlertService } from '../../services/alerts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-client',
  imports: [InputTextModule, ButtonModule, DropdownModule, InputNumberModule, CalendarModule, CheckboxModule, CommonModule, FormsModule],
  standalone: true,
  templateUrl: './reg-client.component.html',
  styleUrl: './reg-client.component.scss'
})
export class RegClientComponent {
  client = {
    name: '',
    lastName: '',
    secondLastName: '',
    typeDoc: 'CC',
    identification: '',
    birthDate: null,
    phone: '',
    email: '',
    address: '',
    city: 'Manizales',
    diferentialApproaches: {
      sex: '',
      genderIdentity: '',
      ethnicGroup: '',
      disability: '',
      armedConflictVictim: false
    }
  };

  constructor(private alertService: AlertService, private clientService: ClientService, private router: Router) {}

  docTypes = ['CC', 'CE', 'Pasaporte'];
  sexes = ['Masculino', 'Femenino', 'Otro'];
  genderIdentities = ['Cisgénero', 'Transgénero', 'No binario', 'Otro'];
  ethnicGroups = ['Afrodescendiente', 'Indígena', 'Rom', 'Raizal', 'Caucásico', 'Otro'];
  disabilities = ['Ninguna', 'Visual', 'Auditiva', 'Cognitiva', 'Motriz', 'Otra'];
  cities = ['Manizales', 'Villamaría']

  submitForm() {
    this.alertService.loading('Cargando...');
    this.clientService.createClient(this.client).subscribe({
      next: (response) => {
        console.log('Cliente creado:', response);
        // Guardar el ID del cliente en localStorage
        localStorage.setItem('clientId', response.id);
        // Redirigir al formulario del estudio socioeconómico

        this.alertService.success('Cliente registrado', 'El cliente ha sido creado exitosamente')
        .then(() => {
          this.router.navigate(['/socioeconomico']);
        });
      },
      error: (err) => {
        console.error('Error al crear cliente:', err);
        this.alertService.error('Error al registrar', 'No se pudo registrar el cliente.');
      }
    });
  }
}
