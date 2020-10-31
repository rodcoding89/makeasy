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
}
