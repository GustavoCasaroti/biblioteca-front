import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AutorModels } from '../models/autor-models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BibliotecaComponent } from '../biblioteca/biblioteca.component';


@Injectable({
  providedIn: 'root'
})
export class AutorServicesService {

  constructor(private httpClient:HttpClient) { }

  API_SERVER = environment.apiURL;


  listaAutor(): Observable<AutorModels[]>{
    return this.httpClient.get<AutorModels[]>(`${this.API_SERVER}/autorCadastro`);
  }

  criaAutor(a: AutorModels): Observable<AutorModels>{
    return this.httpClient.post<AutorModels>(`${this.API_SERVER}/autorCadastro`,a);
  }

  atualizaAutor(a: AutorModels){
    return this.httpClient.put<AutorModels>(`${this.API_SERVER}/autorCadastro/${a.id}`,a);
  }

  apagarAutor(id: number){
    return this.httpClient.delete<AutorModels>(`${this.API_SERVER}/autorCadastro/${id}`);
  }


}
