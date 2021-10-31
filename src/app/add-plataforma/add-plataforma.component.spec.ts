import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlataformaComponent } from './add-plataforma.component';

describe('AddPlataformaComponent', () => {
  let component: AddPlataformaComponent;
  let fixture: ComponentFixture<AddPlataformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlataformaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
