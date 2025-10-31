import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonImg
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-atendimentos-internacoes',
  templateUrl: './atendimentos-internacoes.page.html',
  styleUrls: ['./atendimentos-internacoes.page.scss'],
  standalone: true,
  
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonContent,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonImg
  ]
})
export class AtendimentosInternacoesPage {

  constructor() { }

}