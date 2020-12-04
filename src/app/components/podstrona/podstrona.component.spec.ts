import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodstronaComponent } from './podstrona.component';

describe('PodstronaComponent', () => {
  let component: PodstronaComponent;
  let fixture: ComponentFixture<PodstronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodstronaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodstronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
