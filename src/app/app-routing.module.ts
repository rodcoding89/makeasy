import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { InsertAdComponent } from './action/insert-ad/insert-ad.component';
import { InsertNeedComponent } from './action/insert-need/insert-need.component';
import { InsertProductComponent } from './action/insert-product/insert-product.component';
import { InsertResearchServiceOrAdComponent } from './action/insert-research-service-or-ad/insert-research-service-or-ad.component';
import { InsertServiceComponent } from './action/insert-service/insert-service.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CompanyComponent } from './authentification/company/company.component';
import { CustomerComponent } from './authentification/customer/customer.component';
import { IndividualComponent } from './authentification/individual/individual.component';
import { PageNotFoundComponent } from './authentification/page-not-found/page-not-found.component';
import { BidComponent } from './bid/bid.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
    {path: 'action', component: ActionComponent,
      children:[
      {path: 'insert-ad',component: InsertAdComponent},
      {path:'insert-service',component:InsertServiceComponent},
      {path:'insert-need', component:InsertNeedComponent},
      {path:'insert-research-service', component:InsertResearchServiceOrAdComponent},
      {path:'insert-product', component:InsertProductComponent},
      { path: '',   redirectTo: 'insert-service', pathMatch: 'full' }]}, //{ path: '',   redirectTo: '/insert-service', pathMatch: 'full' }
    {path: 'bid', component: BidComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'authentification', component: AuthentificationComponent,
    children: [
      {path: 'customer',component: CustomerComponent},
      {path: 'company',component: CompanyComponent},
      {path: 'individual',component: IndividualComponent},
      { path: '',   redirectTo: 'customer', pathMatch: 'full' }
    ]},
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
