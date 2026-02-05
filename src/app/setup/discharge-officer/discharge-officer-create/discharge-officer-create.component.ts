import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { DischargeOfficerService } from 'src/app/setup/discharge-officer/services/discharge-officer.service';
import { GeneralForm } from 'src/app/shared/classes/general.form';

@Component({
  standalone: false,
  selector: 'app-discharge-officer-create',
  templateUrl: '../../shared/create.html',
  styleUrls: ['./discharge-officer-create.component.scss']
})
export class DischargeOfficerCreateComponent extends GeneralForm implements OnInit {

  title = 'Discharge Officer Type';
  isLoading = false;
  id!: any;
  data: any = { id: '' };
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private doService: DischargeOfficerService,
    private toastr: ToastrService
  ) {
    super();
    this.createForm();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id != null) {
        this.isEdit = true;
      }

      this.load();
    });
  }

  createForm() {
    this.mform = this.fb.group({
      code: ['', [Validators.required, Validators.maxLength(30)]],
      desc: ['', [Validators.required, Validators.maxLength(300)]],
      ref: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  setForm() {
    const o = this.data;
    this.mform.patchValue({
      code: o.code,
      desc: o.desc,
      ref: o.ref
    });
  }

  load() {
    this.isLoading = true;
    if (this.id == null || this.id == undefined) {
      this.isLoading = false;
      return;
    }

    this.doService.edit(this.id).subscribe({
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
    this.router.navigate(['/main/setup/discharge-officer/list']);
  }

  onSubmit() {
    if (this.mform.invalid) {
      this.mform.markAllAsTouched();
      return;
    }
    
    const f = this.mform.value;
    const o: any = {
      code: f.code,
      desc: f.desc,
      ref: f.ref
    }

    if (!this.isEdit) {
      this.doService.create(o).subscribe({
        next: (res: any) => {
          this.toastr.success('New Discharge Officer successfully created');
          this.mform.reset();
          // this.router.navigate([`/ams/setup/state/edit/${res.id}`]);
        }
      });
    }

    else {
      this.doService.update(this.data.id, o).subscribe({
        next: (res: any) => {
          this.toastr.success('Discharge Officer successfully updated');
        }
      });
    }
  }
}
