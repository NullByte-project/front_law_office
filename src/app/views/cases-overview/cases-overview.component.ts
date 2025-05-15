import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { CasesService } from '../../services/cases.service';
@Component({
  selector: 'app-cases-overview',
  imports: [ButtonModule, InputTextModule, CommonModule],
  standalone: true,
  templateUrl: './cases-overview.component.html',
  styleUrl: './cases-overview.component.scss'
})
export class CasesOverviewComponent {

  cases: any[] = [];

  constructor(private router: Router, private casesService: CasesService) { }

  ngOnInit(): void {
    this.getCasesForArea(4)
  }

  gotoIntervew(){
    this.router.navigate(['/datos-cliente']);
  }

  getCasesForArea(areaId: number) {
    this.casesService.getCasesForArea(areaId).subscribe({
      next:(response) => {
        this.cases = response;
        console.log('Cases fetched successfully:', this.cases);
      },
      error: (error) => {
        console.error('Error fetching cases:', error);
      }
    })
  }


}
