import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGameComponent } from './lista-game.component';

describe('ListaGameComponent', () => {
  let component: ListaGameComponent;
  let fixture: ComponentFixture<ListaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
