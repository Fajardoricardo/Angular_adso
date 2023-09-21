import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFormsComponent } from './componente-forms.component';

describe('ComponenteFormsComponent', () => {
  let component: ComponenteFormsComponent;
  let fixture: ComponentFixture<ComponenteFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
