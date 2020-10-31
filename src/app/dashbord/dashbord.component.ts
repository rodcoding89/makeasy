import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
public username = "Guaol Nudo Vall";
public isContentP :boolean
public isContentS :boolean
public isContentR :boolean
public isContentA :boolean
public isContentB :boolean
public isContentPP :boolean
public myNavi: boolean;
public isEl : boolean;
public isPersonalized : boolean;
public isFeedback : boolean;
  constructor() { }

  ngOnInit(): void {
    this.myNavi = true;
    this.isEl = false;
    this.isPersonalized = false;
    this.isContentP = false;
    this.isContentPP = false;
    this.isContentR = false;
    this.isContentA = false;
    this.isContentB = false;
  }

  showElement(){
    if(this.isEl){
      this.isEl = false
    }else{
      this.isEl = true;
    }
    
  }

  showBlock(name : string){
    if(name == 'need'){
      this.isContentB = true;
      this.myNavi = false;
    }else if(name == 'service'){
      this.isContentS = true;
      this.myNavi = false;
    }else if(name == 'rservice'){
      this.isContentR = true;
      this.myNavi = false;
    }else if(name == 'product'){
      this.isContentPP = true;
      this.myNavi = false;
    }else if(name == 'ad'){
      this.isContentA = true;
      this.myNavi = false;
    }else if(name == 'profil'){
      this.isContentP = true;
      this.myNavi = false;
    }else if(name == 'personalized'){
      console.log('data');
      this.isPersonalized = true;
      this.myNavi = false;
      this.isFeedback = false;
      this.isEl = false;
    }else if(name == 'feedback'){
      this.isEl = false;
    }else if(name == 'deconn'){
      this.isEl = false;
    }
  }

}
