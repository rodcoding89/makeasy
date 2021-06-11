import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HandlingDataService {
  public headers = {'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar'};
  constructor(private http: HttpClient) {
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
   }

   public getPersonalizeData(link : any): Observable<any> {
    return this.http.get<any>(`${link}/getpersonalizedata`);
  }

  public getServiceData(link : any): Observable<any> {
    return this.http.get<any>(`${link}/getallservicedata`);
  }

  public getResearchServiceData(link : any): Observable<any> {
    return this.http.get<any>(`${link}/getallresearchservicedata`);
  }

  public getProductData(link : any): Observable<any> {
    return this.http.get<any>(`${link}/getallproductdata`);
  }

  public getNeedData(link : any): Observable<any> {
    return this.http.get<any>(`${link}/getallneeddata`);
  }

  public getAdData(link : any): Observable<any> {
    return this.http.get<any>(`${link}/getalladdata`);
  }

  public handlingPersonalizePage(link : any,data: any): Observable<any> {
    return this.http.post<any>(`${link}/personalizepage`,data,{headers:this.headers});
  }

  public handlingGetServiceData(link : any,data: any): Observable<any> {
    return this.http.post<any>(`${link}/getservicedata`,data,{headers:this.headers});
  }

  public handlingGetResearchServiceData(link : any,data: any): Observable<any> {
    return this.http.post<any>(`${link}/getresearchservicedata`,data,{headers:this.headers});
  }

  public handlingGetProductData(link : any,data: any): Observable<any> {
    return this.http.post<any>(`${link}/getproductdata`,data,{headers:this.headers});
  }

  public handlingGetNeedData(link : any,data : any): Observable<any> {
    return this.http.post<any>(`${link}/getneeddata`,data,{headers:this.headers});
  }

  public handlingGetAdData(link : any,data : any): Observable<any> {
    return this.http.post<any>(`${link}/getaddata`,data,{headers:this.headers});
  }

  public handlingLoginIndividual(link : any,loginData: any): Observable<any> {
    return this.http.post<any>(`${link}/individualAuth`,loginData,{headers:this.headers});
  }

  public handlingLoginCompany(link : any,loginData: any): Observable<any> {
    return this.http.post<any>(`${link}/companyauth`,loginData,{headers:this.headers});
  }

  public handlingSignCompany(link : any,signData: any): Observable<any> {
    return this.http.post<any>(`${link}/company`,signData,{headers:this.headers});
  }
  public handlingSignIndividual(link : any,signData: any): Observable<any> {
    return this.http.post<any>(`${link}/individual`,signData,{headers:this.headers});
  }

  public handlingInsertService(link : any,signData: any): Observable<any> {
    return this.http.post<any>(`${link}/insertservice`,signData,{headers:this.headers});
  }

  public handlingInsertResearchService(link : any,signData: any): Observable<any> {
    return this.http.post<any>(`${link}/insertresearchservice`,signData,{headers:this.headers});
  }
  
  public handlingInsertProduct(link : any,signData: any): Observable<any> {
    return this.http.post<any>(`${link}/insertproduct`,signData,{headers:this.headers});
  }

  public handlingInsertNeed(link : any,signData: any): Observable<any> {
    return this.http.post<any>(`${link}/insertneed`,signData,{headers:this.headers});
  }

  public handlingInsertAd(link : any,signData: any): Observable<any> {
    return this.http.post<any>(`${link}/insertad`,signData,{headers:this.headers});
  }
  public handlingStripPayment(link : any,signData: any): Observable<any> {
    return this.http.post<any>(`${link}/stripPayment`,signData,{headers:this.headers});
  }
  public handlingSendMessage(link : any,signData: any): Observable<any> {
    return this.http.post<any>(`${link}/contact`,signData,{headers:this.headers});
  }

  public handlingServiceUserData(link : any,data: any): Observable<any> {
    return this.http.post<any>(`${link}/getserviceuserdata`,data,{headers:this.headers});
  }
  public handlingResearchUserData(link : any,data: any): Observable<any> {
    return this.http.post<any>(`${link}/getresearchuserdata`,data,{headers:this.headers});
  }
  public handlingproductUserData(link : any,data: any): Observable<any> {
    return this.http.post<any>(`${link}/getproductuserdata`,data,{headers:this.headers});
  }
  public handlingNeedUserData(link : any,data: any): Observable<any> {
    return this.http.post<any>(`${link}/getneeduserdata`,data,{headers:this.headers});
  }
  public handlingadUserData(link : any,data: any): Observable<any> {
    return this.http.post<any>(`${link}/getaduserdata`,data,{headers:this.headers});
  }

  public handlingDeleteServiceData(link : any,data: any): Observable<any> {
    return this.http.post<any>(`${link}/deleteservicedata`,data,{headers:this.headers});
  }
  public handlingDeleteResearchServiceData(link : any,data: any): Observable<any> {
    return this.http.post<any>(`${link}/deleteresearchservicedata`,data,{headers:this.headers});
  }
  public handlingadDeleteProductData(link : any,data: any): Observable<any> {
    return this.http.post<any>(`${link}/deleteproductdata`,data,{headers:this.headers});
  }
  public handlingDeleteNeedData(link : any,data: any): Observable<any> {
    return this.http.post<any>(`${link}/deleteneeddata`,data,{headers:this.headers});
  }
  public handlingDeleteAdData(link : any,data: any): Observable<any> {
    return this.http.post<any>(`${link}/deleteaddata`,data,{headers:this.headers});
  }
}
