import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { SetupRoutingModule } from './setup-routing.module';

import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { UserListingComponent } from './user/user-listing/user-listing.component';
import { UserCreateComponent } from './user/user-create/user-create.component';

import { UserService } from './user/services/user.service';
import { EthnicGroupService } from './ethnic-group/services/ethnic-group.service';
import { DischargeOfficerService } from './discharge-officer/services/discharge-officer.service';
import { PersonCategoryCodeService } from './person-category-code/services/person-category-code.service';
import { AdmStatusService } from './adm-status/services/adm-status.service';
import { DischargeTypeService } from './discharge-type/services/discharge-type.service';
import { SpecialityService } from './speciality/services/speciality.service';
import { WardClassService } from './ward-class/services/ward-class.service';
import { ReferralService } from './referral/services/referral.service';
import { CountryService } from './country/services/country.service';
import { GenderService } from './gender/services/gender.service';
import { VisitTypeService } from './visit-type/services/visit-type.service';
import { ReligionService } from './religion/services/religion.service';
import { TitleService } from './title/services/title.service';
import { IdTypeService } from './id-type/services/id-type.service';
import { OccupationService } from './occupation/services/occupation.service';
import { IncomeService } from './income/services/income.service';
import { MaritalStatusService } from './marital-status/services/marital-status.service';
import { EducationService } from './education/services/education.service';
import { RelationshipService } from './relationship/services/relationship.service';
import { CityService } from './city/services/city.service';
import { StateService } from './state/services/state.service';
import { DiagItemTypeService } from './diag-item-type/services/diag-item-type.service';
import { DeliveryTypeService } from './delivery-type/services/delivery-type.service';

import { EthnicGroupListingComponent } from './ethnic-group/ethnic-group-listing/ethnic-group-listing.component';
import { EthnicGroupCreateComponent } from './ethnic-group/ethnic-group-create/ethnic-group-create.component';
import { DischargeOfficerListingComponent } from './discharge-officer/discharge-officer-listing/discharge-officer-listing.component';
import { DischargeOfficerCreateComponent } from './discharge-officer/discharge-officer-create/discharge-officer-create.component';
import { PersonCategoryCodeListingComponent } from './person-category-code/person-category-code-listing/person-category-code-listing.component';
import { PersonCategoryCodeCreateComponent } from './person-category-code/person-category-code-create/person-category-code-create.component';
import { AdmStatusListingComponent } from './adm-status/adm-status-listing/adm-status-listing.component';
import { AdmStatusCreateComponent } from './adm-status/adm-status-create/adm-status-create.component';
import { DischargeTypeListingComponent } from './discharge-type/discharge-type-listing/discharge-type-listing.component';
import { DischargeTypeCreateComponent } from './discharge-type/discharge-type-create/discharge-type-create.component';
import { SpecialityListingComponent } from './speciality/speciality-listing/speciality-listing.component';
import { SpecialityCreateComponent } from './speciality/speciality-create/speciality-create.component';
import { WardClassCreateComponent } from './ward-class/ward-class-create/ward-class-create.component';
import { WardClassListingComponent } from './ward-class/ward-class-listing/ward-class-listing.component';
import { ReferralListingComponent } from './referral/referral-listing/referral-listing.component';
import { ReferralCreateComponent } from './referral/referral-create/referral-create.component';
import { CountryCreateComponent } from './country/country-create/country-create.component';
import { CountryListingComponent } from './country/country-listing/country-listing.component';
import { GenderCreateComponent } from './gender/gender-create/gender-create.component';
import { GenderListingComponent } from './gender/gender-listing/gender-listing.component';
import { VisitTypeListingComponent } from './visit-type/visit-type-listing/visit-type-listing.component';
import { VisitTypeCreateComponent } from './visit-type/visit-type-create/visit-type-create.component';
import { ReligionListingComponent } from './religion/religion-listing/religion-listing.component';
import { ReligionCreateComponent } from './religion/religion-create/religion-create.component';
import { TitleListingComponent } from './title/title-listing/title-listing.component';
import { TitleCreateComponent } from './title/title-create/title-create.component';
import { IdTypeListingComponent } from './id-type/id-type-listing/id-type-listing.component';
import { IdTypeCreateComponent } from './id-type/id-type-create/id-type-create.component';
import { OccupationListingComponent } from './occupation/occupation-listing/occupation-listing.component';
import { OccupationCreateComponent } from './occupation/occupation-create/occupation-create.component';
import { IncomeListingComponent } from './income/income-listing/income-listing.component';
import { IncomeCreateComponent } from './income/income-create/income-create.component';
import { MaritalStatusListingComponent } from './marital-status/marital-status-listing/marital-status-listing.component';
import { MaritalStatusCreateComponent } from './marital-status/marital-status-create/marital-status-create.component';
import { EducationListingComponent } from './education/education-listing/education-listing.component';
import { EducationCreateComponent } from './education/education-create/education-create.component';
import { RelationshipListingComponent } from './relationship/relationship-listing/relationship-listing.component';
import { RelationshipCreateComponent } from './relationship/relationship-create/relationship-create.component';
import { CityListingComponent } from './city/city-listing/city-listing.component';
import { CityCreateComponent } from './city/city-create/city-create.component';
import { StateListingComponent } from './state/state-listing/state-listing.component';
import { StateCreateComponent } from './state/state-create/state-create.component';
import { DiagItemTypeListingComponent } from './diag-item-type/diag-item-type-listing/diag-item-type-listing.component';
import { DiagItemTypeCreateComponent } from './diag-item-type/diag-item-type-create/diag-item-type-create.component';
import { DeliveryTypeListingComponent } from './delivery-type/delivery-type-listing/delivery-type-listing.component';
import { DeliveryTypeCreateComponent } from './delivery-type/delivery-type-create/delivery-type-create.component';

