import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cartao2Component } from './cartao2.component';

describe('Cartao2Component', () => {
  let component: Cartao2Component;
  let fixture: ComponentFixture<Cartao2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cartao2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cartao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
