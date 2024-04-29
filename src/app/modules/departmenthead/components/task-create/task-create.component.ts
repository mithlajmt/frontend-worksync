import { Component } from '@angular/core';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  task:any = {
    title: '',
    description: '',
    deadline: '',
    priority: '',
    assignedEmployee: ''
  };

  createTask() {
    // Implement task creation logic here
    console.log(this.task);
  }
}
