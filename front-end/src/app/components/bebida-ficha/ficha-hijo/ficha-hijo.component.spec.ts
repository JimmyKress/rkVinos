import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaHijoComponent } from './ficha-hijo.component';

describe('FichaHijoComponent', () => {
  let component: FichaHijoComponent;
  let fixture: ComponentFixture<FichaHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaHijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichaHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
