import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-project-dialog',
  templateUrl: './create-project-dialog.component.html',
  styleUrls: ['./create-project-dialog.component.scss']
})
export class CreateProjectDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CreateProjectDialogComponent>) {
  }

  ngOnInit() {
  }

  onCloseDialog() {
    this.dialogRef.close();
  }

}
