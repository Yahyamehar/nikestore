import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shop6Component } from './shop6.component';

describe('Shop6Component', () => {
  let component: Shop6Component;
  let fixture: ComponentFixture<Shop6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shop6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Shop6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
