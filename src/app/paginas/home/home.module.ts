// Salve como: src/app/paginas/home/home.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { BarraDeAbasComponent } from '../../componentes/barra-de-abas/barra-de-abas.component';
import { AppointmentCardComponent } from 'src/app/componentes/appointment-card/appointment-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    HomePageRoutingModule,
    CabecalhoComponent,
    BarraDeAbasComponent,
    AppointmentCardComponent,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
