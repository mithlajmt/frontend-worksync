import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks: any[] = [];

  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.getTasklist(); // Call getTasklist method when component initializes
  }

  getTasklist() {
    this.common.getTasks().subscribe({
      next: (res: any) => {
        console.log(res);
        this.tasks = res.data[0].tasks;
        console.log(this.tasks);
      },
      error: (err) => {
        console.error('Error fetching tasks:', err);
        // Handle error gracefully, e.g., show an alert message
        alert('Failed to fetch tasks. Please try again.');
      }
    });
  }

  newTask: any = {};

  addTask() {
    const task = this.newTask;
    this.common.addTask(task).subscribe({
      next: (res) => {
        // Handle successful addition if needed
        console.log('Task added successfully:', res);
        // Clear newTask object or reset form fields
        this.newTask = {};
        // Fetch updated task list
        this.getTasklist();
      },
      error: (err) => {
        console.error('Error adding task:', err);
        // Handle error gracefully, e.g., show an alert message
        alert('Failed to add task. Please try again.');
      }
    });
  }

 
    deleteTask(id: string) {


      // Call the common service method to delete the task
      this.common.deleteTask(id).subscribe({
        next: (res: any) => {
          console.log(res);
          // Remove the deleted task from the tasks array
          this.tasks = this.tasks.filter(task => task._id !== id);
        },
        error: (err: any) => {
          console.error(err);
          // Handle error gracefully, e.g., show an alert message
          alert('Failed to delete task. Please try again.');
        }
      });
    }


  updateTaskStatus(event: any, taskId: string) {
    const status = event.target.checked ? 'done' : 'pending';
    this.common.updateTaskStatus(taskId, status).subscribe({
      next: (res: any) => {
        console.log(res);
        // Find the index of the updated task in the tasks array
        const updatedTaskIndex = this.tasks.findIndex(task => task._id === taskId);
        // Update the status of the task in the tasks array
        if (updatedTaskIndex !== -1) {
          this.tasks[updatedTaskIndex].status = status;
        }
      },
      error: (err: any) => {
        console.error(err);
        // Handle error gracefully, e.g., show an alert message
        alert('Failed to update task status. Please try again.');
      }
    });
  }
  




}
