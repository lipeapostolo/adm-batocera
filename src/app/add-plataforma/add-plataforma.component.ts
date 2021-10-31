import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { xml2json } from 'xml-js';
import { Plataforma } from '../models/Plataforma';
import { ArquivoXmlService } from '../services/arquivo-xml.service';
import { PlataformaService } from '../services/plataforma.service';

@Component({
  selector: 'app-add-plataforma',
  templateUrl: './add-plataforma.component.html',
  styleUrls: ['./add-plataforma.component.css']
})
export class AddPlataformaComponent implements OnInit {

  formulario: FormGroup;
  plataforma: Plataforma;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialogRef<AddPlataformaComponent>, 
     private arquivoXmlService: ArquivoXmlService) {
    this.formulario = this.formBuilder.group({
      sequencial: null,
      nome: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      anexos: null,
      listaGame: [[]],
      alterado: [false]
    });
   }

  ngOnInit(): void {
  }

  fechaModal(): void {
    this.dialog.close();
  }

  formValido(): boolean {
    return this.formulario.valid;
  }

  pegaFormVaule(): Plataforma {
    return this.formulario.value as Plataforma;
  }

}
