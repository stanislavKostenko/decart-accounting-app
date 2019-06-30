import { Component, OnInit } from '@angular/core';
import {Icons} from '../../../enums/icons';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  public icons = Icons;
  public size: string = 'lg';
  constructor() { }

  ngOnInit() {
  }

}
