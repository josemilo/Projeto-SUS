import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { API_BASE_URL } from 'src/app/shared/api.url';
import { Appointment } from 'src/app/componentes/appointment-card/appointment-card.component';
import { HttpClient } from '@angular/common/http';

interface AgendamentoApi {
  _id: string;
  dateTime: string;
  type: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled' | string;
  user: string;
  doctor: {
    _id: string;
    name: string;
    specialty: string;
  };
  healthUnit: {
    _id: string;
    name: string;
    address: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  private readonly API_URL = API_BASE_URL;
  public agendamentos: Appointment[] = [];
  public isLoading: boolean = false;

  private allServices = [
    {
      id: 'teleconsulta',
      name: 'Agendar Teleconsulta',
      icon: 'phone-portrait-outline',
      disabled: true,
    },
    { id: 'consulta', name: 'Agendar Consulta', icon: 'calendar-outline' },
    { id: 'exame', name: 'Agendar Exame', icon: 'pulse-outline' },
    {
      id: 'resultados',
      name: 'Resultados de Exames',
      icon: 'document-text-outline',
    },
    {
      id: 'agendamentos',
      name: 'Agendamentos e Internações',
      icon: 'calendar-number-outline',
    },
    { id: 'vacinacao', name: 'Vacinação', icon: 'eyedrop-outline' },
    {
      id: 'atendimentos',
      name: 'Atendimentos e Internações',
      icon: 'business-outline',
    },
    { id: 'rede', name: 'Rede de Saúde', icon: 'location-outline' },
  ];

  servicosReduzidos = this.allServices.slice(0, 3);

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.carregarAgendamentos();
  }

  carregarAgendamentos() {
    this.isLoading = true;
    const url = this.API_URL + '/appointments';

    this.http
      .get<AgendamentoApi[]>(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .subscribe({
        next: (dadosDaApi) => {
          const agendamentosFormatados = dadosDaApi.map(
            (apiItem): Appointment => {
              return {
                _id: apiItem._id,
                dateTime: apiItem.dateTime,
                type: apiItem.type,
                status: apiItem.status,
                doctor: apiItem.doctor,
                healthUnit: apiItem.healthUnit,
              };
            }
          );

          this.agendamentos = agendamentosFormatados.sort((a, b) => {
            return (
              new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
            );
          });

          this.isLoading = false;
        },
        error: (err) => {
          console.error('Erro ao buscar agendamentos', err);
          this.isLoading = false;
        },
      });
  }

  handleRefresh(event: any) {
    this.carregarAgendamentos();

    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }

  onServiceClick(serviceId: string) {
    console.log('Clicou no serviço (Home):', serviceId);
    let navigationPromise: Promise<boolean> | null = null;
    if (serviceId === 'consulta') {
      navigationPromise = this.router.navigate(['/agendar-consulta']);
    } else if (serviceId === 'exame') {
      navigationPromise = this.router.navigate(['/agendar-exames']);
    } else {
      console.warn('Nenhuma rota definida para o serviceId:', serviceId);
      return;
    }
    if (navigationPromise) {
      navigationPromise.catch((error) => {
        console.error('ERRO AO TENTAR NAVEGAR para ' + serviceId + ':', error);
      });
    }
  }

  verTodosServicos() {
    this.router.navigate(['/servicos']);
  }
}
