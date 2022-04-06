export class Perfume {
  
    constructor() {
}
   // constructor(id?: number, nome?: string, email?: string) {
   //   this.id = id;
   //   this.nome = nome;
   //   this.email = email;
   // }
   
    id
    nome
    aroma
    categoria
    marca
    descricao
   
   toString() {
     return this.id+''+this.nome+''+this.aroma+''+this.categoria+''+this.marca+''+this.descricao;
   }
 }