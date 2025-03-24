import { Component } from '@angular/core';
import { Aluno } from '../../../../models/aluno';

@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.scss',
})
export class AlunoListComponent {

  lista: Aluno[] = [];

  constructor() {
    this.findAll();
  }


  findAll(){
    //DEPOIS EU VOU TER A COMUNICAÇÃO COM O SERVICE 

     let aluno1 = new Aluno();
      aluno1.id = 1;
      aluno1.nome = 'Maria';
      aluno1.cpf = 1111111111;
      aluno1.telefone = 1203495;



    this.lista.push(aluno1);
  
  }

  delete(aluno: Aluno){
    let indice = this.lista.findIndex(x => {return x.id == aluno.id});
    if(confirm('Deseja deletar?')){
      this.lista.splice(indice, 1); //deletando um objeto na posição INDICE
    }
  }


}