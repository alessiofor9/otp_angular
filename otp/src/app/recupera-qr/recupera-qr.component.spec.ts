import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperaQrComponent } from './recupera-qr.component';

describe('RecuperaQrComponent', () => {
  let component: RecuperaQrComponent;
  let fixture: ComponentFixture<RecuperaQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperaQrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperaQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
