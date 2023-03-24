import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  ticket: boolean = false;
  tickets: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    this.tickets.push('Problème de mot de passe')
    this.tickets.push('Erreur de payement')
    this.tickets.push('Demande de remboursement')
  }

  setActive(event: any) {
    let links = document.getElementsByTagName('li');
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    event.target.classList.add('active');
  }


  setTicket() {
    this.ticket = !this.ticket
  }
}
