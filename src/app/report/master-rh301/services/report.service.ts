import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseUrl = '';
  
    constructor(
      private http: HttpClient,
      private configService: ConfigService
    ) {
      this.baseUrl = this.configService.config.baseUrl;
    }

  list(o: any) {
    return this.http.post(`${this.baseUrl}/api/master-pd301/rpt1`, o);
  }

  listPrevious(page: any, limit: any, sort: any, dir: any, dateFrom: any, dateTo: any) {
    let prm: HttpParams = new HttpParams()
      .set('_page', page)
      .set('_limit', limit)
      .set('vt', '1')
      .set('datefrom', dateFrom)
      .set('dateto', dateTo);
    if (sort !== '') {
      if (dir === '') {
        dir = 'asc';
      }

      prm = prm.append('sort', `${sort}:${dir}`);
    }
    return this.http.get(`${this.baseUrl}/api/master-pd301/rpt1`, { params: prm });
  }

  edit(id: any) {
    let prm: HttpParams = new HttpParams()
      .set('vt', '1');
    return this.http.get(`${this.baseUrl}/api/master-pd301/rpt1/${id}`, { params: prm });
  }

  update(id: any, o: any) {
    let prm: HttpParams = new HttpParams()
      .set('vt', '1');
    return this.http.put(`${this.baseUrl}/api/master-pd301/rpt1/${id}`, o, { params: prm });
  }

  exportJSON(dateFrom: any, dateTo: any) {
    let prm: HttpParams = new HttpParams()
      .set('datefrom', dateFrom)
      .set('dateto', dateTo);
    return this.http.get(`${this.baseUrl}/api/master-pd301/export/rpt2`, { params: prm, responseType: 'blob', observe: 'response' });
  }

  exportXlsx(dateFrom: any, dateTo: any) {
    let prm: HttpParams = new HttpParams()
      .set('vt', '1')
      .set('datefrom', dateFrom)
      .set('dateto', dateTo);
    return this.http.get(`${this.baseUrl}/api/master-pd301/export/rpt1/xlsx`, { params: prm, responseType: 'blob', observe: 'response' });
  }
}
