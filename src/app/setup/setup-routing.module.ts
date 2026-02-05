import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListingComponent } from './user/user-listing/user-listing.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
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
import { WardClassListingComponent } from './ward-class/ward-class-listing/ward-class-listing.component';
import { WardClassCreateComponent } from './ward-class/ward-class-create/ward-class-create.component';
import { ReferralListingComponent } from './referral/referral-listing/referral-listing.component';
import { ReferralCreateComponent } from './referral/referral-create/referral-create.component';
import { CountryListingComponent } from './country/country-listing/country-listing.component';
import { CountryCreateComponent } from './country/country-create/country-create.component';
import { GenderListingComponent } from './gender/gender-listing/gender-listing.component';
import { GenderCreateComponent } from './gender/gender-create/gender-create.component';
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
import { IncomeCreateComponent } from './income/income-create/income-create.component';
import { IncomeListingComponent } from './income/income-listing/income-listing.component';
import { MaritalStatusCreateComponent } from './marital-status/marital-status-create/marital-status-create.component';
import { MaritalStatusListingComponent } from './marital-status/marital-status-listing/marital-status-listing.component';
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


const routes: Routes = [
  {
    path: 'user',
    children: [
      { path: 'list', component: UserListingComponent },
      { path: 'create', component: UserCreateComponent },
      { path: 'edit/:id', component: UserCreateComponent }
    ]
  },

  {
    path: 'ethnic-group',
    children: [
      { path: 'list', component: EthnicGroupListingComponent },
      { path: 'create', component: EthnicGroupCreateComponent },
      { path: 'edit/:id', component: EthnicGroupCreateComponent }
    ]
  },
  {
    path: 'discharge-officer',
    children: [
      { path: 'list', component: DischargeOfficerListingComponent },
      { path: 'create', component: DischargeOfficerCreateComponent },
      { path: 'edit/:id', component: DischargeOfficerCreateComponent }
    ]
  },
  {
    path: 'person-category-code',
    children: [
      { path: 'list', component: PersonCategoryCodeListingComponent },
      { path: 'create', component: PersonCategoryCodeCreateComponent },
      { path: 'edit/:id', component: PersonCategoryCodeCreateComponent }
    ]
  },
  {
    path: 'adm-status',
    children: [
      { path: 'list', component: AdmStatusListingComponent },
      { path: 'create', component: AdmStatusCreateComponent },
      { path: 'edit/:id', component: AdmStatusCreateComponent }
    ]
  },
  {
    path: 'discharge-type',
    children: [
      { path: 'list', component: DischargeTypeListingComponent },
      { path: 'create', component: DischargeTypeCreateComponent },
      { path: 'edit/:id', component: DischargeTypeCreateComponent }
    ]
  },

  {
    path: 'speciality',
    children: [
      { path: 'list', component: SpecialityListingComponent },
      { path: 'create', component: SpecialityCreateComponent },
      { path: 'edit/:id', component: SpecialityCreateComponent }
    ]
  },
  {
    path: 'ward-class',
    children: [
      { path: 'list', component: WardClassListingComponent },
      { path: 'create', component: WardClassCreateComponent },
      { path: 'edit/:id', component: WardClassCreateComponent }
    ]
  },
  {
    path: 'referral',
    children: [
      { path: 'list', component: ReferralListingComponent },
      { path: 'create', component: ReferralCreateComponent },
      { path: 'edit/:id', component: ReferralCreateComponent }
    ]
  },
  {
    path: 'country',
    children: [
      { path: 'list', component: CountryListingComponent },
      { path: 'create', component: CountryCreateComponent },
      { path: 'edit/:id', component: CountryCreateComponent }
    ]
  },
  {
    path: 'gender',
    children: [
      { path: 'list', component: GenderListingComponent },
      { path: 'create', component: GenderCreateComponent },
      { path: 'edit/:id', component: GenderCreateComponent }
    ]
  },

  {
    path: 'visit-type',
    children: [
      { path: 'list', component: VisitTypeListingComponent },
      { path: 'create', component: VisitTypeCreateComponent },
      { path: 'edit/:id', component: VisitTypeCreateComponent }
    ]
  },
  {
    path: 'religion',
    children: [
      { path: 'list', component: ReligionListingComponent },
      { path: 'create', component: ReligionCreateComponent },
      { path: 'edit/:id', component: ReligionCreateComponent }
    ]
  },
  {
    path: 'title',
    children: [
      { path: 'list', component: TitleListingComponent },
      { path: 'create', component: TitleCreateComponent },
      { path: 'edit/:id', component: TitleCreateComponent }
    ]
  },
  {
    path: 'id-type',
    children: [
      { path: 'list', component: IdTypeListingComponent },
      { path: 'create', component: IdTypeCreateComponent },
      { path: 'edit/:id', component: IdTypeCreateComponent }
    ]
  },
  {
    path: 'occupation',
    children: [
      { path: 'list', component: OccupationListingComponent },
      { path: 'create', component: OccupationCreateComponent },
      { path: 'edit/:id', component: OccupationCreateComponent }
    ]
  },

  {
    path: 'income',
    children: [
      { path: 'list', component: IncomeListingComponent },
      { path: 'create', component: IncomeCreateComponent },
      { path: 'edit/:id', component: IncomeCreateComponent }
    ]
  },
  {
    path: 'marital-status',
    children: [
      { path: 'list', component: MaritalStatusListingComponent },
      { path: 'create', component: MaritalStatusCreateComponent },
      { path: 'edit/:id', component: MaritalStatusCreateComponent }
    ]
  },
  {
    path: 'education',
    children: [
      { path: 'list', component: EducationListingComponent },
      { path: 'create', component: EducationCreateComponent },
      { path: 'edit/:id', component: EducationCreateComponent }
    ]
  },
  {
    path: 'relationship',
    children: [
      { path: 'list', component: RelationshipListingComponent },
      { path: 'create', component: RelationshipCreateComponent },
      { path: 'edit/:id', component: RelationshipCreateComponent }
    ]
  },
  {
    path: 'city',
    children: [
      { path: 'list', component: CityListingComponent },
      { path: 'create', component: CityCreateComponent },
      { path: 'edit/:id', component: CityCreateComponent }
    ]
  },

  {
    path: 'state',
    children: [
      { path: 'list', component: StateListingComponent },
      { path: 'create', component: StateCreateComponent },
      { path: 'edit/:id', component: StateCreateComponent }
    ]
  },
  {
    path: 'diag-item-type',
    children: [
      { path: 'list', component: DiagItemTypeListingComponent },
      { path: 'create', component: DiagItemTypeCreateComponent },
      { path: 'edit/:id', component: DiagItemTypeCreateComponent }
    ]
  },
  {
    path: 'delivery-type',
    children: [
      { path: 'list', component: DeliveryTypeListingComponent },
      { path: 'create', component: DeliveryTypeCreateComponent },
      { path: 'edit/:id', component: DeliveryTypeCreateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
