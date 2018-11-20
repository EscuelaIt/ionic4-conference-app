import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Todo } from './../interfaces/todo.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos-firebase',
  templateUrl: './todos-firebase.page.html',
  styleUrls: ['./todos-firebase.page.scss'],
})
export class TodosFirebasePage implements OnInit {

  $todos: Observable<Todo[]>;
  todosCollection: AngularFirestoreCollection<Todo>;

  constructor(
    private db: AngularFirestore,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.todosCollection = this.db.collection<Todo>('todos');
    this.$todos = this.todosCollection.valueChanges();
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
    this.todosCollection.add(newTodo);
  }

}
