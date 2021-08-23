import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{BibliotecaModels} from '../models/biblioteca-models'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class BibliotecaServicesService {

  constructor(private httpClient: HttpClient) { }

  API_SERVER   = environment.apiURL;


  listaGenero(): Observable<BibliotecaModels[]>{
    return this.httpClient.get<BibliotecaModels[]>(`${this.API_SERVER}/biblioteca`);
  }

  criaGenero(g: BibliotecaModels): Observable<BibliotecaModels>{
    return this.httpClient.post<BibliotecaModels>(`${this.API_SERVER}/biblioteca`,g);
  }


  atualizaGenero(g:BibliotecaModels){
    return this.httpClient.put<BibliotecaModels>(`${this.API_SERVER}/biblioteca/${g.id}`, g);
  }

  apagaGenero(id: number){
    return this.httpClient.delete<BibliotecaModels>(`${this.API_SERVER}/biblioteca/${id}`);
  }

  
}
