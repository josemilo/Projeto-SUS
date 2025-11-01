import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtendimentosInternacoesPage } from './atendimentos-internacoes.page';

describe('AtendimentosInternacoesPage', () => {
  let component: AtendimentosInternacoesPage;
  let fixture: ComponentFixture<AtendimentosInternacoesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtendimentosInternacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
