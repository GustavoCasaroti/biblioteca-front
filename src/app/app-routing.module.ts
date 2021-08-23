import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { AutorCadastroComponent } from './autor-cadastro/autor-cadastro.component';
import { EditorasComponent } from './editoras/editoras.component';
import { LivrosComponent } from './livros/livros.component';

const routes: Routes = [
  {path: 'biblioteca', component: BibliotecaComponent},
  {path: 'autorCadastro', component: AutorCadastroComponent},
  {path: 'editoras', component: EditorasComponent},
  {path: 'livros', component: LivrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
