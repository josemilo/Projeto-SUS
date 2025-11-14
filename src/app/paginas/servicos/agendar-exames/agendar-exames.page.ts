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
  IonFooter,
  IonIcon,
  ToastController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cloudUploadOutline } from 'ionicons/icons';

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
    IonFooter,
    IonIcon
  ]
})
export class AgendarExamesPage {

  tipoExame: string = '';
  unidade: string = '';
  
  arquivoGuia: File | null = null; 
  nomeArquivoGuia: string = 'Carregar arquivo';

  constructor(private toastController: ToastController) {
    addIcons({ cloudUploadOutline });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.arquivoGuia = file;
      this.nomeArquivoGuia = file.name; 
      console.log('Arquivo selecionado:', this.arquivoGuia);
    }
  }

  agendar() {
    if (!this.tipoExame || this.tipoExame.trim() === '') {
      this.presentarToast('Por favor, informe o tipo de exame.', 'danger');
      return;
    }

    if (!this.arquivoGuia) {
      this.presentarToast('Por favor, anexe a foto da guia.', 'danger');
      return;
    }

    if (!this.unidade || this.unidade.trim() === '') {
      this.presentarToast('Por favor, escolha uma unidade.', 'danger');
      return;
    }

    console.log('Agendando exame...');
    console.log('Exame:', this.tipoExame);
    console.log('Unidade:', this.unidade);
    console.log('Arquivo:', this.arquivoGuia.name);
    
    this.presentarToast('Exame agendado com sucesso!', 'success');
    
  }

  async presentarToast(
    mensagem: string,
    color: 'success' | 'danger' | 'warning'
  ) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 3000,
      position: 'bottom',
      color: color,
    });
    toast.present();
  }
}