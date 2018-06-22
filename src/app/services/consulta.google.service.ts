import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';
import {environment} from '../../environments/environment';
@Injectable()
export class ConsultaGoogleService {



  constructor(private _http: HttpClient) {
  }

  public consultarIsbn(query:string):Observable<Book[]>{
    return this.consultarCampo(query, 'isbn');
  }

  public consultarTitulo(query:string):Observable<Book[]>{
    return this.consultarCampo(query, 'intitle');
  }

  public consultarAutor(query:string):Observable<Book[]>{
    return this.consultarCampo(query, 'inauthor');
  }
  private consultarCampo(query:string, campo:string):Observable<Book[]>{
    console.log(query);
    let re=/\s/gi;
    let queryToSend=query.replace(re, "+");
    console.log(queryToSend);
    return this._http.get<Book[]>(environment.googleURL+'&q='+campo+':'+queryToSend);
  }
}