import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigService, AppConfig } from 'src/app/config.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { AppConstant } from 'src/app/shared/constants/app.constant';
import { ToastrService } from 'ngx-toastr';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

import { MenuSetup, SubmenuSetup } from './menu-setup';
import { MenuReport, SubmenuReport } from './menu-report';
import { MenuProfile, SubmenuProfile } from './menu-profile';

@Component({
  standalone: false,
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {

  isLoading = false;
  menu: string = '';
  submenu: string = '';
  data: any = {};
  roles = '';
  role = '';
  submenuList: any[] = [];
  submenuSetup: any[] = [];
  selectedValue!: string;
  selectedOption: any;
  subs: Subscription;

  readonly uiState = 'home.index';

  readonly submenuReport = SubmenuReport;
  readonly submenuProfile = SubmenuProfile;
  readonly ROLE = AppConstant.ROLE;

  env!: AppConfig;

  menuToggle = new Map<string, number>();

  constructor(
    private router: Router,
    private configService: ConfigService,
    private authService: AuthService,
    private msService: MessageService,
    private toastr: ToastrService
  ) {
    this.menuToggle.set('report', 0);
    this.menuToggle.set('setup', 0);
    this.menuToggle.set('profile', 0);
    this.env = this.configService.config;
    this.subs = this.msService.get().subscribe({
      next: (res: any) => {
        if (res.name === this.uiState) {
          location.reload();
        }
      }
    });
  }

  ngOnInit() {
    this.submenuSetup = SubmenuSetup.sort((a, b) => {
      var x = a.title.toUpperCase(); // ignore upper and lowercase
      var y = b.title.toUpperCase(); // ignore upper and lowercase
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }

      return 0;
    });
    this.load();
    this.setMenu();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  load() {
    this.isLoading = true;
    this.authService.getUserDetails().subscribe({
      next: (res: any) => {
        this.data = res;
        if (res.roles) {
          const groups: any[] = res.roles;
          const lr = groups.map((x) => x.name);
          this.roles = lr.join(', ');
          this.setRole(groups);
        }
        
        this.authService.saveUser(res);
      },
      error: (error) => {

      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  setRole(groups: any[]) {
    if (this.hasRole(AppConstant.ROLE.ADMIN, groups)) {
      this.role = AppConstant.ROLE.ADMIN;
    }

    else if (this.hasRole(AppConstant.ROLE.USER, groups)) {
      this.role = AppConstant.ROLE.USER;
    }

    if (this.role === AppConstant.ROLE.ADMIN) {
      this.submenuSetup.forEach((k) => {
        this.submenuList.push({
          title: k.title,
          path: k.path,
          id: 'setup'
        });
      });

      this.submenuReport.forEach((k) => {
        this.submenuList.push({
          title: k.title,
          path: k.path,
          id: 'report'
        });
      });

      this.submenuProfile.forEach((k) => {
        this.submenuList.push({
          title: k.title,
          path: k.path,
          id: 'profile'
        });
      });
    }

    else if (this.role === AppConstant.ROLE.USER) {
      this.submenuReport.forEach((k) => {
        this.submenuList.push({
          title: k.title,
          path: k.path,
          id: 'report'
        });
      });

      this.submenuProfile.forEach((k) => {
        this.submenuList.push({
          title: k.title,
          path: k.path,
          id: 'profile'
        });
      });
    }
  }

  hasRole(role: string, groups: any[]) {
    return groups.some((x, i) => {
      return x.name === role;
    });
  }

  onSelect(event: TypeaheadMatch) {
    const x = event.item;
    this.selectedOption = x;
    this.goto(x.id, x.path);
  }

  onSearch() {
    if (this.selectedValue === '') {
      this.selectedOption = null;
    }
    
    if (this.selectedOption) {
      const x = this.selectedOption;
      this.goto(x.id, x.path);
    }
  }

  setMenu() {
    this.setTargetMenu('/main/report', 'report', 'master-pd101/list', MenuReport.master_pd101);
    this.setTargetMenu('/main/report', 'report', 'master-rh101/list', MenuReport.master_rh101);
    this.setTargetMenu('/main/report', 'report', 'master-pd301/list', MenuReport.master_pd301);
    this.setTargetMenu('/main/report', 'report', 'master-rh301/list', MenuReport.master_rh301);
    this.setTargetMenu('/main/report', 'report', 'master-pd102/list', MenuReport.master_pd102);
    this.setTargetMenu('/main/report', 'report', 'master-pd105/list', MenuReport.master_pd105);

    this.setTargetMenu('/main/setup', 'setup', 'ethnic-group/list', MenuSetup.ethnicgroup_list);
    this.setTargetMenu('/main/setup', 'setup', 'discharge-officer/list', MenuSetup.discharge_officer_list);
    this.setTargetMenu('/main/setup', 'setup', 'person-category-code/list', MenuSetup.person_category_code_list);
    this.setTargetMenu('/main/setup', 'setup', 'adm-status/list', MenuSetup.adm_status_list);
    this.setTargetMenu('/main/setup', 'setup', 'discharge-type/list', MenuSetup.discharge_type_list);

    this.setTargetMenu('/main/setup', 'setup', 'speciality/list', MenuSetup.speciality_list);
    this.setTargetMenu('/main/setup', 'setup', 'ward-class/list', MenuSetup.ward_class_list);
    this.setTargetMenu('/main/setup', 'setup', 'referral/list', MenuSetup.referral_list);
    this.setTargetMenu('/main/setup', 'setup', 'country/list', MenuSetup.country_list);
    this.setTargetMenu('/main/setup', 'setup', 'gender/list', MenuSetup.gender_list);

    this.setTargetMenu('/main/setup', 'setup', 'visit-type/list', MenuSetup.visit_type_list);
    this.setTargetMenu('/main/setup', 'setup', 'religion/list', MenuSetup.religion_list);
    this.setTargetMenu('/main/setup', 'setup', 'title/list', MenuSetup.title_list);
    this.setTargetMenu('/main/setup', 'setup', 'id-type/list', MenuSetup.id_type_list);
    this.setTargetMenu('/main/setup', 'setup', 'occupation/list', MenuSetup.occupation_list);

    this.setTargetMenu('/main/setup', 'setup', 'income/list', MenuSetup.income_list);
    this.setTargetMenu('/main/setup', 'setup', 'marital-status/list', MenuSetup.marital_status_list);
    this.setTargetMenu('/main/setup', 'setup', 'education/list', MenuSetup.education_list);
    this.setTargetMenu('/main/setup', 'setup', 'relationship/list', MenuSetup.relationship_list);
    this.setTargetMenu('/main/setup', 'setup', 'city/list', MenuSetup.city_list);

    this.setTargetMenu('/main/setup', 'setup', 'state/list', MenuSetup.state_list);
    this.setTargetMenu('/main/setup', 'setup', 'diag-item-type/list', MenuSetup.diag_item_type_list);
    this.setTargetMenu('/main/setup', 'setup', 'delivery-type/list', MenuSetup.delivery_type_list);
    this.setTargetMenu('/main/setup', 'setup', 'user/list', MenuSetup.user_list);

    this.setTargetMenu('/main/profile', 'profile', 'change-password', MenuProfile.change_password);
  }

  setTargetMenu(url: string, targetMenu: string, targetSubmenu: string, matchList: string[]) {
    if (this.submenu != '') {
      return;
    }

    const x = this.router.url;
    if (x.indexOf(url) >= 0) {
      this.menu = targetMenu;
      this.menuToggle.set(targetMenu, 1);
      const sm = x.replace(`${url}/`, '');

      if (matchList.some((x, i) => {
        return sm.indexOf(x) >= 0;
      })) {
        this.submenu = targetSubmenu;
      }
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    return false;
  }

  onMenu(s: string) {
    let x = this.menuToggle.get(s);
    if (x === 0) {
      this.menuToggle.set(s, 1);
    }

    else if (x === 1) {
      this.menuToggle.set(s, 0);
    }

    return false;
  }

  isOpen(s: string): boolean {
    return this.menuToggle.get(s) === 1;
  }

  goto(s: string, link: string) {
    this.menu = s;
    this.submenu = link;
    this.router.navigate([`/main/${s}/${link}`]);
    return false;
  }
}
