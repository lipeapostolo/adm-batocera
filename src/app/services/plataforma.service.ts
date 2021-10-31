import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from '../models/game';
import { Plataforma } from '../Models/Plataforma';

@Injectable()
export class PlataformaService {

  public plataformas$: Observable<Plataforma[]>;

  private plataformaSelecionadaSubject = new BehaviorSubject<Plataforma>(null);
  public plataformaSelecionada$: Observable<Plataforma> = this.plataformaSelecionadaSubject.asObservable();

  private tabela: AngularFireList<Plataforma>;

  constructor(private db: AngularFireDatabase) {
    this.tabela = this.db.list<Plataforma>("Plataforma");
    this.plataformas$ =  this.tabela.valueChanges();
   }

  public salva(plataforma: Plataforma) {

    if(!plataforma.alterado) return;

    if(!plataforma.id) {

      this.tabela.push(plataforma)
      .then((result: any) => { 
        console.log("Salvo");
        plataforma.id = result.key;
        this.salva(plataforma);
      } )
      .catch(error => console.error(error));
      return;
    }

    this.tabela.update(plataforma.id, plataforma).then(r => console.log("atualizou"));
  }

  public buscaLista(){
    console.log(this.tabela);
    this.tabela;
  }

  public atualizaPlataformaSelecionada(plataforma: Plataforma){
    this.plataformaSelecionadaSubject.next(plataforma);
  }

  public atualizaListaGame(plataforma: Plataforma, novosGames: Game[]) {

    let gamesAIncluir: Game[] = [];
    
    novosGames.forEach(game => {
      let gameExiste = plataforma.listaGame.findIndex(g => this.ehIgual(g, game));
    
      if(gameExiste > -1) return;
    
      gamesAIncluir.push(game);
    });

    plataforma.listaGame.forEach(game => {
      let gameNaoExiste = novosGames.findIndex(g => this.ehIgual(g, game));

      if(gameNaoExiste > -1) return;

      plataforma.listaGame = plataforma.listaGame.filter(g => !this.ehIgual(g, game));
      plataforma.alterado = true;
    })
    
    let ultimoIndexGame = plataforma.listaGame.length;
    
    gamesAIncluir.forEach(game => {
      game.id = ultimoIndexGame;
    
      plataforma.listaGame.push(game);
      
      ultimoIndexGame = ++ultimoIndexGame;
      plataforma.alterado = true;
    });
  }

  private ehIgual(game: Game, outroGame: Game): boolean {
    return game.name == outroGame.name
        && game.developer == outroGame.developer
        && game.publisher == outroGame.publisher
        && game.genre == outroGame.genre
        && game.players == outroGame.players
        && game.lang == outroGame.lang
        && game.path == outroGame.path
        && game.nameFile == outroGame.nameFile;
  }
}