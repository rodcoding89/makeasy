import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNeedComponent } from './insert-need.component';

describe('InsertNeedComponent', () => {
  let component: InsertNeedComponent;
  let fixture: ComponentFixture<InsertNeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertNeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
