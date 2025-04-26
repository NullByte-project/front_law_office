import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TextareaModule } from 'primeng/textarea';
import { ClientService } from '../../../services/client.service';
import { AlertService } from '../../../services/alerts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socioeconomic-form',
  imports: [CommonModule, FormsModule, InputTextModule, DropdownModule, InputNumberModule, ButtonModule, CheckboxModule, TextareaModule],
  standalone: true,
  templateUrl: './socioeconomic-form.component.html',
  styleUrl: './socioeconomic-form.component.scss'
})
export class SocioeconomicFormComponent {
  socioForm = {
    householdType: '',
    description: 'Descripcion',
    result: '',
    personalIncome: null,
    profession: '',
    familyIncome: null,
    workingHouseholdMembers: null,
    socioeconomicLevel: '',
    householdSize: null,
    financialDependents: null,
    isFinancialDependent: false,
    supporterPayLawyer: false,
    comments: ''
  };

  constructor(private alertService: AlertService, private clientService: ClientService, private router: Router) {}

  householdTypes = ['Propia', 'Arrendada', 'Familiar'];
  results = ['Favorable', 'Desfavorable', 'Pendiente'];
  socioeconomicLevels = ['Bajo', 'Medio', 'Alto'];

  submitForm() {
    const clientId = localStorage.getItem('clientId');
    if (!clientId) {
      this.alertService.error('Cliente no encontrado', 'No se encontró el ID del cliente en localStorage.');
      return;
    }

    this.alertService.loading('Enviando estudio socioeconómico...');

    this.clientService.updateSocioeconomicStudy(this.socioForm, clientId).subscribe({
      next: (response) => {
        this.alertService.success('Estudio registrado', 'El estudio socioeconómico fue enviado correctamente.')
          .then(() => this.router.navigate(['/'])); // Aca deberia seguir al formulario para registrar la entrevista
        console.log(response)
      },
      error: (err) => {
        console.error(err);
        this.alertService.error('Error', 'No se pudo enviar el estudio socioeconómico.');
      }
    });
  }
}
