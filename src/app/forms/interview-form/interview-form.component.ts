
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TextareaModule } from 'primeng/textarea';
import { ClientService } from '../../services/client.service';
import { AlertService } from '../../services/alerts.service';
import { InterviewService } from '../../services/interview.service';
import { Router } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-interview-form',
  imports: [CommonModule, FormsModule, InputTextModule, 
    DropdownModule, InputNumberModule, ButtonModule, CheckboxModule, TextareaModule, RadioButtonModule],
  standalone: true,
  templateUrl: './interview-form.component.html',
  styleUrl: './interview-form.component.scss'
})
export class InterviewFormComponent {
 
  formSubmitted = false;

  interview = {
    email: '',
    fullName: '',
    documentType: '',
    documentNumber: '',
    ageRange: '',
    phone: '',
    altEmail: '',
    address: '',
    residence: '',
    factualDescription: '',
    responsibleId: 1,
    legalConcept: '',
    action: '',
    legalCase: {
      folder: '',
      legalAction: {
        approvalCode: '',
        procedure: null,
        instructions: '',
        additionalInfo: ''
      }
    },
    client: {}
  };
  

  constructor(private alertService: AlertService, private clientService: ClientService, private interviewService: InterviewService,private router: Router) {}
 
 
  documentTypes = [
    'Cédula de Ciudadanía',
    'Cédula de Extranjería',
    'Tarjeta de Identidad',
    'Pasaporte',
    'Otro'
  ];


  actions = ['Asesoría', 'Recepción', 'Documento de turno'];


  step = 1;

  
  ageRanges = [
    'Menor de 18 años (N.N.A)',
    'De 18-28 Años',
    'De 29-65 Años',
    'Mayor de 65 años (Genonte o por Añocidad)'
  ];
  
  residenceOptions = ['Manizales', 'Villamaría', 'Otro'];
  

  nextStep(currentStep: number) {
    this.formSubmitted = true;
  
    if (!this.validateStep(currentStep)) {
      this.alertService.error('Por favor complete todos los campos requeridos.');
      return;
    }
  
    this.formSubmitted = false;
    this.step = currentStep + 1;
  }
  
  validateStep(step: number): boolean {
    switch (step) {
      case 1:
        return !!(
          this.interview.email &&
          this.interview.fullName &&
          this.interview.documentType &&
          this.interview.documentNumber
        );
  
      case 2:
        return !!(
          this.interview.ageRange &&
          this.interview.phone &&
          this.interview.altEmail &&
          this.interview.address &&
          this.interview.residence
        );
  
      // Paso 3 a 10: se implementarán más adelante
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        return true;
  
      default:
        return false;
    }
  }
  
  previousStep() {
    if (this.step > 1) {
      this.step--;
      this.formSubmitted = false; // Limpiar validaciones al retroceder
    }
  }
  
  ngOnInit() {
    // Verificar si hay datos en localStorage y cargarlos en el formulario
    //localStorage.removeItem('interviewForm');
    const storedInterview = localStorage.getItem('interviewForm');
    const storedClient = JSON.parse(localStorage.getItem('dataClient') || '{}');
    this.interview.client = storedClient;
    if (storedInterview) {
      this.interview = JSON.parse(storedInterview);
      //console.log('Datos de la entrevista cargados desde localStorage:', this.interview);
    } else {
      //console.log('No se encontraron datos de la entrevista en localStorage.');
    }
  }
  
  goBack() {
    const interviewData = JSON.stringify(this.interview);
    localStorage.setItem('interviewForm', interviewData);
    this.router.navigate(['/socioeconomico']);
  }  
}
