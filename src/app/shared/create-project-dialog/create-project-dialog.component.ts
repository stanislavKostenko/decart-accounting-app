import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Icons} from '../../enums/icons';

@Component({
  selector: 'app-create-project-dialog',
  templateUrl: './create-project-dialog.component.html',
  styleUrls: ['./create-project-dialog.component.scss']
})
export class CreateProjectDialogComponent implements OnInit {
  public icons = Icons;
  public formObject: any;
  public edit: boolean;

  @Output() dialogDataOutput: EventEmitter<any> = new EventEmitter();
  constructor(private dialogRef: MatDialogRef<CreateProjectDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.formObject = this.data.object;
    this.edit = this.data.edit;
  }

  onCloseDialog(value?: any) {
    this.dialogRef.close(value);
  }

}
