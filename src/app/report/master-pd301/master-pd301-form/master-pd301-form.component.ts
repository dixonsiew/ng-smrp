import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import { LookupService } from 'src/app/shared/services/lookup.service';
import { ReportService } from 'src/app/report/master-pd301/services/report.service';
import { GeneralForm } from 'src/app/shared/classes/general.form';
import { Helper } from 'src/app/shared/utils/helper';

@Component({
  standalone: false,
  selector: 'app-master-pd301-form',
  templateUrl: './master-pd301-form.component.html',
  styleUrls: ['./master-pd301-form.component.scss']
})
export class MasterPd301FormComponent extends GeneralForm implements OnInit {

  title = 'PD301';
  isLoading = false;
  id!: any;
  data: any = { _id: '' };
  ethnicgroupList = [];
  personcategorycodeList = [];
  specialityList = [];
  wardclsList = [];
  referralList = [];
  countryList = [];
  genderList = [];
  religionList = [];
  titleList = [];
  idtypeList = [];
  maritalstatusList = [];
  relationshipList = [];
  cityList = [];
  stateList = [];
  admstatusList = [];
  occupationList = [];
  visittypeList = [];
  diagitemtypeList = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private lookupService: LookupService,
    private vService: ReportService,
    private toastr: ToastrService
  ) {
    super();
    this.createForm();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.load();
    });
  }

  createForm() {
    this.mform = this.fb.group({
      ACCOUNT_NO: [''],
      ADMISSION_DATE: [''],
      ADMISSION_STATUS: [''],
      ADMISSION_TIME: [''],
      CHARGE_CATEGORY_CODE: [''],

      CITYCODE: [''],
      CLUSTERFACILITYRN: [''],
      COUNTRY_OF_BIRTH: [''],
      DESCRIPTION: [''],
      DIAGNOSIS_DESC: [''],

      DISCHARGEOFFICERS: [''],
      DISCHARGE_DATE: [''],
      DISCHARGE_DOCTOR: [''],
      DISCHARGE_REASON: [''],
      DISCHARGE_TIME: [''],

      DOB: [''],
      DOCUMENT_NUMBER: [''],
      DOCUMENT_TYPE: [''],
      ETHNIC_GROUP: [''],
      GENDER: [''],

      HEIGHT: [''],
      HOME_ADDRESS: [''],
      HOME_PHONE: [''],
      ICD10_CODE: [''],
      ICD10_DESCRIPTION: [''],

      ISPOLICECASE: [''],
      LETTEROFGUARANTEE: [''],
      MARITAL_STATUS: [''],
      MCR_NO: [''],
      MOBILE_PHONE: [''],

      NATIONALITY: [''],
      NOK_HOME_ADDRESS: [''],
      NOK_HOME_PHONE: [''],
      NOK_ID: [''],
      NOK_ID_TYPE: [''],

      NOK_MOBILE_PHONE: [''],
      NOK_TITLE: [''],
      OCCUPATION: [''],
      OCITY: [''],
      PATIENT_NAME: [''],

      PATIENT_NOK_NAME: [''],
      PAYMENT_CLASS_CODE: [''],
      POSTCODE: [''],
      PRIMARY_SPECIALTY: [''],
      PRN: [''],

      REFERRAL: [''],
      REFFOREIGNRCOUNTRYCODE: [''],
      REFPERSONCATEGORYCODE: [''],
      REGISTRATION_DATE: [''],
      REGISTRATION_TIME: [''],

      RELATION_DESCRIPTION: [''],
      RELIGION: [''],
      STREET1: [''],
      STREET2: [''],
      TITLE: [''],

      VISIT_TYPE: [''],
      WARD_NO: [''],
      WEIGHT: [''],

      NOK_CITYCODE: [''],
      NOK_NATIONALITY: [''],
      NOK_OCITY: [''],
      NOK_POSTCODE: [''],
      NOK_STREET1: [''],
      NOK_STREET2: ['']
    });
  }

  setForm() {
    const o = this.data;
    this.mform.patchValue(o);
  }

  load() {
    this.isLoading = true;
    let q1 = this.lookupService.listEthnicGroup();
    let q2 = this.lookupService.listPersonCategoryCode();
    let q3 = this.lookupService.listSpeciality();
    let q4 = this.lookupService.listWardClass();
    let q5 = this.lookupService.listReferral();
    let q6 = this.lookupService.listCountry();
    let q7 = this.lookupService.listGender();
    let q8 = this.lookupService.listReligion();
    let q9 = this.lookupService.listTitle();
    let q10 = this.lookupService.listIDType();
    let q11 = this.lookupService.listMaritalStatus();
    let q12 = this.lookupService.listRelationship();
    let q13 = this.lookupService.listCity();
    let q14 = this.lookupService.listState();
    let q15 = this.lookupService.listAdmStatus();
    let q16 = this.lookupService.listOccupation();
    let q17 = this.lookupService.listVisitTypes();
    let q18 = this.lookupService.listDiagItemTypes();

    forkJoin([q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18]).subscribe({
      next: (res: any) => {
        this.ethnicgroupList = res[0];
        this.personcategorycodeList = res[1];
        this.specialityList = res[2];
        this.wardclsList = res[3];
        this.referralList = res[4];
        this.countryList = res[5];
        this.genderList = res[6];
        this.religionList = res[7];
        this.titleList = res[8];
        this.idtypeList = res[9];
        this.maritalstatusList = res[10];
        this.relationshipList = res[11];
        this.cityList = res[12];
        this.stateList = res[13];
        this.admstatusList = res[14];
        this.occupationList = res[15];
        this.visittypeList = res[16];
        this.diagitemtypeList = res[17];
        this.loadDetails();
      },
      error: (error) => {
        this.isLoading = false;
      }
    });
  }

  loadDetails() {
    if (this.id == null || this.id == undefined) {
      this.isLoading = false;
      return;
    }

    this.vService.edit(this.id).subscribe({
      next: (res: any) => {
        this.data = res;
        this.setForm();
      },
      error: (error) => {

      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  onBack() {
    this.router.navigate(['/main/report/master-pd301/list']);
  }

  onSubmit() {
    if (this.mform.invalid) {
      this.mform.markAllAsTouched();
      return;
    }
    
    const f = this.mform.value;
    const o: any = f;
    o.ADMISSION_DATE = Helper.toDateStr(f.ADMISSION_DATE);
    o.DISCHARGE_DATE = Helper.toDateStr(f.DISCHARGE_DATE);
    o.REGISTRATION_DATE = Helper.toDateStr(f.REGISTRATION_DATE);
    o.DOB = Helper.toDateStr(f.DOB);

    this.vService.update(this.data._id, o).subscribe({
      next: (res: any) => {
        this.toastr.success('Data successfully updated');
      }
    });
  }
}
