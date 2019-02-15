export class UserComplement {

  nom: string;
  prenom: string;
  id?: string ;

  constructor( ) {
    this.nom = '';
    this.prenom = '';
  }
  copy( Nom: string , Prenom: string, Id: string ) {
    return { nom: Nom, prenom: Prenom , id: Id };
  }
}
