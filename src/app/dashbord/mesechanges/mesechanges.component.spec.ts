import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesechangesComponent } from './mesechanges.component';

describe('MesechangesComponent', () => {
  let component: MesechangesComponent;
  let fixture: ComponentFixture<MesechangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesechangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesechangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
