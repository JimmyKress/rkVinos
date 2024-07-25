import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpComponent } from './wp.component';

describe('WpComponent', () => {
  let component: WpComponent;
  let fixture: ComponentFixture<WpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
