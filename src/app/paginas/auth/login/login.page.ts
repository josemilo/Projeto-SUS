import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { API_BASE_URL } from 'src/app/shared/api.url';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }

  fazerLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    const { usuario, senha } = this.loginForm.value;

    const url = API_BASE_URL + '/auth/login';

    const body = { email: usuario, password: senha };

    this.http.post<any>(url, body).subscribe({
      next: (response) => {
        console.log('Login bem-sucedido', response);

        localStorage.setItem('token', response.access_token);

        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Erro no login', err);
        this.presentarToast(
          'Email ou senha inválidos. Tente novamente.',
          'danger'
        );
      },
    });
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
