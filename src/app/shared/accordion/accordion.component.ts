import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  isAnimationDisabled: boolean = true;

  constructor() {
  }

  ngOnInit() {
    this.enableAnimation();
  }

  enableAnimation() {
    setTimeout(() => this.isAnimationDisabled = false, 0);
  }

}
