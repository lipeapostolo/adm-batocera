import { Injectable } from '@angular/core';
import { xml2json } from 'xml-js';
import { Game } from '../Models/game';
import { Plataforma } from '../models/Plataforma';
import { PlataformaService } from './plataforma.service';

@Injectable({
  providedIn: 'root'
})
export class ArquivoXmlService {

  constructor(private plataformaService: PlataformaService) { }

  private transformaJsonEmObjeto(json: any): Game[] {

    let listaGame: Game[] = [];
    
    json.forEach(element => {
      listaGame.push(new Game(element))
    });
    return listaGame;
  }

  importaArquivo(arquivo: File, plataforma: Plataforma) {
    const reader = new FileReader();
    
    reader.onload = (e: any) => {
      console.log(e.target.result);
      let xml = e.target.result;
      let result = xml2json(xml, { compact: true, nativeType: true, ignoreDoctype: true, spaces: 4 });

      const JSONData = JSON.parse(result);
      let listaGame = this.transformaJsonEmObjeto(JSONData["gameList"].game);

      this.plataformaService.atualizaListaGame(plataforma, listaGame);
    };
    reader.readAsText(arquivo);

    reader.onloadend = () => {
      this.plataformaService.salva(plataforma);
    }    
  }

  
}
