import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuthComponent } from './view-auth.component';

describe('ViewAuthComponent', () => {
  let component: ViewAuthComponent;
  let fixture: ComponentFixture<ViewAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
