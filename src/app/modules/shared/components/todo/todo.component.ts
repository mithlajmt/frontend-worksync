import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: any[] = [
    { title: 'Task 1', description: 'Description 1', status: 'Pending', _id: '1' },
    { title: 'Task 2', description: 'Description 2', status: 'Completed', _id: '2' },
    // Add more tasks as needed
  ];

  newTask: any = {};

  addTask() {
    this.tasks.push({ ...this.newTask, _id: `${Date.now()}` });
    this.newTask = {};
  }

  editTask(task: any) {
    // Implement editing functionality here
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task._id !== id);
  }
}
