import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HandlingDataService } from '../services/handling-data.service';

@Component({
  selector: 'app-ownpage',
  templateUrl: './ownpage.component.html',
  styleUrls: ['./ownpage.component.scss']
})
export class OwnpageComponent implements OnInit {
  public url = 'http://localhost:3535';

  public ownpagedata : any[];
  constructor(private hadleservice: HandlingDataService,private router : Router) { }

  ngOnInit(): void {
    this.hadleservice.getPersonalizeData(this.url).subscribe(
      res =>{
        //console.log(res);
        this.ownpagedata = res;
      },
      err =>{
        console.log(err);
      }
    );
  }

}
