import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinhaAreaPage } from './minha-area.page';

describe('MinhaAreaPage', () => {
  let component: MinhaAreaPage;
  let fixture: ComponentFixture<MinhaAreaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
