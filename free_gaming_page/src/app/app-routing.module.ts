import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcceuilComponent } from './acceuil/acceuil.component';
import { LayoutComponent } from './layout/layout.component';
import { SupportComponent } from './support/support.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'accueil', component: AcceuilComponent },
      { path: 'support', component: SupportComponent },
      { path: 'ticket', component: TicketsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
