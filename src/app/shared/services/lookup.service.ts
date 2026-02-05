import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  private baseUrl = '';

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {
    this.baseUrl = this.configService.config.baseUrl;
  }

  listGroup() {
    return this.http.get(`${this.baseUrl}/api/lookup/groups`);
  }

  listEthnicGroup() {
    return this.http.get(`${this.baseUrl}/api/lookup/ethnic-groups`);
  }

  listPersonCategoryCode() {
    return this.http.get(`${this.baseUrl}/api/lookup/person-category-codes`);
  }

  listSpeciality() {
    return this.http.get(`${this.baseUrl}/api/lookup/specialities`);
  }

  listWardClass() {
    return this.http.get(`${this.baseUrl}/api/lookup/ward-classes`);
  }

  listReferral() {
    return this.http.get(`${this.baseUrl}/api/lookup/referrals`);
  }

  listCountry() {
    return this.http.get(`${this.baseUrl}/api/lookup/countries`);
  }

  listGender() {
    return this.http.get(`${this.baseUrl}/api/lookup/genders`);
  }

  listReligion() {
    return this.http.get(`${this.baseUrl}/api/lookup/religions`);
  }

  listTitle() {
    return this.http.get(`${this.baseUrl}/api/lookup/titles`);
  }

  listIDType() {
    return this.http.get(`${this.baseUrl}/api/lookup/id-types`);
  }

  listMaritalStatus() {
    return this.http.get(`${this.baseUrl}/api/lookup/marital-statuses`);
  }

  listRelationship() {
    return this.http.get(`${this.baseUrl}/api/lookup/relationships`);
  }

  listCity() {
    return this.http.get(`${this.baseUrl}/api/lookup/cities`);
  }

  listState() {
    return this.http.get(`${this.baseUrl}/api/lookup/states`);
  }

  listAdmStatus() {
    return this.http.get(`${this.baseUrl}/api/lookup/adm-statuses`);
  }

  listOccupation() {
    return this.http.get(`${this.baseUrl}/api/lookup/occupations`);
  }

  listVisitTypes() {
    return this.http.get(`${this.baseUrl}/api/lookup/visit-types`);
  }

  listDiagItemTypes() {
    return this.http.get(`${this.baseUrl}/api/lookup/diag-item-types`);
  }

  listDeliveryTypes() {
    return this.http.get(`${this.baseUrl}/api/lookup/delivery-types`);
  }
}
