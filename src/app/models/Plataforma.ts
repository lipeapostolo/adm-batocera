import { Game } from "./game";

export class Plataforma {
  key: any
  id: string;
  nome: string;
  listaGame: Game[] = [];
  alterado: boolean = false; 
}


// export class PlataformaConverter {
//   toFirestore(plataforma: Plataforma) {
//     return {
//       nome: plataforma.nome,
//       id: plataforma.id,
//       listaGame: plataforma.listaGame
//     };
// },
//   fromFirestore: function(snapshot, options){
//     const data = snapshot.data(options);
//     return new City(data.name, data.state, data.country);
// }
// }