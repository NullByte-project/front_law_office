import { Routes } from '@angular/router';
import { RegClientComponent } from './forms/reg-client/reg-client.component';
import { SocioeconomicFormComponent } from './forms/socioeconomic-form/socioeconomic-form.component';
import { CasesOverviewComponent } from './views/cases-overview/cases-overview.component';
import { InterviewFormComponent } from './forms/interview-form/interview-form.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UserSignUpComponent } from './forms/user-sign-up/user-sign-up.component';
import { LoginComponent } from './forms/login/login.component';

export const routes: Routes = [
    { path: '', component: CasesOverviewComponent },
    { path: 'datos-cliente', component: RegClientComponent },
    { path: 'socioeconomico', component: SocioeconomicFormComponent },
    { path: 'entrevista', component:  InterviewFormComponent},
    { path: 'dashboard/:id',  component: DashboardComponent },
    { path: 'registro',  component: UserSignUpComponent }, 
    { path: 'login', component: LoginComponent}
];
