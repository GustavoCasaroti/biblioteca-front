import { Component, OnInit } from '@angular/core';
import { EditoraServicesService } from '../services/editora-services.service';
import { EditoraModels } from '../models/editora-models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editoras',
  templateUrl: './editoras.component.html',
  styleUrls: ['./editoras.component.css']
})
export class EditorasComponent implements OnInit {

  constructor(private apiEditora: EditoraServicesService) { }

  editora: EditoraModels[];
  cadastroEditora: EditoraModels = {id: null, editora: null};

  ngOnInit(): void {
    this.listaEditora();
  }

  listaEditora(){
    this.apiEditora.listaEditora().subscribe((x: EditoraModels[])=>{
    this.editora = x;
    });
  }

  criarAtualizareditora(form){
    if(this.cadastroEditora && this.cadastroEditora.id){
      form.value.id = this.cadastroEditora.id;
      this.apiEditora.atualizaEditora(form.value).subscribe((a: EditoraModels)=>{
        this.listaEditora();
        this.cadastroEditora.id = null;
        this.cadastroEditora.editora = null;
      });
    }else{
      this.apiEditora.criaEditora(form.value).subscribe((k: EditoraModels)=>{
        this.listaEditora();
        this.cadastroEditora.id = null;
        this.cadastroEditora.editora = null;
      });
    }
  }

  apagaEditora(id){
    this.apiEditora.apagaEditora(id).subscribe((z: any)=>{
      this.listaEditora();
        this.cadastroEditora.id = null;
        this.cadastroEditora.editora = null;
    });
  }
selecionaEditora(escolhido: EditoraModels){
  this.cadastroEditora = escolhido;
}


}
