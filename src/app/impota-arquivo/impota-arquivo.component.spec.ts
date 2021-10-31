import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpotaArquivoComponent } from './impota-arquivo.component';

describe('ImpotaArquivoComponent', () => {
  let component: ImpotaArquivoComponent;
  let fixture: ComponentFixture<ImpotaArquivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpotaArquivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpotaArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
