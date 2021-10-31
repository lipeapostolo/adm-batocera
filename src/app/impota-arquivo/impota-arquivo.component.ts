import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { xml2json } from 'xml-js';
import { Plataforma } from '../models/Plataforma';
import { ArquivoXmlService } from '../services/arquivo-xml.service';
import { PlataformaService } from '../services/plataforma.service';

@Component({
  selector: 'app-impota-arquivo',
  templateUrl: './impota-arquivo.component.html',
  styleUrls: ['./impota-arquivo.component.css']
})
export class ImpotaArquivoComponent implements OnInit {

  plataforma: Plataforma;

  constructor(private arquivoXmlService: ArquivoXmlService, private plataformaService: PlataformaService, 
    private dialog: MatDialogRef<ImpotaArquivoComponent>) { }

  ngOnInit(): void {
    this.plataformaService.plataformaSelecionada$.subscribe(p => {
      this.plataforma = p;
    })
  }

  selecionaArquivos(): void {
    const inptArquivoUpload = document.getElementById('fileUpload') as HTMLInputElement;

    inptArquivoUpload.onchange = () => {
      let arquivo = inptArquivoUpload.files[0];

      this.arquivoXmlService.importaArquivo(arquivo, this.plataforma);
      
      this.dialog.close();
    };
    inptArquivoUpload.value = '';
    inptArquivoUpload.click();
  }

  fechaModal(): void {
    this.dialog.close();
  }
}
