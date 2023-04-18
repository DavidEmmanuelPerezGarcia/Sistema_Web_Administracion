import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMapeosComponent } from './lista-mapeos.component';

describe('ListaMapeosComponent', () => {
  let component: ListaMapeosComponent;
  let fixture: ComponentFixture<ListaMapeosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMapeosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMapeosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
