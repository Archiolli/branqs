import { Component } from '@angular/core';
import { Tarefa } from "./tarefa";
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODOapp';
  arrayDeTarefas: Tarefa[] = [];
  constructor() {
    this.READ_tarefas();
  }
  CREATE_tarefa(descricaoNovaTarefa: string) {
    var novaTarefa = new Tarefa(descricaoNovaTarefa, false);
    this.arrayDeTarefas.unshift(novaTarefa);
  }
  READ_tarefas() {
    this.arrayDeTarefas = [
      new Tarefa("Estudar Frameworks WEB", false),
      new Tarefa("Comer Pizza", false),
      new Tarefa("Ajudar meus pais", false),
      new Tarefa("Samuel martins - 2016970", false),
      new Tarefa("Jão - 174180", false)
    ];
  }
  DELETE_tarefa(TarefaAserRemovida : Tarefa) {
    this.arrayDeTarefas.splice(this.arrayDeTarefas.indexOf(TarefaAserRemovida), 1);
  }
}

