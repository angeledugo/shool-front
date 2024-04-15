import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaDetailsComponent } from './nota-details.component';

describe('NotaDetailsComponent', () => {
  let component: NotaDetailsComponent;
  let fixture: ComponentFixture<NotaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
