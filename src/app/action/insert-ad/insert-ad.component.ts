import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";
import { HandlingDataService } from "../../services/handling-data.service";

@Component({
  selector: 'app-insert-ad',
  templateUrl: './insert-ad.component.html',
  styleUrls: ['./insert-ad.component.scss'],
  animations: [
    trigger('leftright1', [
      state('right', style({
        //transform: 'translateX(150%)',
        //right : '-130%'
        display: 'none'
      })),
      state('left',   style({
        //transform: 'translateX(0)',
        //right : '0%'
        display : 'block'
      })),
      transition('left => right', animate('600ms ease-in')),
      transition('right => left', animate('600ms ease-in'))
    ]),
    trigger('leftright2', [
      state('left1', style({
        //transform: 'translateX(150%)',
        //right : '-130%'
        display : 'none'
      })),
      state('right1',   style({
        //transform: 'translateX(0%)',
        //right : '0%'
        display : 'block'
      })),
      state('right11',   style({
        //transform: 'translateX(150%)',
        //right : '-130%'
        display : 'none'
      })),
      transition('left1 => right1', animate('600ms ease-in')),
      transition('right1 => left1', animate('600ms ease-in')),
      transition('right1 => right11', animate('600ms ease-in'))
    ]),
    trigger('leftright3', [
      state('left2', style({
        //transform: 'translateX(150%)',
        //right : '-130%'
        display : 'none'
      })),
      state('right2',   style({
        //transform: 'translateX(0%)',
        //right : '0%'
        display : 'block'
      })),
      transition('left2 => right2', animate('600ms ease-in')),
      transition('right2 => left2', animate('600ms ease-in'))
    ]),
    trigger('leftright4', [
      state('left3', style({
        //transform: 'translateX(150%)',
        //right : '-130%'
        display : 'none'
      })),
      state('right3',   style({
        //transform: 'translateX(0%)',
        //right : '0%'
        display : 'block'
      })),
      transition('left3 => right3', animate('600ms ease-in')),
      transition('right3 => left3', animate('600ms ease-in'))
    ]),
  ]
})
export class InsertAdComponent implements OnInit {
  public left: boolean;
  public right : boolean;
  public left1: boolean;
  public right1 : boolean;
  public right11 : boolean;
  public left2: boolean;
  public right2 : boolean;
  public left3: boolean;
  public right3 : boolean;
  public isLocal : boolean;
  public isDiaspo : boolean;
  public stateName1 :string;
  public stateName3 :string;
  public stateName2 :string;
  public stateName4 :string;
  public files : any[] = [];
  public isServiceData : boolean;
  public isAddressData : boolean;
  public isImageData : boolean;
  public url = 'http://localhost:3535';
  public isLoader : boolean;
  public userid : any;
  constructor(private fb : FormBuilder,private handlingservice : HandlingDataService) { }

  public adForm = this.fb.group({
    adname: new FormControl('', [Validators.required]),
    prix: new FormControl('', [Validators.required]),
    addescription: new FormControl('', [Validators.required]),
    
    distric : new FormControl('',[Validators.required]),
    city : new FormControl('',[Validators.required]),
    bpostal: new FormControl(''),
    region : new FormControl('',[Validators.required]),
    images : new FormControl(''),
    pays : new FormControl('')
  })

  get stateName() {
    return this.left ? 'right' : 'left';
  }
 
  /*get stateName2() {
    return this.left2 ? 'right2' : 'left2';
  }*/

  ngOnInit(): void {
    this.stateName1 = 'left1';
    this.isAddressData = false;
    this.isImageData = false;
    this.isServiceData = true;
    this.stateName3 = 'left3';
    this.stateName4 = 'right3';
    this.isLocal = true;
    this.isDiaspo = false;
    this.stateName2 = 'left2';
    this.isLoader = false;
    if(localStorage.getItem("user")){
      this.userid = localStorage.getItem("user").split('-')[1];
    }
  }

  moveRight(){
    if (localStorage.getItem("user")) {
      if (this.adForm.get('adname').value !== '' && this.adForm.get('addescription').value !== '' && this.adForm.get('prix').value !== '') {
        this.left = !this.left;
        this.stateName1 = 'right1';
        this.isAddressData = true;
      } else {
        alert("Veillé remplir les champs")
      }
      
    } else {
      alert("Veillé vous connecter avant d'effectuer des Insertions")
    }
    
  }
  preview(){
    this.left = !this.left;
    this.stateName1 = 'left1';
    this.isAddressData = false;
  }

  otherNext(){
    if ((this.adForm.get('distric').value !== '' && this.adForm.get('city').value !== '' && this.adForm.get('region').value !== '') || (this.adForm.get('distric').value !== '' && this.adForm.get('city').value !== '' && this.adForm.get('region').value !== '' && this.adForm.get('pays').value !== '')) {
      this.left2 = !this.left2;
      //this.right1 = !this.right11;
      this.stateName1 = 'right11';
      this.isImageData = true;
      this.stateName2 = 'right2';
    } else {
      alert("Veillé remplir tous les champs!");
    }
    
  }

  otherPreview(){
    this.left2 = !this.left2;
    this.stateName1 ='right1';
    this.isImageData = false;
    this.stateName2 = 'left2';
    this.stateName1 = 'right1';
  }

  uploadFile(event){
    console.log(event[0]);

    for (let index = 0; index < event.length; index++) {
      const type = event[index].type;

      if (type.split("/")[1] == 'jpg' || type.split("/")[1] == 'gif' || type.split("/")[1] == 'png' ||type.split("/")[1] == 'jpeg') {
        const element = event[index];
        //console.log(element);
        this.files.push(element);
      } else {
        alert("Uniquement des images svp");
      }
     
    }
  }

  diaspoLeftRight(){
    this.stateName3 = 'right3';
    this.stateName4 = 'left3';
    this.isLocal = false;
    this.isDiaspo = true;
  }
  localLeftRight(){
    this.stateName4 = 'right3';
    this.stateName3 = 'left3';
    this.isLocal = true;
    this.isDiaspo = false;
  }
    
  deleteAttachement(index){
    this.files.splice(index,1);
  }
  submitInsertService(event){
    this.isLoader = true;
    event.preventDefault();
    const formData: any = new FormData();
    //const files: Array<File> = this.filesToUpload;
    console.log(this.files);
    if(this.files.length > 0){
      for(let i =0; i < this.files.length; i++){
        formData.append("uploads[]", this.files[i], this.files[i]['name']);
      }
    }
    
    formData.append("data",JSON.stringify(this.adForm.value));
    formData.append("userid",JSON.stringify(this.userid));
    setTimeout(()=>{
      this.handlingservice.handlingInsertAd(this.url,formData).subscribe(
        res => {
          console.log(res);
          if(res.insertion == 'SUCCESSFULL'){
            alert("Données insérés avec succés");
            location.reload();
          }
          this.isLoader = false;
        },
        err => {
          console.log(err);
          this.isLoader = false;
          alert("Problem de connection reessayé ultèrieurement");
        }
      )
    },3000);

    
    console.log('form data variable :   ', formData);
    
    //console.log(this.adForm.value);
  }
}
