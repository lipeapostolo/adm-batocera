export class Game {
    id: number;
    name: string;
    desc: string;
    developer: string;
    publisher: string;
    genre: string;
    players: string;
    lang: string;
    path: string;
    nameFile: string;

    constructor(json: any) {
        this.name = this.retornaValor(json, "name");
        this.path = this.retornaValor(json, "path");
        this.desc = this.retornaValor(json, "desc");
        this.developer = this.retornaValor(json, "developer");
        this.publisher = this.retornaValor(json, "publisher");
        this.genre = this.retornaValor(json, "genre");
        this.players =  this.verificaJogadores(json); 
        this.lang = this.retornaValor(json, "lang");
        this.nameFile = this.retoraNomeArquivo(json);
    }

    private retornaValor(elemento: any, campo: string): string {

        return elemento[campo] ? elemento[campo]._text : null;
    }

    private verificaJogadores(element: any): string {

        let valor = this.retornaValor(element, "players");
        return valor ? valor : "1";
    }

    private retoraNomeArquivo(element: any): string {
        return this.retornaValor(element, "path").split('.')[1].substr(1);
    }

    

    public ehParecido(outroGame: Game): boolean {
        return this.name == outroGame.name
            && this.developer == outroGame.developer
            && this.publisher == outroGame.publisher
    }
}

