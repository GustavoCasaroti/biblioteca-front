import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { AutorCadastroComponent } from './autor-cadastro/autor-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorasComponent } from './editoras/editoras.component';
import { LivrosComponent } from './livros/livros.component';

@NgModule({
  declarations: [
    AppComponent,
    BibliotecaComponent,
    AutorCadastroComponent,
    EditorasComponent,
    LivrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
