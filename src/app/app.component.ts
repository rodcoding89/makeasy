import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router,ActivatedRoute, NavigationStart} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  checkLangfr = true;
  checkLangen = false;
  public isAuth : boolean;
  public isOnNavi : boolean;
  public name: string;
  public showHead = true;
  constructor(private translate: TranslateService, private router: Router,
    private route: ActivatedRoute) {
    translate.setDefaultLang('fr');
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (localStorage.getItem("user")) {
          if (event['url'] == '/dashboard' || event['url'] == '/home' || event['url'] == '/action' || event['url'] == '/depot' || event['url'] == '/contact') {
            this.showHead = false;
          } else {
            // console.log("NU")
            this.showHead = true;
          }
        } 
      }
    });
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
    this.isOnNavi = false;
    this.name = 'vall';
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
  feedback(){
   
  }
  dashboard(){
    this.router.navigate(['dashboard']);
    this.isOnNavi = false;
  }
  deconnect(){}
  showNav(){
    if (this.isOnNavi) {
      this.isOnNavi = false;
    } else {
      this.isOnNavi = true;
    }
    
  }
}
