import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAdComponent } from './insert-ad.component';

describe('InsertAdComponent', () => {
  let component: InsertAdComponent;
  let fixture: ComponentFixture<InsertAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
