import { Component, OnInit } from '@angular/core';
import { ListaGameComponent } from '../lista-game/lista-game.component';
import { PlataformaService } from '../services/plataforma.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ImpotaArquivoComponent } from '../impota-arquivo/impota-arquivo.component';
import { Plataforma } from '../models/Plataforma';

@Component({
  selector: 'app-lista-plataforma',
  templateUrl: './lista-plataforma.component.html',
  styleUrls: ['./lista-plataforma.component.css']
})
export class ListaPlataformaComponent implements OnInit {

  constructor(public plataformaService: PlataformaService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  abreListaJogos(plataforma: Plataforma): void {
    //abre modal com a lista do bistro
    const dialogRef = this.dialog.open(ListaGameComponent, {
      width: '130em',
      height: '50em',
      data: { p: plataforma }
    });

  }

  importaListaJogos(plataforma: Plataforma) {
    this.plataformaService.atualizaPlataformaSelecionada(plataforma);

    //aqui deve abrir uma modal para importação do arquivo
    const dialogRef = this.dialog.open(ImpotaArquivoComponent, {
      width: '30em',
      height: '30em',
      data: { p: plataforma }
    });
  }

}
