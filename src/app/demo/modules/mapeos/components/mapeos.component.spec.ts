import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapeosComponent } from './mapeos.component';

describe('MapeosComponent', () => {
  let component: MapeosComponent;
  let fixture: ComponentFixture<MapeosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapeosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapeosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
