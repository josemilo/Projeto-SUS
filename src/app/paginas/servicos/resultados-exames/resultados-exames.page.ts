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
  IonButton,
  IonLabel,
  IonCard,
  IonCardContent,
  IonIcon,
  IonAvatar, 
  IonFooter
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-resultados-exames',
  templateUrl: './resultados-exames.page.html',
  styleUrls: ['./resultados-exames.page.scss'],
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
    IonButton,
    IonLabel,
    IonCard,
    IonCardContent,
    IonIcon,
    IonAvatar,
    //IonFooter
  ]
})
export class ResultadosExamesPage {

  doctors = [
    {
      nome: 'Dr. Roberto Marcos',
      especialidade: 'Clínico',
      crm: '1234 - PE',
      local: 'USF Largo da Paz - 1516 Afogados',
      datas: ['01/10', '02/10', '03/10']
    }
  ];

  constructor() { }

  agendar(doctor: any) {
    // Lógica para o botão "Agendar"
    console.log('Agendando com:', doctor.nome);
    // Aqui você navegaria para a próxima tela (ex: /confirmar-agendamento)
  }

}