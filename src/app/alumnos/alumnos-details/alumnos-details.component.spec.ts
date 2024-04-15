import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosDetailsComponent } from './alumnos-details.component';

describe('AlumnosDetailsComponent', () => {
  let component: AlumnosDetailsComponent;
  let fixture: ComponentFixture<AlumnosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumnosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
