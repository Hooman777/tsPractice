import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VihanComponent } from './vihan.component';

describe('VihanComponent', () => {
  let component: VihanComponent;
  let fixture: ComponentFixture<VihanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VihanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VihanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
