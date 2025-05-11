import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  casos = [
    {
      concepto: 'Derecho Civil',
      cliente: 'Juan Pérez',
      responsable: 'Dra. López',
      estado: 'En proceso',
      fecha: '2025-05-01'
    },
    {
      concepto: 'Derecho Penal',
      cliente: 'Ana Gómez',
      responsable: 'Dr. Torres',
      estado: 'Finalizado',
      fecha: '2025-04-15'
    }
  ];

  clientes = [
    {
      nombre: 'Juan Pérez',
      identificacion: '12345678',
      idCaso: '001',
      concepto: 'Derecho Civil'
    },
    {
      nombre: 'Ana Gómez',
      identificacion: '87654321',
      idCaso: '002',
      concepto: 'Derecho Penal'
    }
  ];
}
