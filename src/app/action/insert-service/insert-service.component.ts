import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-insert-service',
  templateUrl: './insert-service.component.html',
  styleUrls: ['./insert-service.component.scss'],
  animations: [
    trigger('leftright1', [
      state('right', style({
        transform: 'translateX(150%)',
      })),
      state('left',   style({
        transform: 'translateX(0)',
      })),
      transition('left => right', animate('600ms ease-in')),
      transition('right => left', animate('600ms ease-in'))
    ]),
    trigger('leftright2', [
      state('left1', style({
        transform: 'translateX(150%)',
      })),
      state('right1',   style({
        transform: 'translateX(0%)',
      })),
      state('right11',   style({
        transform: 'translateX(150%)',
      })),
      transition('left1 => right1', animate('600ms ease-in')),
      transition('right1 => left1', animate('600ms ease-in')),
      transition('right1 => right11', animate('600ms ease-in'))
    ]),
    trigger('leftright3', [
      state('left2', style({
        transform: 'translateX(150%)',
      })),
      state('right2',   style({
        transform: 'translateX(0%)',
      })),
      transition('left2 => right2', animate('600ms ease-in')),
      transition('right2 => left2', animate('600ms ease-in'))
    ]),
  ]
})
export class InsertServiceComponent implements OnInit {
  public left: boolean;
  public right : boolean;
  public left1: boolean;
  public right1 : boolean;
  public right11 : boolean;
  public left2: boolean;
  public right2 : boolean;
  public stateName1 :string;
  public files : any[] = [];
  public isServiceData : boolean;
  public isAddressData : boolean;
  public isImageData : boolean;
  constructor() { }

  get stateName() {
    return this.left ? 'right' : 'left';
  }
 
  get stateName2() {
    return this.left2 ? 'right2' : 'left2';
  }

  ngOnInit(): void {
    this.stateName1 = 'left1';
    this.isAddressData = false;
    this.isImageData = false;
    this.isServiceData = true;
  }

  moveRight(){
    this.left = !this.left;
    //this.left1 = !this.left1;
    this.stateName1 = 'right1';
    this.isAddressData = true;
  }
  preview(){
    this.left = !this.left;
    this.stateName1 = 'left1';
    this.isAddressData = false;
  }

  otherNext(){
    this.left2 = !this.left2;
    //this.right1 = !this.right11;
    this.stateName1 = 'right11';
    this.isImageData = true;
  }

  otherPreview(){
    this.left2 = !this.left2;
    this.stateName1 ='right1';
    this.isImageData = false;
  }

  uploadFile(event){
    console.log(event[0]);
    for (let index = 0; index < event.length; index++) {
      const element = event[index].name;
      console.log(element);
      this.files.push(element);
    }
  }
  deleteAttachement(index){
    this.files.splice(index,1);
  }

}
