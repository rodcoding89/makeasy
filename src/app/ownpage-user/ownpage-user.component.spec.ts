import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnpageUserComponent } from './ownpage-user.component';

describe('OwnpageUserComponent', () => {
  let component: OwnpageUserComponent;
  let fixture: ComponentFixture<OwnpageUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnpageUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnpageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
