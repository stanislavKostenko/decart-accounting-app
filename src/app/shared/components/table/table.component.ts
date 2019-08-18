import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material';
import {TableFields} from '@enums/table';
import {Icons} from '@enums/icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public dataSource: MatTableDataSource<any>;
  public tableFields = TableFields;
  public icons = Icons;

  @Input() displayedColumns: string[];

  @Input() set tableData(value: any[]) {
    this.dataSource = new MatTableDataSource<any>(value);
    this.table.renderRows();
  }

  @Output() handleAction: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('table', {static: false}) table: MatTable<any>;

  constructor() {
  }

  ngOnInit() {
  }

  getActionsWidth(field: string) {
    switch (field) {
      case this.tableFields.UPDATE:
      case this.tableFields.DELETE:
        return true;
      default:
        return false;
    }
  }

  onClickAction(item: any, type: 'update' | 'delete') {
    this.handleAction.next({item, type});
  }

}
