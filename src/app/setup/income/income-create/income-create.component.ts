import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { IncomeService } from 'src/app/setup/income/services/income.service';
import { GeneralForm } from 'src/app/shared/classes/general.form';

@Component({
  standalone: false,
  selector: 'app-income-create',
  templateUrl: '../../shared/create.html',
  styleUrls: ['./income-create.component.scss']
})
export class IncomeCreateComponent extends GeneralForm implements OnInit {

  title = 'Income';
  isLoading = false;
  id!: any;
  data: any = { id: '' };
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private iService: IncomeService,
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

    this.iService.edit(this.id).subscribe({
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
    this.router.navigate(['/main/setup/income/list']);
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
      this.iService.create(o).subscribe({
        next: (res: any) => {
          this.toastr.success('New Income successfully created');
          this.mform.reset();
          // this.router.navigate([`/ams/setup/state/edit/${res.id}`]);
        }
      });
    }

    else {
      this.iService.update(this.data.id, o).subscribe({
        next: (res: any) => {
          this.toastr.success('Income successfully updated');
        }
      });
    }
  }
}
