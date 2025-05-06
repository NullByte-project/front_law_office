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


@Component({
  selector: 'app-interview-form',
  imports: [CommonModule, FormsModule, InputTextModule, DropdownModule, InputNumberModule, ButtonModule, CheckboxModule, TextareaModule],
  standalone: true,
  templateUrl: './interview-form.component.html',
  styleUrl: './interview-form.component.scss'
})
export class InterviewFormComponent {
  interview = {
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

  actions = ['Asesoría', 'Recepción', 'Documento de turno'];


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
