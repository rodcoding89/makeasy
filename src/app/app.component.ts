import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router,ActivatedRoute, NavigationStart} from '@angular/router';
import { trigger,state,transition,animate,style } from "@angular/animations";
import { HandlingDataService } from './services/handling-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('leftright', [
      state('right', style({
        transform: 'translateX(150%)',
      })),
      state('left',   style({
        transform: 'translateX(0)',
      })),
      transition('left => right', animate('600ms ease-in')),
      transition('right => left', animate('600ms ease-in'))
    ]),
  ]
})
export class AppComponent {
  checkLangfr = true;
  checkLangen = false;
  public isAuth : boolean;
  public isOnNavi : boolean;
  public name: string;
  public showHead = true;
  public state : any;
  public isMenu : boolean;
  public ownpagedata : any[];
  public ownData : any[];
  public link = `http//:localhost:3535`;
  constructor(private translate: TranslateService, private router: Router,
    private route: ActivatedRoute,private handleservice: HandlingDataService,private http : HttpClient) {
    translate.setDefaultLang('fr');
  
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (localStorage.getItem("user")) {
          if (event['url'] == '/dashboard' || event['url'] == '/home' || event['url'] == '/action' 
          || event['url'] == '/ownpage' || event['url'] == '/contact' || event['url'] == '/action/insert-service' 
          || event['url'] == '/action/insert-research-service'
          || event['url'] == '/action/insert-product ' || event['url'] == '/action/insert-need'
          || event['url'] == '/action/insert-ad') {
            this.showHead = false;
          } else {
            // console.log("NU")
            this.showHead = true;
          }
          
        } 
      }
      this.handleservice.getPersonalizeData("http://localhost:3535").subscribe(
      res =>{
        //console.log(res);
        if (localStorage.getItem("user")) {
          if(res.length > 0){
            this.showHead =false;
          }
        } else {
          this.showHead = true;
        }
        
      },
      err =>{
        console.log(err);
      }
    )
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
  hideNavi(){
    this.isMenu = true;
    this.state = 'right';
  }
  openNavi(){
    this.state = 'left';
    this.isMenu = false;
  }
  ngOnInit(): void {
    this.isAuth = false;
    this.isOnNavi = false;
    this.name = 'vall';
    this.state = 'right';
    this.isMenu = true;
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
