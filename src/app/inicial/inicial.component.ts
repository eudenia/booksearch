import { Component, Input, OnInit } from '@angular/core';
import { ConsultaGoogleService } from '../services/consulta.google.service';
import { MarcusService } from '../services/marcus.service';
import { ExcelService } from '../services/excel.service';
import { Book } from '../shared/book';
@Component({
  selector: 'inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent  implements OnInit {

  @Input() isbn: string;
  @Input() titulo: string;
  @Input() autor: string;
  @Input() arquivo: string;

  mostraNomeArquivo:boolean;
  consulta: string;
  dado: string;
  books: any[];

  constructor(private _consultaGoogle: ConsultaGoogleService,
              private _servicoGravacao: MarcusService,
              private _excelService: ExcelService) {
      
  }

  ngOnInit() {
    this.mostraNomeArquivo=false;
  }

  public consultaIsbn() {
    this.books = null;
    this.consulta = 'ISBN';
    this.dado = this.isbn;
    this._consultaGoogle.consultarIsbn(this.isbn).subscribe(resposta => this.books = resposta);
    console.log(this.books);
  }
  public consultaTitulo() {
    this.books = null;
    this.consulta = 'Título';
    this.dado = this.titulo;
    this._consultaGoogle.consultarTitulo(this.titulo).subscribe(resposta => this.books = resposta);
    console.log(this.books);
  }
  public consultaAutor() {
    this.books = null;
    this.consulta = 'Autor';
    this.dado = this.autor;
    this._consultaGoogle.consultarAutor(this.autor).subscribe(resposta => this.books = resposta);
    console.log(this.books);
  }
  public checkProp(value): boolean {
    return value && value.length > 0;
  }
  public limpar() {
    this.books = null;
    this.autor = null;
    this.isbn = null;
    this.titulo = null;
    this.arquivo = null;
    this.mostraNomeArquivo=false;
  }

  public adicionarLivro(book: Book) {
    this._servicoGravacao.adicionarLivro(book);
    console.log(this._servicoGravacao.recuperaLivrosSalvos());
  }

  public mostrarNomeArquivo():void{
    this.mostraNomeArquivo=true;
  }

  exportAsXLSX(): void {
    this._excelService.exportAsExcelFile(this._servicoGravacao.recuperaLivrosParaExportar(), this.arquivo);
  }
}
