import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './acceuil/auth/login/login.component';
import { RegisterComponent } from './acceuil/auth/register/register.component';
import { SupportComponent } from './support/support.component';
import { TicketsComponent } from './tickets/tickets.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LoginComponent,
    RegisterComponent,
    SupportComponent,
    TicketsComponent,
    NavbarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatDialogModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
