import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cases-overview',
  imports: [ButtonModule, InputTextModule, CommonModule],
  standalone: true,
  templateUrl: './cases-overview.component.html',
  styleUrl: './cases-overview.component.scss'
})
export class CasesOverviewComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {}

  gotoIntervew(){
    this.router.navigate(['/datos-cliente']);
  }
}
