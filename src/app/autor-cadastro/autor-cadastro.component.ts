import { Component, OnInit } from '@angular/core';
import { AutorServicesService } from '../services/autor-services.service';
import { AutorModels } from '../models/autor-models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-autor-cadastro',
  templateUrl: './autor-cadastro.component.html',
  styleUrls: ['./autor-cadastro.component.css']
})
export class AutorCadastroComponent implements OnInit {

  constructor(private apiAutor: AutorServicesService) { }

  autor: AutorModels[];
  cadastroAutor: AutorModels = {id: null, nome: null, ano_nascimento: null, sexo: null, nacionalidade: null};

  ngOnInit(): void {
    this.listaAutor();
  }

  listaAutor(){
    this.apiAutor.listaAutor().subscribe((x: AutorModels[])=>{
      this.autor = x;
    });
  }

  criarAtualizarautor(form){
    if(this.cadastroAutor && this.cadastroAutor.id){
      form.value.id = this.cadastroAutor.id;
      this.apiAutor.atualizaAutor(form.value).subscribe((a: AutorModels)=>{
        this.listaAutor();
        this.cadastroAutor.id=null;
        this.cadastroAutor.nome=null;
        this.cadastroAutor.ano_nascimento=null;
        this.cadastroAutor.sexo=null;
        this.cadastroAutor.nacionalidade=null;
      });
    }else{
      this.apiAutor.criaAutor(form.value).subscribe((k: AutorModels)=>{
        this.listaAutor();
        this.cadastroAutor.id=null;
        this.cadastroAutor.nome=null;
        this.cadastroAutor.ano_nascimento=null;
        this.cadastroAutor.sexo=null;
        this.cadastroAutor.nacionalidade=null;
      });
    }
  }

  apagaAutor(id){
    this.apiAutor.apagarAutor(id).subscribe((z:any)=>{
      this.listaAutor();
        this.cadastroAutor.id=null;
        this.cadastroAutor.nome=null;
        this.cadastroAutor.ano_nascimento=null;
        this.cadastroAutor.sexo=null;
        this.cadastroAutor.nacionalidade=null;
    });
  }
  selecionaAutor(escolhido: AutorModels){
    this.cadastroAutor = escolhido;
  }

}
