import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'To-do list App';

  newTodo: string;
  todos: any;
  todoObj: any;
  completed: boolean;

  constructor() {
    this.newTodo = '';
    this.todos = [];
  }

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false,
    };
    this.todos.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  }

  delete(index) {
    this.todos.splice(index, 1);
  }
}
