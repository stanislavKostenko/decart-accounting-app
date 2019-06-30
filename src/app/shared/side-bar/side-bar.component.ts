import {Component, OnInit} from '@angular/core';
import {Icons} from '../../enums/icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  public icons = Icons;
  public size: string = 'lg';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onNavigate(path: string) {
    this.router.navigate(['/', path]);
  }

}
