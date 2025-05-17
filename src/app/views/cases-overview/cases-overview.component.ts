import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { CasesService } from '../../services/cases.service';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-cases-overview',
  imports: [ButtonModule, InputTextModule, CommonModule],
  standalone: true,
  templateUrl: './cases-overview.component.html',
  styleUrl: './cases-overview.component.scss'
})
export class CasesOverviewComponent {

  cases: any[] = [];
  areaId: number = 4; // Cambia esto según el área que necesites
  
  constructor(private router: Router, private casesService: CasesService, private clientService: ClientService) { }
  
  /*
  getAsistentArea(areaId: number): string {
    const areas: Record<number, string> = {
      1: 'Civil',
      2: 'Penal', 
      3: 'Laboral',
      4: 'Derecho familiar'
    };
    return areas[areaId] || 'Área no especificada';
  }
  */

  ngOnInit(): void {
    this.getCasesForArea(this.areaId);
  }

  gotoIntervew(){
    this.router.navigate(['/datos-cliente']);
  }

  getCasesForArea(areaId: number) {
    this.casesService.getCasesForArea(areaId).subscribe({
      next:(response) => {
        for (let i = 0; i < response.length; i++) {
          let caseId = response[i].id;
          this.casesService.getCaseById(caseId).subscribe({
            next: (caseResponse) => {
              let clientId = caseResponse.interview.clientId.id;
              this.clientService.getClientById(clientId).subscribe({
                next: (clientResponse) => {
                  caseResponse.interview.clientId = clientResponse;
                },
                error: (error) => {
                  console.error('Error fetching client:', error);
                }
              });
              this.cases[i] = caseResponse;
              console.log('Case fetched successfully:', caseResponse);
            },
            error: (error) => {
              console.error('Error fetching case:', error);
            }
          });
        }
        this.cases = response;
        console.log('Cases fetched successfully:', this.cases);
      },
      error: (error) => {
        console.error('Error fetching cases:', error);
      }
    })
  }


goToDashboard(caseId: number, areaId: number): void {
  this.router.navigate(['/dashboard', caseId], {
    queryParams: { area: areaId }
  
  });
  console.log('sirve para ir al dashboard', caseId, areaId);
}


}
