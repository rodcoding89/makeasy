import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HandlingDataService } from './services/handling-data.service';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { LoginGuardService } from "../app/services/login-guard.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActionComponent } from './action/action.component';
import { BidComponent } from './bid/bid.component';
import { ContactComponent } from './contact/contact.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { InsertAdComponent } from './action/insert-ad/insert-ad.component';
import { InsertServiceComponent } from './action/insert-service/insert-service.component';
import { InsertNeedComponent } from './action/insert-need/insert-need.component';
import { InsertResearchServiceOrAdComponent } from './action/insert-research-service-or-ad/insert-research-service-or-ad.component';
import { InsertProductComponent } from './action/insert-product/insert-product.component';
import { CustomerComponent } from './authentification/customer/customer.component';
import { CompanyComponent } from './authentification/company/company.component';
import { IndividualComponent } from './authentification/individual/individual.component';
import { PageNotFoundComponent } from './authentification/page-not-found/page-not-found.component';
import { SearchFilterPipe } from "./pipe/searchFilter";
import { LocationFilterPipe } from "../app/pipe/location.filter";
import { DragDropDirective } from "./directive/drapdrop.directive";
import { DashbordComponent } from './dashbord/dashbord.component';
import { MescontactsComponent } from './dashbord/mescontacts/mescontacts.component';
import { MesechangesComponent } from './dashbord/mesechanges/mesechanges.component';
import { PesonnaliseComponent } from './dashbord/pesonnalise/pesonnalise.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActionComponent,
    BidComponent,
    ContactComponent,
    AuthentificationComponent,
    InsertAdComponent,
    InsertServiceComponent,
    InsertNeedComponent,
    InsertResearchServiceOrAdComponent,
    InsertProductComponent,
    CustomerComponent,
    CompanyComponent,
    IndividualComponent,
    PageNotFoundComponent,
    SearchFilterPipe,
    LocationFilterPipe,
    DragDropDirective,
    DashbordComponent,
    MescontactsComponent,
    MesechangesComponent,
    PesonnaliseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [HandlingDataService,LoginGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}