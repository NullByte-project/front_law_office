import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TextareaModule } from 'primeng/textarea';

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
    description: '',
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

  householdTypes = ['Propia', 'Arrendada', 'Familiar'];
  results = ['Favorable', 'Desfavorable', 'Pendiente'];
  socioeconomicLevels = ['Bajo', 'Medio', 'Alto'];

  OnSubmit() {
    console.log(this.socioForm);
    // Aquí puedes agregar la lógica para enviar el formulario o realizar otras acciones necesarias.
  }
}
