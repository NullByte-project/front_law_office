import { Routes } from '@angular/router';
import { RegClientComponent } from './modules/forms/reg-client/reg-client.component';
import { SocioeconomicFormComponent } from './modules/forms/socioeconomic-form/socioeconomic-form.component';

export const routes: Routes = [
    { path: '', component: RegClientComponent },
    { path: 'socioeconomico', component: SocioeconomicFormComponent },
];