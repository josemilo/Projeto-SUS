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
  IonSearchbar,
  IonButton,
  IonLabel,
  IonCard,
  IonCardContent,
  IonFooter
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-agendar-exames',
  templateUrl: './agendar-exames.page.html',
  styleUrls: ['./agendar-exames.page.scss'],
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
    IonSearchbar,
    IonButton,
    IonLabel,
    IonCard,
    IonCardContent,
    IonFooter
  ]
})
export class AgendarExamesPage {

  constructor() { }

  carregarArquivo() {
    // Lógica para abrir o seletor de arquivos
    console.log('Abrindo seletor de arquivos...');
  }

  agendar() {
    // Lógica para o botão "Agendar"
    console.log('Agendando exame...');
  }

}