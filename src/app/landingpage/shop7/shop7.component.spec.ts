import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shop7Component } from './shop7.component';

describe('Shop7Component', () => {
  let component: Shop7Component;
  let fixture: ComponentFixture<Shop7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shop7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Shop7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
