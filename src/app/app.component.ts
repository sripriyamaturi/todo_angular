import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nam = 'To-do list App';

  newTodo: string;
  todos: any;
  todoObj: any;
  completed: boolean;
  isDelete: boolean;

  constructor() {
    this.newTodo = '';
    this.todos = [];
    this.isDelete = false;
  }

  addTodo() {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false,
    };

    this.todos.push(this.todoObj);
    this.newTodo = '';
  }

  delete(index: any) {
    const Task = this.todos[index];
    this.todoObj.isDelete = true;

    setTimeout(() => {
      if (this.todoObj.isDelete) {
        const ind = this.todos.indexOf(Task);
        this.todos.splice(ind, 1);
        this.todoObj.isDelete = false;
      }
    }, 2000);
  }
}
