import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { BarraDeAbasComponent } from '../../componentes/barra-de-abas/barra-de-abas.component';

import {
  IonHeader,
  IonContent,
  IonFooter,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonLabel,
  IonItem,
  IonText, 
  IonToolbar 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-minha-area',
  templateUrl: './minha-area.page.html',
  styleUrls: ['./minha-area.page.scss'],
  standalone: true,
  
  imports: [
    //IonToolbar, 
    CommonModule,
    FormsModule,
    IonHeader,
    IonContent,
    IonFooter,
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonLabel,
    IonItem,
    //IonText,
    CabecalhoComponent,
    BarraDeAbasComponent
  ]
})
export class MinhaAreaPage {

  // Dados de exemplo do usuário
  userInfo = {
    nome: 'João Mariano Silveira Nascimento',
    cns: '987654321012345',
    cpf: '123.456.789-00',
    dataNascimento: '20/06/1970',
    telefone: '(81)98867-5432',
    racaCor: 'Preto',
    sexo: 'Masculino',
    email: 'joao.silveira70@gmail.com'
  };

  actionItems = [
    { id: 'cartao-vacina', name: 'Cartão de vacina', icon: 'document-attach-outline', route: '/cartao-vacina' },
    { id: 'carteirinha-doador', name: 'Carteirinha de doador', icon: 'card-outline', route: '/carteirinha-doador' },
    { id: 'medicamentos', name: 'Meus medicamentos', icon: 'medkit-outline', route: '/meus-medicamentos' },
    { id: 'alergias', name: 'Minhas Alergias', icon: 'bug-outline', route: '/alergias' },
    { id: 'diario', name: 'Diário da saúde', icon: 'book-outline', route: '/diario-saude' }
  ];

  constructor(private router: Router) { }

  onActionClick(route: string) {
    if (route) {
      console.log('Navegando para:', route);
      this.router.navigate([route]);
    } else {
      console.warn('Nenhuma rota definida para este item.');
    }
  }

}