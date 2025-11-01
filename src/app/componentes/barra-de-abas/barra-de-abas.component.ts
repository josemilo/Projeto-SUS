import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonIcon, IonLabel, IonToolbar, IonTabButton, IonButtons } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-barra-de-abas',
  templateUrl: './barra-de-abas.component.html',
  styleUrls: ['./barra-de-abas.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonToolbar, 
    //IonButton, 
    IonIcon, 
    IonLabel, 
    IonTabButton,
    IonButtons
  ]
})
export class BarraDeAbasComponent {

  constructor(private router: Router) { }

  navegar(path: string) {
    this.router.navigate([path]);
  }

}
