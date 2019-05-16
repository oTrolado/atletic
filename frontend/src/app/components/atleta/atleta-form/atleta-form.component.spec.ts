import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletaFormComponent } from './atleta-form.component';

describe('AtletaFormComponent', () => {
  let component: AtletaFormComponent;
  let fixture: ComponentFixture<AtletaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtletaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtletaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
