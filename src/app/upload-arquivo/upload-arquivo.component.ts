import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plataforma } from '../models/Plataforma';
import { ArquivoXmlService } from '../services/arquivo-xml.service';
import { PlataformaService } from '../services/plataforma.service';

@Component({
  selector: 'app-upload-arquivo',
  templateUrl: './upload-arquivo.component.html',
  styleUrls: ['./upload-arquivo.component.css']
})
export class UploadArquivoComponent implements OnInit {

  constructor(private arquivoXmlService: ArquivoXmlService) { }

  @Input() desabilitado:boolean;
  @Input() plataforma: Plataforma;

  @Output() fechaModalEmitter = new EventEmitter();

  ngOnInit(): void {
  }

  selecionaArquivos(): void {
    const inptArquivoUpload = document.getElementById('fileUpload') as HTMLInputElement;

    inptArquivoUpload.onchange = () => {
      let arquivo = inptArquivoUpload.files[0];

      this.arquivoXmlService.importaArquivo(arquivo, this.plataforma);
      this.fechaModalEmitter.emit();
    };
    inptArquivoUpload.value = '';
    inptArquivoUpload.click();
  }

}
