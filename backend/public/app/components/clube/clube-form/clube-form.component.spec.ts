import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubeFormComponent } from './clube-form.component';

describe('ClubeFormComponent', () => {
  let component: ClubeFormComponent;
  let fixture: ComponentFixture<ClubeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
