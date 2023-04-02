import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasEntradasComponent } from './ventas-entradas.component';

describe('VentasEntradasComponent', () => {
  let component: VentasEntradasComponent;
  let fixture: ComponentFixture<VentasEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasEntradasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