@NgModule({
  declarations: [
    UserListingComponent,
    UserCreateComponent,
    EthnicGroupListingComponent,
    EthnicGroupCreateComponent,
    DischargeOfficerListingComponent,
    DischargeOfficerCreateComponent,
    PersonCategoryCodeListingComponent,
    PersonCategoryCodeCreateComponent,
    AdmStatusListingComponent,
    AdmStatusCreateComponent,
    DischargeTypeListingComponent,
    DischargeTypeCreateComponent,
    SpecialityListingComponent,
    SpecialityCreateComponent,
    WardClassCreateComponent,
    WardClassListingComponent,
    ReferralListingComponent,
    ReferralCreateComponent,
    CountryCreateComponent,
    CountryListingComponent,
    GenderCreateComponent,
    GenderListingComponent,
    VisitTypeListingComponent,
    VisitTypeCreateComponent,
    ReligionListingComponent,
    ReligionCreateComponent,
    TitleListingComponent,
    TitleCreateComponent,
    IdTypeListingComponent,
    IdTypeCreateComponent,
    OccupationListingComponent,
    OccupationCreateComponent,
    IncomeListingComponent,
    IncomeCreateComponent,
    MaritalStatusListingComponent,
    MaritalStatusCreateComponent,
    EducationListingComponent,
    EducationCreateComponent,
    RelationshipListingComponent,
    RelationshipCreateComponent,
    CityListingComponent,
    CityCreateComponent,
    StateListingComponent,
    StateCreateComponent,
    DiagItemTypeListingComponent,
    DiagItemTypeCreateComponent,
    DeliveryTypeListingComponent,
    DeliveryTypeCreateComponent
  ],
  imports: [
    CommonModule,
    SetupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    NgSelectModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [
    UserService,
    EthnicGroupService,
    DischargeOfficerService,
    PersonCategoryCodeService,
    AdmStatusService,
    DischargeTypeService,
    SpecialityService,
    WardClassService,
    ReferralService,
    CountryService,
    GenderService,
    VisitTypeService,
    ReligionService,
    TitleService,
    IdTypeService,
    OccupationService,
    IncomeService,
    MaritalStatusService,
    EducationService,
    RelationshipService,
    CityService,
    StateService,
    DiagItemTypeService,
    DeliveryTypeService
  ]
})
export class SetupModule { }
