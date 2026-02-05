import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { MaritalStatusService } from 'src/app/setup/marital-status/services/marital-status.service';
import { GeneralForm } from 'src/app/shared/classes/general.form';

@Component({
  standalone: false,
  selector: 'app-marital-status-create',
  templateUrl: '../../shared/create.html',
  styleUrls: ['./marital-status-create.component.scss']
})
export class MaritalStatusCreateComponent extends GeneralForm implements OnInit {

  title = 'Marital Status';
  isLoading = false;
  id!: any;
  data: any = { id: '' };
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private mService: MaritalStatusService,
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

    this.mService.edit(this.id).subscribe({
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
    this.router.navigate(['/main/setup/marital-status/list']);
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
      this.mService.create(o).subscribe({
        next: (res: any) => {
          this.toastr.success('New Marital Status successfully created');
          this.mform.reset();
          // this.router.navigate([`/ams/setup/state/edit/${res.id}`]);
        }
      });
    }

    else {
      this.mService.update(this.data.id, o).subscribe({
        next: (res: any) => {
          this.toastr.success('Marital Status successfully updated');
        }});
    }
  }
}
