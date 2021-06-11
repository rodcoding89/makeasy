import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder,FormControl,Validators,FormGroup } from "@angular/forms";
 
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { HandlingDataService } from "../services/handling-data.service";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
public username = "";
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
public isPageInscription : boolean;
public isPayment : boolean;
public isText :boolean;
public isPaymentBlock : boolean;
public isPageInscriptionBlock : boolean;
public isContact : boolean;
public userid : any;
public servicedata : any[]; public researchservicedata : any[];
public dataservice : any;
public  isElementS: boolean; public isElementR : boolean; public  isElementPP: boolean; public isElementN : boolean;
public  isElementA: boolean;
  dateresearch: any;
  dataproduct: any;
  productdata: any;
  needdata: any;
  dataneed: any;
  dataad: any;
  addata: any;
  constructor(private router: Router,public fb:FormBuilder,private fb1: FormBuilder,
    private stripeService: StripeService,private handlingservice : HandlingDataService) { }
  public personalizeForm = this.fb.group({
    bname : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required,Validators.maxLength(80)])
  });
  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  public url = 'http://localhost:3535';
 
  cardOptions: StripeCardElementOptions = {
    hidePostalCode: true,
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '14px',
        backgroundColor : 'white',
        '::placeholder': {
          color: 'black',
        },
      },
      invalid: {
        iconColor: '#ffc7ee',
        color: '#ffc7ee'
      }
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'fr',
  };
 
  stripeTest: FormGroup;

  ngOnInit(): void {
    this.myNavi = true;
    this.isEl = false;
    this.isPersonalized = false;
    this.isContentP = false;
    this.isContentPP = false;
    this.isContentR = false;
    this.isContentA = false;
    this.isContentB = false;
    this.username = localStorage.getItem('user').split('-')[0];
    this.userid =  localStorage.getItem('user').split('-')[1];
    this.isPageInscription = false;
    this.isPayment = false;
    this.isText = true;
    this.isContact = false;

    this.stripeTest = this.fb1.group({
      name: ['', [Validators.required]]
    });
  }

  logout(){
    if(localStorage.getItem("user")){
      localStorage.removeItem("user");
      location.reload();
    }
  }

  deleteItemService(serviceid){
    this.handlingservice.handlingDeleteServiceData(this.url,{"serviceid":serviceid}).subscribe(
      res => {
        console.log(res);
        location.reload();  
      },
      err =>{
        console.log(err);
      }
    )
  }

  deleteItemProduct(productid){
    this.handlingservice.handlingadDeleteProductData(this.url,{"productid":productid}).subscribe(
      res => {
        console.log(res);
        location.reload();  
      },
      err =>{
        console.log(err);
      }
    )
    
  }

  deleteItemResearch(researchid){
    this.handlingservice.handlingDeleteResearchServiceData(this.url,{"researchid":researchid}).subscribe(
      res => {
        console.log(res);
        location.reload();  
      },
      err =>{
        console.log(err);
      }
    )
  }

  deleteItemNeed(needid){
    this.handlingservice.handlingDeleteNeedData(this.url,{"needid":needid}).subscribe(
      res => {
        console.log(res);
        location.reload();  
      },
      err =>{
        console.log(err);
      }
    )
  }

  deleteItemAd(adid){
    this.handlingservice.handlingDeleteAdData(this.url,{"adid":adid}).subscribe(
      res => {
        console.log(res);
        location.reload();  
      },
      err =>{
        console.log(err);
      }
    )
  }

  backToOtherBlock(value){
    if (value == 'personalized') {
      this.isPersonalized = false;
      this.myNavi = true;
    } else if(value == 'profil') {
      this.isContentP = false;
      this.myNavi = true;
    }else if(value == 'service') {
      this.isContentS = false;
      this.myNavi = true;
    }else if(value == 'research') {
      this.isContentR = false;
      this.myNavi = true;
    }else if(value == 'product') {
      this.isContentPP = false;
      this.myNavi = true;
    }else if(value == 'ad') {
      this.isContentA = false;
      this.myNavi = true;
    }else if(value == 'need') {
      this.isContentB = false;
      this.myNavi = true;
    }else if(value == 'contact') {
      this.isContact = false;
      this.myNavi = true;
    }else if(value == 'feedback') {
      this.isFeedback = false;
      this.myNavi = true;
    }
  }

  previewPage(){
    this.isText = true;
    this.isPageInscription = false;
    this.isPageInscriptionBlock = false;
  }

  otherpreviewPage(){
    this.isPayment = false;
    this.isPaymentBlock = false;
    this.isPageInscriptionBlock = true;
    this.isPageInscription = true;
  }

  activeMyPage(){
    this.isPageInscription = true;
    this.isText = false;
    this.isPageInscriptionBlock = true;
    //this.router.navigate(['/payment']);
  }

  pageInscription(){
    this.isPayment = true;
    this.isPageInscriptionBlock = false;
    this.isPaymentBlock = true;
    //this.isPageInscription = false;
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
      this.handlingservice.handlingNeedUserData(this.url,{"userid":this.userid}).subscribe(
        res => {
          //console.log(res);
          if (res.length > 0) {
            this.needdata = res;
            this.isElementN = true;
          } else {
            this.dataneed = res.info;
            //this.isContentS = false;
            this.isElementN = false;
          }
        },
        err => {
          console.log(err);
        }
      )
    }else if(name == 'service'){
      this.isContentS = true;
      this.myNavi = false;
      this.handlingservice.handlingServiceUserData(this.url,{"userid":this.userid}).subscribe(
        res => {
          //console.log(res);
          if (res.length > 0) {
            this.servicedata = res;
            this.isElementS = true;
          } else {
            this.dataservice = res.info;
            //this.isContentS = false;
            this.isElementS = false;
          }
        },
        err => {
          console.log(err);
        }
      )
    }else if(name == 'rservice'){
      this.isContentR = true;
      this.myNavi = false;
      this.handlingservice.handlingResearchUserData(this.url,{"userid":this.userid}).subscribe(
        res =>{
          console.log(res);
          if(res.length > 0){
            this.isElementR = true;
            this.researchservicedata = res;
          }else{
            this.dateresearch = res.info;
            this.isElementR = false;
          }
        },
        err =>{
          console.log(err);
        }
      )
    }else if(name == 'product'){
      this.isContentPP = true;
      this.myNavi = false;
      this.handlingservice.handlingproductUserData(this.url,{"userid":this.userid}).subscribe(
        res =>{
          console.log(res);
          if(res.length > 0){
            this.isElementPP = true;
            this.productdata = res;
          }else{
            this.dataproduct = res.info;
            this.isElementPP = false;
          }
        },
        err =>{
          console.log(err);
        }
      )
    }else if(name == 'ad'){
      this.isContentA = true;
      this.myNavi = false;
      this.handlingservice.handlingadUserData(this.url,{"userid":this.userid}).subscribe(
        res =>{
          console.log(res);
          if(res.length > 0){
            this.isElementA = true;
            this.addata = res;
          }else{
            this.dataad = res.info;
            this.isElementA = false;
          }
        },
        err =>{
          console.log(err);
        }
      )
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
      this.isFeedback = true;
      this.myNavi = false;
    }else if(name == 'contact'){
      this.isEl = false;
      this.isContact = true;
      this.myNavi = false;
    }else if(name == 'deconn'){
      this.isEl = false;
    }
  }

  paymount() {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.getCard(), { name })
      .subscribe(result => {
        if (result.token) {
          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges
          const labelname = this.personalizeForm.get("bname").value;
          const labeldescription = this.personalizeForm.get("description").value;

          const data = {id:result.token.id,userid : localStorage.getItem("user").split("-")[1],labelname:labelname,labeldescription:labeldescription};
          this.handlingservice.handlingStripPayment(this.url,data).subscribe(
            res =>{
              console.log(res);
              if(res.success){
                alert("payment reussit");
                location.reload();
              }
            },
            err =>{
              console.log(err);
            }
          )
          console.log(result.token.id);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }

}
