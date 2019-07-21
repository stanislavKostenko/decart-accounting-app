import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Spinkit} from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public spinkit = Spinkit;
  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.setDefaultLaguage();
    this.getDefaultLanguage();
  }

  setDefaultLaguage() {
    const language = localStorage.getItem('lang');
    if (!language) {
      localStorage.setItem('lang', 'ru');
    }
  }

  getDefaultLanguage() {
    const language = localStorage.getItem('lang');
    this.translateService.setDefaultLang(language);
    this.translateService.use(language);
  }
}
