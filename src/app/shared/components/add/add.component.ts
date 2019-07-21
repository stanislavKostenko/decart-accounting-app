import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Icons} from '@enums/icons';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public icons = Icons;
  @Input() items: any[];
  @Input() pageType: string;
  @Output() create: EventEmitter<void> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onCreate() {
    this.create.next();
  }

}
