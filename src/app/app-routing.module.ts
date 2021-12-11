import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConnexionComponent } from './connexion/connexion.component';
import { AuthGuard } from './guards/auth.guard';

import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  { path: 'connexion-component', component: ConnexionComponent },
  {
    path: 'stats-component',
    component: StatsComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/connexion-component' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
