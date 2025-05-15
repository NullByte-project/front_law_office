import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';; // Ajusta según estructura
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  caseData: any = null;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadCase(4); // Puedes hacer esto dinámico después
  }

  loadCase(id: number): void {
    this.dashboardService.getCaseById(id).subscribe({
      next: (data) => this.caseData = data,
      error: (err) => console.error('Error al cargar el caso:', err)
    });
  }

  getClientFullName(): string {
    const c = this.caseData?.interview?.clientId;
    if (!c) return '';
    return [c.name, c.lastName, c.secondLastName].filter(Boolean).join(' ');
  }

  getLegalArea(areaId: number): string {
    const areas: Record<number, string> = {
      1: 'Civil',
      2: 'Penal',
      3: 'Laboral',
      4: 'Derecho familiar'
    };
    return areas[areaId] || 'Área no especificada';
  }

  expandClient(): void {
    alert('Expandir cliente: en desarrollo...');
  }

expanded = {
  client: false,
  legal: [] as boolean[]
};

toggleExpand(section: 'client') {
  this.expanded[section] = !this.expanded[section];
}

toggleLegalExpand(index: number): void {
  this.expanded.legal[index] = !this.expanded.legal[index];
}



showLegalForm = false;

legalForm = {
  instructions: '',
  additionalInfo: ''
};

closeLegalForm(): void {
  this.showLegalForm = false;
  this.legalForm = {
    instructions: '',
    additionalInfo: ''
  };
}

submitLegalAction(): void {
  this.dashboardService.generateApprovalCode().subscribe({
    next: (codeData) => {
      const approvalCode = codeData.code;
      const actionData = {
        approvalCode: approvalCode,
        procedure: 5, // Lo haremos dinámico luego
        instructions: this.legalForm.instructions,
        additionalInfo: this.legalForm.additionalInfo
      };

      this.dashboardService.addLegalAction(this.caseData.id, actionData).subscribe({
        next: () => {
          this.closeLegalForm();
          this.loadCase(this.caseData.id);
        },
        error: (err) => {
          console.error('Error al guardar acción legal:', err);
        }
      });
    },
    error: (err) => {
      console.error('Error al generar código de aprobación:', err);
    }
  });
}


}
