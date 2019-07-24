import { Component, OnInit } from '@angular/core';
import {enterLeaveOpacity} from '@animations/general.animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [enterLeaveOpacity]
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
