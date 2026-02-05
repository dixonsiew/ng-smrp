import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as fx from 'file-saver';

import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';
import { ReportService } from 'src/app/report/master-pd102/services/report.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { AppConstant } from 'src/app/shared/constants/app.constant';
import { Helper } from 'src/app/shared/utils/helper';

@Component({
  standalone: false,
  selector: 'app-master-pd102-listing',
  templateUrl: '../../master-pd101/master-pd101-listing/master-pd101-listing.component.html',
  styleUrls: ['./master-pd102-listing.component.scss']
})
export class MasterPd102ListingComponent implements OnInit, OnDestroy {

  title = 'PD102';
  placeholderdateFrom = 'Birth Delivery From Date';
  placeholderdateTo = 'Birth Delivery To Date';
  isLoading = false;
  list: any[] = [];
  collist: any[] = [];
  columnmaps: any[] = [];
  totalCount = 0;
  totalPage = 0;
  pageSize = AppConstant.PAGE_SIZE;
  page = 1;
  dateFrom: any = null;
  dateTo: any = null;
  sx = 0;
  sy = 0;
  bsModalRef!: BsModalRef;
  subs: Subscription;

  readonly uiState = 'report.master-pd102.master-pd102-listing';

  readonly isEmpty = Helper.isEmpty;
  readonly PAGE_SIZE = AppConstant.PAGE_SIZE;
  readonly MAX_PAGE_NUMBERS = AppConstant.MAX_PAGE_NUMBERS;

  constructor(
    private router: Router,
    private vService: ReportService,
    private msService: MessageService,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) {
    this.subs = this.msService.get().subscribe({
      next: (res: any) => {
        if (res.name === this.uiState) {
          const o = res.data;
          this.page = o.page;
          this.sx = o.sx;
          this.sy = o.sy;
        }
      }
    });
  }

  ngOnInit() {
    this.loadPrevious();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  load() {
    this.page = 1;
    this.isLoading = true;
    const o = {
      _page: this.page,
      _limit: AppConstant.PAGE_SIZE,
      vt: 0,
      datefrom: Helper.toDateStr(this.dateFrom),
      dateto: Helper.toDateStr(this.dateTo),
    };
    this.vService.list(o).subscribe({
      next: (res: any) => {
        this.list = res.data;
        this.collist = res.headers;
        this.columnmaps = res.columnmaps;
        this.totalCount = res.total_count;
        this.totalPage = res.total_page;
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

  loadPrevious() {
    this.isLoading = true;
    this.vService.listPrevious(this.page, AppConstant.PAGE_SIZE, '', '',
      Helper.toDateStr(this.dateFrom),
      Helper.toDateStr(this.dateTo)).subscribe({
        next: (res: any) => {
          this.list = res.data;
          this.collist = res.headers;
          this.columnmaps = res.columnmaps;
          this.totalCount = res.total_count;
          this.totalPage = res.total_page;
          this.dateFrom = res.datefrom === 'null' ? new Date() : res.datefrom;
          this.dateTo = res.dateto === 'null' ? new Date() : res.dateto;
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

  onExportXlsx() {
    this.vService.exportXlsx(
      Helper.toDateStr(this.dateFrom),
      Helper.toDateStr(this.dateTo)).subscribe({
        next: (res: any) => {
          fx.saveAs(res.body, res.headers.get('filename'));
        },
        error: (error) => {

        }
      });
  }

  onExport() {
    this.vService.exportJSON(
      Helper.toDateStr(this.dateFrom),
      Helper.toDateStr(this.dateTo)).subscribe({
        next: (res: any) => {
          fx.saveAs(res.body, res.headers.get('filename'));
        },
        error: (error) => {

        }
      });
  }

  onApplyFilter() {
    const initialState = {
      title: 'Apply',
      message: `All the data from the listing will be removed.<br> Do you want to continue ?`
    };
    this.bsModalRef = this.modalService.show(ConfirmModalComponent, { class: 'modal-dialog-centered', initialState });
    this.bsModalRef.content.onClose.subscribe((res: any) => {
      if (res.result === true) {
        this.load();
      }
    });
  }

  onClearFilter() {
    this.dateFrom = null;
    this.dateTo = null;
  }

  onToday() {
    this.dateFrom = new Date();
    this.dateTo = this.dateFrom;
    return false;
  }

  onYesterday() {
    let date = new Date();
    date.setDate(date.getDate() - 1);
    this.dateFrom = date;
    this.dateTo = date;
    return false;
  }

  pageChanged(event: any) {
    this.page = event.page;
    this.loadPrevious();
  }

  goto(s: string) {
    this.msService.send(this.uiState, {
      page: this.page,
      sx: window.scrollX,
      sy: window.scrollY
    });
    this.router.navigate([`/main/report/master-pd102/${s}`]);
  }

  onEdit(o: any) {
    let s = `form/${o._id}`;
    this.goto(s);
  }
}
