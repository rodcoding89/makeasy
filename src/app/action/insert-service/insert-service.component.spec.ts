import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertServiceComponent } from './insert-service.component';

describe('InsertServiceComponent', () => {
  let component: InsertServiceComponent;
  let fixture: ComponentFixture<InsertServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
