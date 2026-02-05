import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterPd101ListingComponent } from './master-pd101/master-pd101-listing/master-pd101-listing.component';
import { MasterPd101FormComponent } from './master-pd101/master-pd101-form/master-pd101-form.component';
import { MasterRh101ListingComponent } from './master-rh101/master-rh101-listing/master-rh101-listing.component';
import { MasterRh101FormComponent } from './master-rh101/master-rh101-form/master-rh101-form.component';
import { MasterPd301ListingComponent } from './master-pd301/master-pd301-listing/master-pd301-listing.component';
import { MasterPd301FormComponent } from './master-pd301/master-pd301-form/master-pd301-form.component';
import { MasterRh301ListingComponent } from './master-rh301/master-rh301-listing/master-rh301-listing.component';
import { MasterRh301FormComponent } from './master-rh301/master-rh301-form/master-rh301-form.component';
import { MasterPd102ListingComponent } from './master-pd102/master-pd102-listing/master-pd102-listing.component';
import { MasterPd102FormComponent } from './master-pd102/master-pd102-form/master-pd102-form.component';
import { MasterPd105ListingComponent } from './master-pd105/master-pd105-listing/master-pd105-listing.component';
import { MasterPd105FormComponent } from './master-pd105/master-pd105-form/master-pd105-form.component';


const routes: Routes = [
  {
    path: 'master-pd101',
    children: [
      { path: 'list', component: MasterPd101ListingComponent },
      { path: 'form/:id', component: MasterPd101FormComponent }
    ]
  },
  {
    path: 'master-rh101',
    children: [
      { path: 'list', component: MasterRh101ListingComponent },
      { path: 'form/:id', component: MasterRh101FormComponent }
    ]
  },
  {
    path: 'master-pd301',
    children: [
      { path: 'list', component: MasterPd301ListingComponent },
      { path: 'form/:id', component: MasterPd301FormComponent }
    ]
  },
  {
    path: 'master-rh301',
    children: [
      { path: 'list', component: MasterRh301ListingComponent },
      { path: 'form/:id', component: MasterRh301FormComponent }
    ]
  },
  {
    path: 'master-pd102',
    children: [
      { path: 'list', component: MasterPd102ListingComponent },
      { path: 'form/:id', component: MasterPd102FormComponent }
    ]
  },
  {
    path: 'master-pd105',
    children: [
      { path: 'list', component: MasterPd105ListingComponent },
      { path: 'form/:id', component: MasterPd105FormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
