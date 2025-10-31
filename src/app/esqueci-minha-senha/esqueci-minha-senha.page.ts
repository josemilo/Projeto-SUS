import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-esqueci-minha-senha',
  templateUrl: './esqueci-minha-senha.page.html',
  styleUrls: ['./esqueci-minha-senha.page.scss'],
  standalone: false,
})
export class EsqueciMinhaSenhaPage implements OnInit {
  email: string = '';
  mensagemSucesso: string | null = null;

  constructor(private toastCtrl: ToastController) {}

  ngOnInit() {}

  redefinirSenha() {
    if (!this.email || !this.email.includes('@')) {
      this.exibirToast('Por favor, insira um e-mail válido.');
      return;
    }

    // Aqui seria a chamada real ao backend (exemplo):
    // this.authService.redefinirSenha(this.email).subscribe(...)
    // Por enquanto, vamos simular o envio com um delay
    setTimeout(() => {
      this.mensagemSucesso =
        'Redefinição enviada com sucesso! Você receberá um e-mail em breve com as instruções para redefinir sua senha.';
    }, 1000);
  }

  fecharMensagem() {
    this.mensagemSucesso = null;
  }

  async exibirToast(mensagem: string) {
    const toast = await this.toastCtrl.create({
      message: mensagem,
      duration: 2000,
      color: 'danger',
    });
    await toast.present();
  }
}

