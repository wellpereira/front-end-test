import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialAppComponent } from './tutorial-app.component';

describe('TutorialAppComponent', () => {
  let component: TutorialAppComponent;
  let fixture: ComponentFixture<TutorialAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
