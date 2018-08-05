import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaOpenLibraryService {

  constructor(private _http: HttpClient) { }

  public consultarIsbn(query:string):Observable<any[]>{
    return this._http.get<any[]>(environment.openlibraryURL+query);
  }
  
}
