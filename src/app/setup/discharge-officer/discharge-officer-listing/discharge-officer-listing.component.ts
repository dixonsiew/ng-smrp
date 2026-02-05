import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';
import { DischargeOfficerService } from 'src/app/setup/discharge-officer/services/discharge-officer.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { AppConstant } from 'src/app/shared/constants/app.constant';
import { Helper } from 'src/app/shared/utils/helper';

@Component({
  standalone: false,
  selector: 'app-discharge-officer-listing',
  templateUrl: '../../shared/listing.html',
  styleUrls: ['./discharge-officer-listing.component.scss']
})
export class DischargeOfficerListingComponent implements OnInit, OnDestroy {

  title = 'Discharge Officer Type';
  isLoading = false;
  list: any[] = [];
  totalCount = 0;
  totalPage = 0;
  pageSize = AppConstant.PAGE_SIZE;
  page = 1;
  search = '';
  sort = 'code';
  sortDir = 'asc';
  sx = 0;
  sy = 0;
  bsModalRef!: BsModalRef;
  subs: Subscription;

  readonly uiState = 'setup.discharge-officer.discharge-officer-listing';

  readonly isEmpty = Helper.isEmpty;
  readonly PAGE_SIZE = AppConstant.PAGE_SIZE;
  readonly MAX_PAGE_NUMBERS = AppConstant.MAX_PAGE_NUMBERS;

  constructor(
    private router: Router,
    private doService: DischargeOfficerService,
    private msService: MessageService,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) {
    this.subs = this.msService.get().subscribe({
      next: (res: any) => {
        if (res.name === this.uiState) {
          const o = res.data;
          this.page = o.page;
          this.sort = o.sort;
          this.sortDir = o.dir;
          this.search = o.search;
          this.sx = o.sx;
          this.sy = o.sy;
        }
      }
    });
  }

  ngOnInit() {
    this.load();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  load() {
    if (this.search !== '') {
      this.onSearch(this.search);
      return;
    }
    
    this.isLoading = true;
    this.doService.list(this.page, AppConstant.PAGE_SIZE, this.sort, this.sortDir).subscribe({
      next: (res: any) => {
        this.list = res.body;
        const headers = res.headers;
        this.totalCount = Number(headers.get(AppConstant.HTTP_HEADER.X_TOTAL_COUNT));
        this.totalPage = Number(headers.get(AppConstant.HTTP_HEADER.X_TOTAL_PAGE));
        this.isLoading = false;
        setTimeout(() => {
          window.scrollTo(this.sx, this.sy);
        }, 200);
      },
      error: (error) => {
        
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  onSearch(s: string) {
    this.search = s;
    this.page = 1;
    this.isLoading = true;
    this.doService.search(this.page, AppConstant.PAGE_SIZE, this.sort, this.sortDir, s).subscribe({
      next: (res: any) => {
        this.list = res.body;
        const headers = res.headers;
        this.totalCount = Number(headers.get(AppConstant.HTTP_HEADER.X_TOTAL_COUNT));
        this.totalPage = Number(headers.get(AppConstant.HTTP_HEADER.X_TOTAL_PAGE));
        this.isLoading = false;
        setTimeout(() => {
          window.scrollTo(this.sx, this.sy);
        }, 200);
      },
      error: (error) => {

      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  pageChanged(event: any) {
    this.page = event.page;
    this.load();
  }

  onSortBy(e: any) {
    if (e.sort === '' && e.dir === 'asc') {
      this.sort = 'code';
      this.sortDir = 'asc';
    }

    else {
      this.sort = e.sort;
      this.sortDir = e.dir;
    }

    this.load();
  }

  goto(s: string) {
    this.msService.send(this.uiState, {
      page: this.page,
      sort: this.sort,
      dir: this.sortDir,
      search: this.search,
      sx: window.scrollX,
      sy: window.scrollY
    });
    this.router.navigate([`/main/setup/discharge-officer/${s}`]);
  }

  onEdit(o: any) {
    let s = `edit/${o.id}`;
    this.goto(s);
  }

  onDelete(o: any) {
    const initialState = {
      title: 'Delete Discharge Officer',
      message: `Are you sure to delete this Discharge Officer ${o.code} ?`
    };
    this.bsModalRef = this.modalService.show(ConfirmModalComponent, { class: 'modal-dialog-centered', initialState });
    this.bsModalRef.content.onClose.subscribe((res: any) => {
      if (res.result === true) {
        this.doService.remove(o.id).subscribe({
          next: (res: any) => {
            this.toastr.success('Discharge Officer successfully deleted');
            this.load();
          }
        });
      }
    });
  }
}
