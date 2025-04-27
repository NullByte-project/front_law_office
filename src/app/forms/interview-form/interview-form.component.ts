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
    creation_date: new Date(),
    responsible_id: 1,
    cliente_id: null, 
    legalConcept: '',
    action: ''
  }

  constructor(private alertService: AlertService, private clientService: ClientService, private router: Router) {}

  actions = ['Asesoría', 'Recepción', 'Documento de turno'];
}
