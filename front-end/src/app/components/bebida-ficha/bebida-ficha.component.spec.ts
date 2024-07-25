import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaFichaComponent } from './bebida-ficha.component';

describe('BebidaFichaComponent', () => {
  let component: BebidaFichaComponent;
  let fixture: ComponentFixture<BebidaFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BebidaFichaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BebidaFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
