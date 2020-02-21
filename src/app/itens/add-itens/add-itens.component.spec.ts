import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItensComponent } from './add-itens.component';

describe('AddItensComponent', () => {
  let component: AddItensComponent;
  let fixture: ComponentFixture<AddItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
