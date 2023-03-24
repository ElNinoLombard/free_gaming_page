import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
})
export class AcceuilComponent implements OnInit {
  @ViewChild('setup') setupElement!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }


  scrollToSetup(): void {
    this.setupElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
