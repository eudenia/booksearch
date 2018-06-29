import { Injectable } from '@angular/core';
import { Book } from '../shared/book';
@Injectable({
  providedIn: 'root'
})
export class MarcusService {

  listaLivro:Book[]=[];

  constructor() { }

  public adicionarLivro(livro:Book):void{
    this.listaLivro.push(livro);
  }

  public recuperaLivrosSalvos():Book[]{
    return this.listaLivro;
  }
}
