import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MescontactsComponent } from './mescontacts.component';

describe('MescontactsComponent', () => {
  let component: MescontactsComponent;
  let fixture: ComponentFixture<MescontactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MescontactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MescontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
