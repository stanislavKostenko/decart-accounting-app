import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {Icons} from '@enums/icons';

@Component({
  selector: 'app-create-project-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public icons = Icons;
  public object: any;
  public dialogType: string;
  public pageType: string;

  @Output() dialogDataOutput: EventEmitter<any> = new EventEmitter();
  constructor(private dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.object = this.data.object;
    this.dialogType = this.data.dialogType;
    this.pageType = this.data.pageType;
  }

  onCloseDialog(value?: any) {
    this.dialogRef.close(value);
  }

}
