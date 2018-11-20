import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from './../interfaces/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  path = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.path}/todos`);
  }

  update(todo: Todo) {
    return this.http.put(`${this.path}/todos/${todo.id}`, todo);
  }

  delete(todoId: string) {
    return this.http.delete(`${this.path}/todos/${todoId}`);
  }

  create(todo: Todo): Observable<Todo> {
    const headers = new HttpHeaders()
    .set('Autoridjfhkdjsf', 'Basic:ddjhslakjdfhkasdhfashf');
    return this.http.post<Todo>(`${this.path}/todos`, todo, {
      headers: headers
    });
  }
}
