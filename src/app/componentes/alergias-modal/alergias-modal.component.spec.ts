import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlergiasModalComponent } from './alergias-modal.component';

describe('AlergiasModalComponent', () => {
  let component: AlergiasModalComponent;
  let fixture: ComponentFixture<AlergiasModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AlergiasModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlergiasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
