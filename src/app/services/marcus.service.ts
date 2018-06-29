import { Injectable } from '@angular/core';
import { Book } from '../shared/book';
import { RegistroExcel } from '../shared/registro.excel';
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

  public recuperaLivrosParaExportar():RegistroExcel[]{
    let resposta:RegistroExcel[]=[];
    this.listaLivro.forEach(volume=>{
      let reg = new RegistroExcel();
      if(volume.volumeInfo.imageLinks){
        reg["Link capa"]=volume.volumeInfo.imageLinks.smallThumbnail;
      }
      reg.Título=volume.volumeInfo.title;
      reg.Autor=volume.volumeInfo.authors.toString();
      reg.Resumo=volume.volumeInfo.description;
      reg.Editora=volume.volumeInfo.publisher;
      reg["Data de publicação"]=volume.volumeInfo.publishedDate;
      reg["Número de páginas"]=volume.volumeInfo.pageCount+"";
      resposta.push(reg);
    });
    return resposta;
  }
  
}
