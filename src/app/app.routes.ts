import { Routes } from '@angular/router';
import { RegClientComponent } from './forms/reg-client/reg-client.component';
import { SocioeconomicFormComponent } from './forms/socioeconomic-form/socioeconomic-form.component';
import { InterviewFormComponent } from './forms/interview-form/interview-form.component';
import { DashboardComponent } from './forms/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: RegClientComponent },
    { path: 'socioeconomico', component: SocioeconomicFormComponent },
    { path: 'entrevista', component:  InterviewFormComponent},
    {path:'dashboard', component: DashboardComponent}
];