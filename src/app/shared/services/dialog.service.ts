import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  openDialog(component: any, data: any) {
    const config: MatDialogConfig = this.getDialogConfig(data);
    return this.dialog.open(component, config);
  }

  private getDialogConfig(data: any): MatDialogConfig {
    return {
      maxWidth: '400px',
      panelClass: 'general-box',
      backdropClass: 'general-dialog-backdrop',
      hasBackdrop: true,
      data
    };
  }
}
