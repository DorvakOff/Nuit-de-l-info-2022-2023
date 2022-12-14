import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesComponent } from './des.component';

describe('DesComponent', () => {
  let component: DesComponent;
  let fixture: ComponentFixture<DesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
