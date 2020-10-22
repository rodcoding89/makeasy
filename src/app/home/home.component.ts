import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private url = "../assets/files/category.json";
  public searchLocation = '';
  public categorys : any[];
  public optionValue : any;
  public isCategory : boolean;
  public checkFilter : boolean;
  public categvalue : string;
  public searchText = '';
  public isFilter : boolean;
  public location = ["Centre",'Sud','Est','Ouest','Nord','Nord Ouest','Sud Ouest','Adamaoua','Extrem Nord','Littoral','Diaspora'];
  public categoryItem : any[];
  public locatiovalue : string;
  public isLocation : boolean;
  constructor(private http: HttpClient) { 
    this.getJSON(this.url).subscribe(data => {
      this.categorys = data;
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

  public showhideFilter(){
    if(this.checkFilter == false){
      this.checkFilter = true;
    }else{
      this.checkFilter = false;
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
  }

  filterKeypress(){
    this.isFilter = true;
  }

  hideFilterBlock(){
    this.isFilter = false;
    console.log('data')
  }
  getItemCategValue(itemValue:string,categType:string){
    this.optionValue = categType;
    this.categvalue = itemValue;
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
