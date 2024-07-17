import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidsallerComponent } from './midsaller.component';

describe('MidsallerComponent', () => {
  let component: MidsallerComponent;
  let fixture: ComponentFixture<MidsallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidsallerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MidsallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
