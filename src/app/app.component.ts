import { Component } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './public/master-page/navbar/navbar.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            ButtonModule, 
            NavbarComponent, 
            CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front_law_office';
  viewNavbar: boolean = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationEnd) {
        const routesWithoutNavbar = ['/login', '/registro'];
        this.viewNavbar = !routesWithoutNavbar.includes(event.url);
      }
    })
  }
}
