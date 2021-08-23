import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EditoraModels } from '../models/editora-models';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class EditoraServicesService {

  constructor(private httpClient:HttpClient) { }

  API_SERVER = environment.apiURL;


  listaEditora(): Observable<EditoraModels[]>{
    return this.httpClient.get<EditoraModels[]>(`${this.API_SERVER}/editoras`);
  }

  criaEditora(e: EditoraModels): Observable<EditoraModels>{
    return this.httpClient.post<EditoraModels>(`${this.API_SERVER}/editoras`,e);
  }

  atualizaEditora(e: EditoraModels){
    return this.httpClient.put<EditoraModels>(`${this.API_SERVER}/editoras/${e.id}`,e);
  }

  apagaEditora(id: number){
    return this.httpClient.delete<EditoraModels>(`${this.API_SERVER}/editoras/${id}`);
  }

}
