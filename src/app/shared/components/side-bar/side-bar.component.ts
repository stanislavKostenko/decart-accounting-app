import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SizeProp} from '@fortawesome/fontawesome-svg-core';
import {Icons} from '@enums/icons';
import {enterLeaveLeft} from '@animations/general.animation';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [enterLeaveLeft]
})
export class SideBarComponent implements OnInit {
  public icons = Icons;
  public size: SizeProp = 'lg';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onNavigate(path: string) {
    this.router.navigate(['/', path]);
  }

}
