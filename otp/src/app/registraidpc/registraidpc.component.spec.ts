import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraidpcComponent } from './registraidpc.component';

describe('RegistraidpcComponent', () => {
  let component: RegistraidpcComponent;
  let fixture: ComponentFixture<RegistraidpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraidpcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraidpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
