import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonLabel,
  IonInput,
  IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonIcon, 
    CommonModule,
    FormsModule,
    IonContent,
    //IonHeader,
    //IonTitle,
    //IonToolbar,
    //IonButtons,
    //IonBackButton,
    IonLabel,
    IonInput,
    IonButton,
  ],
})
export class CadastroPage {
  constructor() {
    
  }
}