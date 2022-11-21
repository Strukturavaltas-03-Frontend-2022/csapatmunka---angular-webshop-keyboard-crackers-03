import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugEditorComponent } from './drug-editor.component';

describe('DrugEditorComponent', () => {
  let component: DrugEditorComponent;
  let fixture: ComponentFixture<DrugEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
