import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LivroModels } from '../models/livro-models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BibliotecaComponent } from '../biblioteca/biblioteca.component';




@Injectable({
  providedIn: 'root'
})
export class LivroServicesService {

  constructor(private httpClient:HttpClient) { }

  API_SERVER = environment.apiURL;



listaLivros(): Observable<LivroModels[]>{
  return this.httpClient.get<LivroModels[]>(`${this.API_SERVER}/livros`);
}

criaLivro(l: LivroModels): Observable<LivroModels>{
  return this.httpClient.post<LivroModels>(`${this.API_SERVER}/livros`, l);
}

atualizaLivro(l: LivroModels){
  return this.httpClient.put<LivroModels>(`${this.API_SERVER}/livros/${l.id}`,l);
}


apagarLivro(id:number){
  return this.httpClient.delete<LivroModels>(`${this.API_SERVER}/livros/${id}`);
}


}
