import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubeListComponent } from './clube-list.component';

describe('ClubeListComponent', () => {
  let component: ClubeListComponent;
  let fixture: ComponentFixture<ClubeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
