import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnpageComponent } from './ownpage.component';

describe('OwnpageComponent', () => {
  let component: OwnpageComponent;
  let fixture: ComponentFixture<OwnpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
