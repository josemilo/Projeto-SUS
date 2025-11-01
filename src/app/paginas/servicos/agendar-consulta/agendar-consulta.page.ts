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
  IonCardContent, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-agendar-consulta',
  templateUrl: './agendar-consulta.page.html',
  styleUrls: ['./agendar-consulta.page.scss'],
  standalone: true,
  
  imports: [IonFooter, 
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
    IonCardContent
  ]
})
export class AgendarConsultaPage {

  constructor() { }

  buscar() {
    
    console.log('Buscando...');
  }

}