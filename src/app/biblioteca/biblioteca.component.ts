import { Component, OnInit } from '@angular/core';
import { BibliotecaServicesService } from '../services/biblioteca-services.service';
import { BibliotecaModels } from '../models/biblioteca-models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  constructor(private apiBiblioteca: BibliotecaServicesService) { }

  biblioteca: BibliotecaModels[];
  cadastroGenero: BibliotecaModels = {id: null, genero: null};

  ngOnInit(): void {
    this.listaGenero();
  }

  listaGenero(){
      this.apiBiblioteca.listaGenero().subscribe((x: BibliotecaModels[])=>{
      this.biblioteca = x;

    });
  }

  criarAtualizargenero(form){
    if(this.cadastroGenero && this.cadastroGenero.id){
      form.value.id = this.cadastroGenero.id;
      this.apiBiblioteca.atualizaGenero(form.value).subscribe((a: BibliotecaModels)=>{
        this.listaGenero();
        this.cadastroGenero.id = null;
        this.cadastroGenero.genero = null;
      });

    }else{
    this.apiBiblioteca.criaGenero(form.value).subscribe((k: BibliotecaModels) =>{
      this.listaGenero();
      this.cadastroGenero.id = null;
      this.cadastroGenero.genero = null;

    });
  }
  }

    apagaGenero(id){
      this.apiBiblioteca.apagaGenero(id).subscribe((z: any) => {
        this.listaGenero();
        this.cadastroGenero.id = null;
        this.cadastroGenero.genero = null;
      });
    }
    selecionaGenero(escolhido: BibliotecaModels){

      this.cadastroGenero = escolhido;
    }

}
