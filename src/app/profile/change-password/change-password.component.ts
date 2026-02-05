import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { ProfileService } from 'src/app/profile/services/profile.service';
import { GeneralForm } from 'src/app/shared/classes/general.form';

@Component({
  standalone: false,
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent extends GeneralForm implements OnInit {

  isLoading = false;
  viewpwd = false;
  viewcfmpwd = false;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private toastr: ToastrService
  ) {
    super();
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.mform = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    },
    {
      validator: CustomValidator.passwordMatch
    });
  }

  onSubmit() {
    if (this.mform.invalid) {
      this.mform.markAllAsTouched();
      return;
    }

    const f = this.mform.value;
    const o: any = {
      password: f.password,
      confirm_password: f.confirm_password
    }
    this.profileService.changePassword(o).subscribe({
      next: (res: any) => {
        this.toastr.success('Password successfully updated');
      }
    });
  }

  onTogglePassword() {
    this.viewpwd = !this.viewpwd;
  }

  onToggleConfirmPassword() {
    this.viewcfmpwd = !this.viewcfmpwd;
  }
}

class CustomValidator {

  public static passwordMatch(control: AbstractControl) {
    const a = control.get('password')?.value;
    const b = control.get('confirm_password')?.value;
    if (a !== b) {
      control.get('confirm_password')?.setErrors({ wrongpwd: true });
    }
  }
}
