import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HandlingDataService } from '../services/handling-data.service';

@Component({
  selector: 'app-ownpage-user',
  templateUrl: './ownpage-user.component.html',
  styleUrls: ['./ownpage-user.component.scss']
})
export class OwnpageUserComponent implements OnInit {
  public userid : any;
  public url = "http://localhost:3535";
  public personalizepage : any[];
  public messageText : any;
  public isMessageText :boolean;
  sname: any;sfname: any;slname: any;sdescription: any;link: any;sprix: any;imgurl: any;stel: any;
  sruequartier: any;scity: any;sregion: any;spays: any;
  showDialog: boolean;
  isMessage: any;
  constructor(private route : ActivatedRoute,private handldata: HandlingDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      res =>{
        this.userid = res.user.split('-')[1];
        this.handldata.handlingPersonalizePage(this.url,{"userid":this.userid}).subscribe(
          res => {
            console.log(res);
            if (res.length > 0) {
              this.personalizepage = res;
              this.isMessageText = false;
            } else {
              this.isMessageText = true;
              this.messageText = res.info;
            }
            this.personalizepage = res;
          },
          err =>{
            console.log(err)
          }
        )
      },
      err =>{
        console.log(err);
      }
    )
    this.isMessage = false;
  }
  detailProductPage(data){
    this.sname = data.productname;
    this.sfname = data.fname;
    this.slname = data.lname;
    this.sdescription = data.productdescription;
    this.link = data.url.split(',');
    this.sprix = data.prix;
    this.imgurl = this.link[0];
    this.stel = data.tel;
    this.sruequartier = data.quartier_rue;
    this.scity = data.city;
    this.sregion = data.region;
    if (data.pays != "") {
      this.spays = data.pays;
    } else {
      this.spays = "Cameroun";
    }
    this.showDialog = true;
  }

  sendMessage(){
    if (localStorage.getItem("user")) {
      
      if(this.isMessage){
        this.isMessage = false;
      }else{
        this.isMessage = true;
      }
    } else {
      this.isMessage = false;
      alert("Veillé vous connecter ou vous inscrire avant d'envoyer le message");
    }
  }

}
