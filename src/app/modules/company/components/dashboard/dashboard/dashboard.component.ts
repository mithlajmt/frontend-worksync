import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';
import {Chart} from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';
import { EmployeesService } from '../../../services/employees.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chart:any;
  public chartTwo:any;
  departmentName:any[]=[]
  employees:any[]=[]
  ngOnInit(): void {
    this.createChart()


    this.serv.getDepartments().subscribe({
      next:(res:any)=>{
        console.log(res)
      res.data.map((res:any)=> {
        this.departmentName.push(res.departmentName)
        this.employees.push(res.totalEmployees)
      })
      this.createDepChart()
      },

      error:(err)=>{
        console.log('mi')
      }
    })
  }
  constructor(
    private api:JwtService,
    private http:HttpClient,
    private serv:ApiService
  ){}


  minu(){
    console.log('ji');
    }

    createChart(){
  
      this.chart = new Chart("MyChart", {
        type: 'bar', //this denotes tha type of chart
  
        data: {// values on X-Axis
          labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
                   '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
           datasets: [
            {
              label: "attendance",
              data: ['467','576', '572', '79', '92',
                   '574', '573', '576'],
              backgroundColor: 'navy'
            },
            {
              label: "late",
              data: ['542', '542', '536', '327', '17',
                     '100', '538', '541'],
              backgroundColor: 'yellow'
            }  ,
            {
              label: "leave",
              data: ['54', '54', '53', '32', '17',
                     '0.00', '70', '80'],
              backgroundColor: 'red'
            }  
          ]
        },
        options: {
          aspectRatio:2.5
        }
      });
    }

    createDepChart(){
      this.chartTwo = new Chart("MyChartTwo", {
        type: 'pie', //this denotes tha type of chart
  
        data: {// values on X-Axis
          labels: this.departmentName,
           datasets: [{
            label: 'Number of employees',
            data: this.employees,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
              'rgb(255, 99, 132)',
              'rgb(255, 205, 86)',
            ],
          }]
        },
        options: {
          aspectRatio:2.5
        }
      });
    }

}
