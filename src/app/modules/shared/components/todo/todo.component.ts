import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(
    private common:CommonService
  ){

  }

 

  tasks: any[] = [];

  newTask: any = {};

  addTask() {
    const task = this.newTask
    this.common.addTask(task).subscribe({
      next:(res)=>{

      },
      error:(err)=>{
        console.log(err);
        
      }
    })

    }
  

  deleteTask(id: string) {
   
  }

  updateTaskStatus(task: any) {
    // Implement logic to update task status if needed
  }

}
