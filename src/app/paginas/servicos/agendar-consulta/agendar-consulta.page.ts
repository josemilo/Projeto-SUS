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
  IonList,
  IonItem,
  IonAlert
} from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';

interface Consulta {
  especialidade: string;
  profissional: string;
  data: string;
  horario: string;
}

@Component({
  selector: 'app-agendar-consulta',
  templateUrl: './agendar-consulta.page.html',
  styleUrls: ['./agendar-consulta.page.scss'],
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
    IonList,
    IonItem,
    IonAlert
  ]
})
export class AgendarConsultaPage {

  especialidade: string = '';
  profissional: string = '';
  resultados: Consulta[] = [];

  constructor(private alertController: AlertController) {}

  buscar() {
    // Consultas fictícias com datas futuras
    const consultasDisponiveis: Consulta[] = [
      { especialidade: 'Cardiologia', profissional: 'Dr. João Silva', data: '12/11/2025', horario: '10:00' },
      { especialidade: 'Dermatologia', profissional: 'Dra. Maria Souza', data: '13/11/2025', horario: '11:30' },
      { especialidade: 'Pediatria', profissional: 'Dr. Carlos Lima', data: '14/11/2025', horario: '14:00' },
      { especialidade: 'Cardiologia', profissional: 'Dra. Ana Torres', data: '15/11/2025', horario: '15:30' },
      { especialidade: 'Oftalmologia', profissional: 'Dr. Pedro Henrique', data: '16/11/2025', horario: '09:00' },
      { especialidade: 'Ginecologia', profissional: 'Dra. Beatriz Alves', data: '17/11/2025', horario: '13:30' },
      { especialidade: 'Ortopedia', profissional: 'Dr. Marcos Rocha', data: '18/11/2025', horario: '16:00' },
    ];

    this.resultados = consultasDisponiveis.filter(c =>
      c.especialidade.toLowerCase().includes(this.especialidade.toLowerCase()) &&
      c.profissional.toLowerCase().includes(this.profissional.toLowerCase())
    );

    if (this.resultados.length === 0) {
      this.exibirAlerta('Nenhuma consulta encontrada com os filtros aplicados.');
    } else {
      console.log('Consultas encontradas:', this.resultados);
    }
  }

  async exibirAlerta(mensagem: string) {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: mensagem,
      buttons: ['OK']
    });
    await alert.present();
  }

  async agendar(consulta: Consulta) {
    const alert = await this.alertController.create({
      header: 'Confirmar Agendamento',
      message: `
        Deseja agendar com <b>${consulta.profissional}</b><br>
        Especialidade: ${consulta.especialidade}<br>
        Data: ${consulta.data} às ${consulta.horario}?
      `,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Confirmar',
          handler: () => {
            this.exibirAlerta('Consulta agendada com sucesso!');
          }
        }
      ]
    });
    await alert.present();
  }
}
