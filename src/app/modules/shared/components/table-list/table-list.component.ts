import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit ,OnChanges  {
  @Input() tableData: any[] = [];
  tableHead: string[] = []; // Specify type as string array

  ngOnInit(): void {

  }

ngOnChanges(changes: SimpleChanges): void {

      this.tableHead = Object.keys(this.tableData[0]);
      console.log(this.tableData);
  
}

onRowClick(){
  alert('item clicked setup redirecting')
}
}
