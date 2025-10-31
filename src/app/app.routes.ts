import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastro',
    pathMatch: 'full',
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./paginas/auth/cadastro/cadastro.page').then( m => m.CadastroPage)
  },

  {
    path: 'home',
    loadComponent: () => import('./paginas/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'servicos',
    loadComponent: () => import('./paginas/servicos/servicos.page').then(m => m.ServicosPage)
  },
  {
    path: 'campanhas',
    loadComponent: () => import('./paginas/campanhas/campanhas.page').then(m => m.CampanhasPage)
  },
  {
    path: 'minha-area',
    loadComponent: () => import('./paginas/minha-area/minha-area.page').then(m => m.MinhaAreaPage)
  },

  {
    path: 'agendar-consulta',
    loadComponent: () => import('./paginas/servicos/agendar-consulta/agendar-consulta.page').then(m => m.AgendarConsultaPage)
  },
  {
    path: 'agendar-exames',
    loadComponent: () => import('./paginas/servicos/agendar-exames/agendar-exames.page').then(m => m.AgendarExamesPage)
  },
  {
    path: 'resultados-exames',
    loadComponent: () => import('./paginas/servicos/resultados-exames/resultados-exames.page').then(m => m.ResultadosExamesPage)
  },
  {
    path: 'atendimentos-internacoes',
    loadComponent: () => import('./paginas/servicos/atendimentos-internacoes/atendimentos-internacoes.page').then(m => m.AtendimentosInternacoesPage)
  },
  {
    path: 'alergias',
    loadComponent: () => import('./paginas/minha-area/alergias/alergias.page').then(m => m.AlergiasPage)
  },
];
