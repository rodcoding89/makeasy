import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  checkLangfr = true;
  checkLangen = false;
  public isAuth : boolean;
  constructor(private translate: TranslateService, private router: Router,
    private route: ActivatedRoute) {
    translate.setDefaultLang('fr');
  }
  useLanguage(language: string) {
    if(language == "fr"){
      this.checkLangfr = true;
      this.checkLangen = false;
    }else if(language == "en"){
      this.checkLangen = true;
      this.checkLangfr = false; 
    }
    this.translate.use(language);
  }
  ngOnInit(): void {
    this.isAuth = false;
  }
  showAuth(){
    this.isAuth = true;
    console.log('test');
  }
  hideAuth(){
    this.isAuth = false;
  }
  hide(){
    this.isAuth = false;
  }
}
