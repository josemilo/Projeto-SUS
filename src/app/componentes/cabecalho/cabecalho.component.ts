import { Component, OnInit } from '@angular/core';
import { IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon
  ]
})
export class CabecalhoComponent {

  constructor() { }

  abrirMenuConfig() {
    console.log('Botão de Configurações clicado!');
  }

}
