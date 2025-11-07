import { Component } from '@angular/core';
import {
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
  standalone: true,
  imports: [CommonModule, IonToolbar, IonButtons, IonButton, IonIcon],
})
export class CabecalhoComponent {
  constructor(private router: Router) {}

  fazerLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
