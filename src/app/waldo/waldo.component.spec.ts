import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaldoComponent } from './waldo.component';

describe('WaldoComponent', () => {
  let component: WaldoComponent;
  let fixture: ComponentFixture<WaldoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaldoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
