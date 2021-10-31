import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPlataformaComponent } from './add-plataforma/add-plataforma.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listaGames';

  constructor(private dialog: MatDialog) {
  }

  adicionaPlataforma() {
    //aqui deve abrir uma modal para importação do arquivo
    const dialogRef = this.dialog.open(AddPlataformaComponent, {
      width: '30em',
      height: '17em',
    });
  }
}
