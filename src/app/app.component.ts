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

  /**
   * Constructor del componente principal de la aplicación.
   * Se suscribe a los eventos de navegación del router para:
   * - Hacer scroll al inicio de la página en cada navegación.
   * - Mostrar u ocultar la barra de navegación dependiendo de la ruta actual.
   * @param router - Servicio de enrutamiento de Angular.
   */
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
