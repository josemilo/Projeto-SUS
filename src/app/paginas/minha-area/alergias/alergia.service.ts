import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlergiaService {

  constructor() { }

  // Método privado para buscar a ID do usuário logado
  private getChaveUsuario(): string {
    // Supondo que você salve o ID do usuário com a chave 'userId_logado' ao fazer login
    const usuarioLogadoId = localStorage.getItem('userId_logado');

    // Se houver um ID, usa, senão usa 'visitante' como fallback
    const idFinal = usuarioLogadoId ? usuarioLogadoId : 'visitante';

    return `alergias_${idFinal}`;
  }

  // Salva a lista de alergias no LocalStorage
  salvarAlergias(alergias: any[]) {
    const chave = this.getChaveUsuario();
    localStorage.setItem(chave, JSON.stringify(alergias));
    console.log(`Dados salvos na gaveta (${chave}):`, alergias);
  }

  // Carrega a lista de alergias do LocalStorage
  carregarAlergias(): any[] {
    const chave = this.getChaveUsuario();
    const dados = localStorage.getItem(chave);

    if (dados) {
      return JSON.parse(dados);
    } else {
      return []; // Retorna vazio se não houver dados
    }
  }

  // Limpa os dados ao fazer logout
  limparDadosLocais() {
      const chave = this.getChaveUsuario();
      localStorage.removeItem(chave);
  }
}