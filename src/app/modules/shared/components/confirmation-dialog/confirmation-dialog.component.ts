import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  @Input() isVisible:boolean=false;
  @Input() Image:string='';
  @Input() confirmationMessage: string = 'Confirm Action';
  @Input() bodyText: string = 'Are you sure you want to confirm this action';
  @Output() cancel =  new EventEmitter<void>();
  @Output() confirm =  new EventEmitter<void>();

  onCancelClick(){
    this.cancel.emit()
  }

  onConfirmClick(){
    this.confirm.emit()
  }
}
