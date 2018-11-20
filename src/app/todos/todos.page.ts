import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { TodosService } from './../services/todos.service';
import { Todo } from './../interfaces/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {

  todos: Todo[] = [];

  constructor(
    private todosService: TodosService,
    private alertCtrl: AlertController,
    private storage: Storage
  ) { }

  async ngOnInit() {
    this.todosService.getAll()
    .subscribe(todos => {
      this.todos = todos;
    });


    await this.storage.set('token', 1233);
    const token = await this.storage.get('token');
    console.log(token);
  }

  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva tarea',
      inputs: [
        {
          name: 'title',
          placeholder: 'digite su tarea'
        }
      ],
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel'
        },
        {
          text: 'crear',
          handler: (data) => {
            this.addTodo(data.title);
          }
        }
      ]
    });
    await alert.present();
  }

  private addTodo(title: string) {
    const newTodo: Todo = {
      title,
      completed: false,
    };
    this.todosService.create(newTodo)
    .subscribe(todo => {
      console.log(todo);
      this.todos.push(todo);
    });
  }

}
