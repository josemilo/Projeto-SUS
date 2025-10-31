import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadosExamesPage } from './resultados-exames.page';

describe('ResultadosExamesPage', () => {
  let component: ResultadosExamesPage;
  let fixture: ComponentFixture<ResultadosExamesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosExamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
