import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { LookupService } from 'src/app/shared/services/lookup.service';
import { UserService } from 'src/app/setup/user/services/user.service';
import { Helper } from 'src/app/shared/utils/helper';
import { GeneralForm } from 'src/app/shared/classes/general.form';

@Component({
  standalone: false,
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent extends GeneralForm implements OnInit {

  isLoading = false;
  id!: any;
  data: any = { id: '' };
  isEdit = false;
  lockRole = false;
  roleList = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private lookupService: LookupService,
    private userService: UserService,
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
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      //email: ['', [Validators.email]],
      first_name: ['', [Validators.required]],
      last_name: [''],
      role_id: [null, [Validators.required]]
    });
  }

  setForm() {
    const o = this.data;
    this.lockRole = false;
    const roles: any[] = o.roles;
    let role_id = 0;
    if (!Helper.isEmpty(roles)) {
      role_id = roles[0].id;
    }

    this.mform.patchValue({
      username: o.username,
      password: '********',
      first_name: o.first_name,
      last_name: o.last_name,
      role_id: role_id
    });
  }

  load() {
    this.isLoading = true;
    this.lookupService.listGroup().subscribe({
      next: (res: any) => {
        this.roleList = res;
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

    this.userService.edit(this.id).subscribe({
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
    this.router.navigate(['/main/setup/user/list']);
  }

  onSubmit() {
    if (this.mform.invalid) {
      this.mform.markAllAsTouched();
      return;
    }
    
    const f = this.mform.value;
    const o: any = {
      username: f.username,
      password: f.password,
      first_name: f.first_name,
      last_name: f.last_name
    }
    if (!this.lockRole) {
      o['role_id'] = f.role_id;
    }

    if (!this.isEdit) {
      this.userService.create(o).subscribe({
        next: (res: any) => {
          this.toastr.success('New User successfully created');
          this.mform.reset();
          // this.router.navigate([`/ams/setup/state/edit/${res.id}`]);
        }
      });
    }

    else {
      this.userService.update(this.data.id, o).subscribe({
        next: (res: any) => {
          this.toastr.success('User successfully updated');
        }
      });
    }
  }

  get role() {
    const roles: any[] = this.data.roles;
    let s = '';
    if (!Helper.isEmpty(roles)) {
      s = roles[0].name;
    }

    return s;
  }
}
