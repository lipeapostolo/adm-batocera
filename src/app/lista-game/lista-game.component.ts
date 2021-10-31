import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Game } from '../models/game';
import { MatTableDataSource } from '@angular/material/table';
import { Plataforma } from '../models/Plataforma';
import { PlataformaService } from '../services/plataforma.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-lista-game',
  templateUrl: './lista-game.component.html',
  styleUrls: ['./lista-game.component.css']
})
export class ListaGameComponent implements OnInit {

  private _plataforma: Plataforma;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {p: Plataforma}, private dialog: MatDialogRef<ListaGameComponent>) {
    this._plataforma = data.p;
   }

  displayedColumns: string[] = ['name', 'players', 'genre', 'path', 'nameFile'];
  dataSource: MatTableDataSource<Game> = new MatTableDataSource();;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this._plataforma.listaGame);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  fechaModal(): void {
    this.dialog.close();
  }
}
