import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesonnaliseComponent } from './pesonnalise.component';

describe('PesonnaliseComponent', () => {
  let component: PesonnaliseComponent;
  let fixture: ComponentFixture<PesonnaliseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesonnaliseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesonnaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
