import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertResearchServiceOrAdComponent } from './insert-research-service-or-ad.component';

describe('InsertResearchServiceOrAdComponent', () => {
  let component: InsertResearchServiceOrAdComponent;
  let fixture: ComponentFixture<InsertResearchServiceOrAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertResearchServiceOrAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertResearchServiceOrAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
