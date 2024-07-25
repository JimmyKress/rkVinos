import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoListComponent } from './hijo-list.component';

describe('HijoListComponent', () => {
  let component: HijoListComponent;
  let fixture: ComponentFixture<HijoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HijoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
