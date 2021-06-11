import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HandlingDataService } from '../services/handling-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private url = "../assets/files/category.json";
  private url1 = "../assets/files/citylist.json";
  public searchLocation = '';
  public categorys : any[];
  public optionValue : any;
  public isCategory : boolean;
  public checkFilter : boolean;
  public categvalue : string;
  public searchText = '';
  public isFilter : boolean;
  //public location = ["Centre",'Sud','Est','Ouest','Nord','Nord Ouest','Sud Ouest','Adamaoua','Extrem Nord','Littoral','Diaspora'];
  public locat : any[];
  public categoryItem : any[];
  public locatiovalue : string;
  public isLocation : boolean;
  public servicedata : any[]; public researchservicedata : any[]; public needdata :any[]; public productdata : any[]; public addata : any[];
  public url2 = 'http://localhost:3535';
  public isService : boolean; public isNeed : boolean;
  public isServiceItem : boolean;
  public showDialog : boolean;
  public imgurl : String;
  public viewnumber : String;
  public isMessage : boolean;
  public monet: String;
  public monet1 : String;
  public sfname : String; public slname : String; public semail : String; public stel : String;
  public sname : String; public sdescription : String; public sprix : String; public link : String[];
  public sruequartier : String; public scity : String; public sregion : String; public spays : String;
  public isResearchService: boolean;
  public isResearchItem: boolean;
  public isNeedItem: boolean;
  public isProduct: any;
  public isProductItem: boolean;
  public isAd: boolean;
  public isAdItem: boolean;
  constructor(private http: HttpClient,private handlingdata : HandlingDataService,private router:Router) { 
    this.getJSON(this.url).subscribe(data => {
      this.categorys = data;
     });
     this.getJSON(this.url1).subscribe(data => {
      console.log(data);
      this.locat = data;
     });
  }

  public getJSON(link : any): Observable<any> {
    return this.http.get(link);
  }
  public getItemValue(itemValue: string,category: string){
    this.optionValue = category;
    this.isCategory = false;
    this.categvalue = itemValue;
    console.log(category);
  }

  public showCategory(){
    if(this.isCategory == false){
      this.isCategory = true;
    }else{
      this.isCategory = false;
    }
    
  }

  detailPage(data){
    this.sname = data.servicename;
    this.sfname = data.fname;
    this.slname = data.lname;
    this.sdescription = data.servicedescription;
    this.link = data.url.split(',');
    this.sprix = data.prix;
    this.imgurl = this.link[0];
    this.stel = data.tel;
    this.sruequartier = data.quartier_rue;
    this.scity = data.city;
    this.sregion = data.region;
    this.viewnumber = "VOIR LE NUMÉRO";
    if (data.pays != "") {
      this.spays = data.pays;
    } else {
      this.spays = "Cameroun";
    }
    this.showDialog = true;
    console.log(this.link);
  }
  
  detailResearchPage(data){
    this.sname = data.researchname;
    this.sfname = data.fname;
    this.slname = data.lname;
    this.sdescription = data.researchdescription;
    this.link = data.url.split(',');
    this.sprix = data.prix;
    this.imgurl = this.link[0];
    this.stel = data.tel;
    this.sruequartier = data.quartier_rue;
    this.scity = data.city;
    this.sregion = data.region;
    this.viewnumber = "VOIR LE NUMÉRO";
    if (data.pays != "") {
      this.spays = data.pays;
    } else {
      this.spays = "Cameroun";
    }
    this.showDialog = true;
  }

  detailNeedPage(data){
    this.sname = data.needname;
    this.sfname = data.fname;
    this.slname = data.lname;
    this.sdescription = data.needdescription;
    this.link = data.url.split(',');
    this.sprix = data.prix;
    this.imgurl = this.link[0];
    this.stel = data.tel;
    this.sruequartier = data.quartier_rue;
    this.scity = data.city;
    this.sregion = data.region;
    this.viewnumber = "VOIR LE NUMÉRO";
    if (data.pays != "") {
      this.spays = data.pays;
    } else {
      this.spays = "Cameroun";
    }
    this.showDialog = true;
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
    this.viewnumber = "VOIR LE NUMÉRO";
    if (data.pays != "") {
      this.spays = data.pays;
    } else {
      this.spays = "Cameroun";
    }
    this.showDialog = true;
  }
  detailAdPage(data){
    this.sname = data.adname;
    this.sfname = data.fname;
    this.slname = data.lname;
    this.sdescription = data.addescription;
    this.link = data.url.split(',');
    this.sprix = data.prix;
    this.imgurl = this.link[0];
    this.stel = data.tel;
    this.sruequartier = data.quartier_rue;
    this.scity = data.city;
    this.sregion = data.region;
    this.viewnumber = "VOIR LE NUMÉRO";
    if (data.pays != "") {
      this.spays = data.pays;
    } else {
      this.spays = "Cameroun";
    }
    this.showDialog = true;
  }
  showImage(imgurl){
    this.imgurl = imgurl;
  }

  public showhideFilter(){
    if(this.checkFilter == false){
      this.checkFilter = true;
    }else{
      this.checkFilter = false;
    }
    
  }

  showNumber(){
    if (localStorage.getItem("user")) {
      this.viewnumber = this.stel;
    } else {
      alert("Veillé vous connectez ou créer un Compte")
    }
    
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

  public applyingFilter(){

  }
  ngOnInit(): void {
    this.optionValue = "Categorie";
    this.isCategory = false;
    this.checkFilter = false;
    this.categvalue = '';
    this.isFilter = false;
    this.isLocation = false;
    this.isService = true;
    this.showDialog = false;
    this.viewnumber = "VOIR LE NUMÉRO";
    this.isMessage = false;
    this.isResearchService = false;
    this.isServiceItem = true;
    this.isResearchItem = false;
    this.isNeed = false;
    this.isNeedItem = false;
    this.isProduct = false;
    this.isProductItem = false;
    this.isAd = false;
    this.isAdItem = false;
    this.handlingdata.getServiceData(this.url2).subscribe(
      res => {
        console.log(res);
        this.servicedata = res;
        this.isServiceItem = true;
        res.forEach(el => {
          console.log(el);
        });
      },
      err => {
        console.log(err);
      }
    );
    
    
  }

  loadData(value){
    if (value == 'service') {
      if (this.isService) {
        this.isService = false;
        this.isServiceItem = false;
      } else {
        this.isService = true;
        this.isServiceItem = true;
        this.isResearchService = false;
        this.isResearchItem = false;
        this.isNeed = false;
        this.isNeedItem = false;
        this.isProduct = false;
        this.isProductItem = false;
        this.isAd = false;
        this.isAdItem = false;
      }
      this.handlingdata.getServiceData(this.url2).subscribe(
        res => {
          console.log(res);
          this.servicedata = res;
          
          res.forEach(el => {
            console.log(el);
          });
        },
        err => {
          console.log(err);
        }
      );
    } else if(value == 'research') {
        if (this.isResearchService) {
          this.isResearchService = false;
          this.isResearchItem = false;
        } else {
          this.isNeed = false;
          this.isNeedItem = false;
          this.isResearchService = true;
          this.isResearchItem = true;
          this.isService = false;
          this.isServiceItem = false;
          this.isProduct = false;
          this.isProductItem = false;
          this.isAd = false;
          this.isAdItem = false;
        }
        this.handlingdata.getResearchServiceData(this.url2).subscribe(
          res => {
            console.log(res);
            this.researchservicedata = res;
          },
          err => {
            console.log(err);
          }
        );
    }else if(value == 'ad') {
      if (this.isAd) {
        this.isAd = false;
        this.isAdItem = false;
      } else {
        this.isAd = true;
        this.isAdItem = true;
        this.isNeedItem = false;
        this.isNeed = false;
        this.isResearchService = false;
        this.isResearchItem = false;
        this.isService = false;
        this.isServiceItem = false;
        this.isProduct = false;
        this.isProductItem = false;
      }
      this.handlingdata.getAdData(this.url2).subscribe(
        res => {
          console.log(res);
          this.addata = res;
        },
        err => {
          console.log(err);
        }
      );
    }else if(value == 'product') {
      if (this.isProduct) {
        this.isProduct = false;
        this.isProductItem = false;
      } else {
        this.isProduct = true;
        this.isProductItem = true;
        this.isNeedItem = false;
        this.isNeed = false;
        this.isResearchService = false;
        this.isResearchItem = false;
        this.isService = false;
        this.isServiceItem = false;
        this.isAd = false;
        this.isAdItem = false;
      }
      this.handlingdata.getProductData(this.url2).subscribe(
        res => {
          console.log(res);
          this.productdata = res;
        },
        err => {
          console.log(err);
        }
      );
    }else if(value == 'need') {
      if (this.isNeed) {
        this.isNeed = false;
        this.isNeedItem = false;
      } else {
        this.isNeed = true;
        this.isNeedItem = true;
        this.isResearchService = false;
        this.isResearchItem = false;
        this.isService = false;
        this.isServiceItem = false;
        this.isAd = false;
        this.isAdItem = false;
      }
      this.handlingdata.getNeedData(this.url2).subscribe(
        res => {
          console.log(res);
          this.needdata = res;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  filterKeypress(){
    this.isFilter = true;
  }

  isEmpty(value){
    return (value == "" || value == null);
  }

  hideFilterBlock(){
    this.isFilter = false;
    console.log('data')
  }
  getItemCategValue(categType:string){
    this.optionValue = categType;
    this.isCategory = false;
    this.isFilter = false;
  }
  locationItem(lItemValue: string){
    this.locatiovalue = lItemValue;
    console.log('data')
    this.isLocation = false;
  }

  locationKeypress(){
    this.isLocation = true;
  }

  hideLocationBlock(){
    this.isLocation = false;
  }

}
