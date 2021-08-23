import { Component, OnInit } from '@angular/core';
import { LivroServicesService } from '../services/livro-services.service';
import { LivroModels } from '../models/livro-models';
import { EditoraModels } from '../models/editora-models';
import { AutorModels } from '../models/autor-models';
import { BibliotecaModels } from '../models/biblioteca-models';
import { NgForm } from '@angular/forms';
import { AutorServicesService } from '../services/autor-services.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  constructor(private apiLivros: LivroServicesService, private apiAutor: AutorServicesService) { }

  genero: BibliotecaModels[];
  autor: AutorModels[];
  editora: EditoraModels[];
  livros: LivroModels[];
  cadastroLivros: LivroModels={id: null, autor: null, genero:null, editora: null, titulo: null, lancamento: null};


  ngOnInit(): void {
    this.listaLivros();
    this.listaAutor();

  }

  listaLivros(){
    this.apiLivros.listaLivros().subscribe((x: LivroModels[])=>{
      this.livros=x;
    });
  }
  listaAutor(){
    this.apiAutor.listaAutor().subscribe((x: AutorModels[])=>{
      this.autor = x;
    });
  }


  criarAtualizarlivros(form){
    if(this.cadastroLivros && this.cadastroLivros.id){
      form.value.id = this.cadastroLivros.id;
      this.apiLivros.atualizaLivro(form.value).subscribe((a: LivroModels)=>{
        this.listaLivros();
        this.cadastroLivros.id=null;
        this.cadastroLivros.autor=null;
        this.cadastroLivros.genero=null;
        this.cadastroLivros.editora=null;
        this.cadastroLivros.titulo=null;
        this.cadastroLivros.lancamento=null;
      });
    }else{
      this.apiLivros.criaLivro(form.value).subscribe((k: LivroModels)=>{
        this.listaLivros();
        this.cadastroLivros.id=null;
        this.cadastroLivros.autor=null;
        this.cadastroLivros.genero=null;
        this.cadastroLivros.editora=null;
        this.cadastroLivros.titulo=null;
        this.cadastroLivros.lancamento=null;
      });
    }
  }

  apagaLivros(id){
    this.apiLivros.apagarLivro(id).subscribe((z:any)=>{
      this.listaLivros();
        this.cadastroLivros.id=null;
        this.cadastroLivros.autor=null;
        this.cadastroLivros.genero=null;
        this.cadastroLivros.editora=null;
        this.cadastroLivros.titulo=null;
        this.cadastroLivros.lancamento=null;
    });
  }
  selecionaLivros(escolhido: LivroModels){
    this.cadastroLivros=escolhido;
  }



}
