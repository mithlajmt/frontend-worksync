import { Component, EventEmitter, Input,Output, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Emitter } from '@fullcalendar/core/internal';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit ,OnChanges  {
  @Input() tableData: any[] = [];
  @Input() keyID:any;
  @Output() clickData: EventEmitter<any> = new EventEmitter<any>();
  tableHead: string[] = []; // Specify type as string array
  

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.tableHead = Object.keys(this.tableData[0]);
    console.log(this.tableData);
}

onRowClick(keyID:any){
  this.clickData.emit(keyID)
}
}
