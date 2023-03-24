import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/acceuil/auth/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLoginDialog() {
    this.dialog.open(LoginComponent, {
      width: '700px',
      height: '600px',
    });
  }

  setActive(event: any) {
    let links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    event.target.classList.add('active');
  }

}
