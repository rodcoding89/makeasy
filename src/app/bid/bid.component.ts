import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { HandlingDataService } from '../services/handling-data.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.scss']
})
export class BidComponent implements OnInit {

  public member = {"pageproprio":"Niel","text":"Je Vous presente ma page, je fais dans le Commerce"};
  public puserdata : any[];
  private user : any;
  public url = 'http://localhost:3535';
  constructor(private router: Router,private route: ActivatedRoute,private handleservice : HandlingDataService) {
    router.navigate([''])
  }

  ngOnInit(): void {
    /*this.route.params.subscribe(params => {
      this.user = +params['user']; // (+) converts string 'id' to a number
      console.log(this.user);
      
      // In a real app: dispatch action to load the details here.
   });*/
   /*this.handleservice.getPersonalizeData(this.url).subscribe(
        res =>{
          this.puserdata = res;
          console.log(res);
        },
        err =>{
          console.log(err);
        }
      )*/
  }

}
