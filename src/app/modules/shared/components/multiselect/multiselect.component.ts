import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CommonService } from '../../../shared/services/common.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent implements OnInit {
  @Input() apiUrl:string=''
  @Output() selectedOption: EventEmitter<string[]> = new EventEmitter<string[]>();
   @Input() singleSelection:Boolean=false;
   @Input() placeholder:string = 'select department'
   dropdownList:any = [];
  selectedItems:any[] = [];
  dropdownSettings = {};
  showDrop:boolean=false
  p:any[]=[]

//  ngDoCheck(): void {
  //  console.log(this.selectedItems);
  // this.selectedOption.emit(this.selectedItems.map(items=>items.item_text))

//  }

  constructor(
    private commonService:CommonService,
  ){

  }
  ngOnInit() {
    this.commonService.getListData(this.apiUrl).pipe(
      map((res: any) => res.data || []) // Use the map operator to extract the 'data' array
    ).subscribe({
      next: (dataArray: any[]) => {
        // console.log(dataArray);
    
        // Now 'dataArray' contains each item from the 'data' array
        dataArray.forEach((element: any,i) => {
          // console.log(element,i);
          this.dropdownList.push({item_id:i,item_text:element.name});
        });
        this.showDrop = true;
        // console.log(this.dropdownList);
        
      },
      error: (err) => {
        console.error(err);
      }
    });
    
    this.dropdownSettings = {
      singleSelection: this.singleSelection,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };
  }
  

  onDropDownClose(){
    this.selectedOption.emit(this.selectedItems.map(items=>items.item_text));
  }

  onItemSelect(item: any) {
    
    // this.selectedItems.push(item)
    // console.log(this.selectedItems,'k');
    // this.selectedOption.emit(this.selectedItems.map(items=>items.item_text));
  }

  onSelectAll(items: any) {
    // console.log(items);
    // this.selectedOption.emit(this.selectedItems.map(items=>items.item_text));
  }

  onItemDeSelect(){
    // this.selectedOption.emit(this.selectedItems.map(items=>items.item_text));
  }

  
}
