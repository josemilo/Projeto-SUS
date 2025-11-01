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
  IonIcon,
  IonImg,
  ModalController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-alergias',
  templateUrl: './alergias.page.html',
  styleUrls: ['./alergias.page.scss'],
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
    IonIcon,
    IonImg
  ]
})
export class AlergiasPage {

  // 3. Injete o ModalController
  constructor(private modalCtrl: ModalController) { }

  async abrirModalAlergias() {
    console.log('Abrindo modal de alergias...');
    
  }

}