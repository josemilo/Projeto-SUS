import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Interface que define os dados que o card espera
export interface Appointment {
  _id: string;
  dateTime: string;
  type: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled' | string;
  doctor: {
    name: string;
    specialty: string;
  };
  healthUnit: {
    name: string;
    address: string;
  };
}

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class AppointmentCardComponent {
  // O componente recebe o objeto de agendamento inteiro
  @Input() appointment: Appointment | null = null;

  constructor() {}

  /** Converte a string de data (UTC) para o formato local dd/mm/aaaa */
  get formattedDate(): string {
    if (!this.appointment) return '';
    try {
      const date = new Date(this.appointment.dateTime);
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    } catch (e) {
      return 'Data inválida';
    }
  }

  /** Converte a string de data (UTC) para a hora local HHhMM */
  get formattedTime(): string {
    if (!this.appointment) return '';
    try {
      const date = new Date(this.appointment.dateTime);
      // 'toLocaleTimeString' converte do UTC para o fuso local do usuário
      const time = date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      });
      return time.replace(':', 'h'); // ex: "05h00"
    } catch (e) {
      return '--h--';
    }
  }

  /** Retorna uma cor baseada no status do agendamento */
  get statusColor(): string {
    switch (this.appointment?.status) {
      case 'Pending':
        return 'warning'; // Amarelo
      case 'Confirmed':
        return 'success'; // Verde
      case 'Cancelled':
        return 'danger'; // Vermelho
      default:
        return 'medium'; // Cinza
    }
  }
}
