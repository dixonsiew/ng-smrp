import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ReportRoutingModule } from './report-routing.module';

import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { ReportService as PD101Service } from './master-pd101/services/report.service';
import { ReportService as RH101Service } from './master-rh101/services/report.service';
import { ReportService as PD301Service } from './master-pd301/services/report.service';
import { ReportService as RH301Service } from './master-rh301/services/report.service';
import { ReportService as PD102Service } from './master-pd102/services/report.service';
import { ReportService as PD105Service } from './master-pd105/services/report.service';

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


@NgModule({
  declarations: [
    MasterPd101ListingComponent,
    MasterPd101FormComponent,
    MasterRh101ListingComponent,
    MasterRh101FormComponent,
    MasterPd301ListingComponent,
    MasterPd301FormComponent,
    MasterRh301ListingComponent,
    MasterRh301FormComponent,
    MasterPd102ListingComponent,
    MasterPd102FormComponent,
    MasterPd105ListingComponent,
    MasterPd105FormComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    NgSelectModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [
    PD101Service,
    RH101Service,
    PD301Service,
    RH301Service,
    PD102Service,
    PD105Service
  ]
})
export class ReportModule { }
