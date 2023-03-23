import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setActive(event: any) {
    let links = document.getElementsByTagName('li');
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    event.target.classList.add('active');
  }

}
