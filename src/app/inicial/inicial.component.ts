import { Component, Input } from '@angular/core';
import { ConsultaGoogleService } from '../services/consulta.google.service';
import { Book } from '../shared/book';
@Component({
  selector: 'inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent {

  @Input() isbn: string;
  @Input() titulo: string;
  @Input() autor: string;

  consulta:string;
  dado:string;

  books: Book[];

  constructor(private _consultaGoogle: ConsultaGoogleService) {
  }

  public consultaIsbn() {
    this.books=null;
    this.consulta='ISBN';
    this.dado=this.isbn;
    this._consultaGoogle.consultarIsbn(this.isbn).subscribe(resposta => this.books = resposta);
    console.log(this.books);
  }
  public consultaTitulo() {
    this.books=null;
    this.consulta='Título';
    this.dado=this.titulo;
    this._consultaGoogle.consultarTitulo(this.titulo).subscribe(resposta => this.books = resposta);
    console.log(this.books);
  }
  public consultaAutor() {
    this.books=null;
    this.consulta='Autor';
    this.dado=this.autor;
    this._consultaGoogle.consultarAutor(this.autor).subscribe(resposta => this.books = resposta);
    console.log(this.books);
  }
  public checkProp(value):boolean{
    return value && value.length > 0;
 }
 public limpar(){
   this.books=null;
   this.autor=null;
   this.isbn=null;
 }
}
