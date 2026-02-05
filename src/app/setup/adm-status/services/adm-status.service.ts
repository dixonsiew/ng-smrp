import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root'
})
export class AdmStatusService {

  private baseUrl = '';

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {
    this.baseUrl = this.configService.config.baseUrl;
  }

  list(page: any, limit: any, sort: any, dir: any) {
    let prm: HttpParams = new HttpParams()
      .set('_page', page)
      .set('_limit', limit);
    if (sort !== '') {
      if (dir === '') {
        dir = 'asc';
      }

      prm = prm.append('sort', `${sort}:${dir}`);
    }
    return this.http.get(`${this.baseUrl}/api/adm-statuses`, { params: prm, observe: 'response' });
  }

  search(page: any, limit: any, sort: any, dir: any, keyword: any) {
    let prm: HttpParams = new HttpParams()
      .set('_page', page)
      .set('_limit', limit);
    if (sort !== '') {
      if (dir === '') {
        dir = 'asc';
      }

      prm = prm.append('sort', `${sort}:${dir}`);
    }
    return this.http.post(`${this.baseUrl}/api/adm-statuses`, { keyword: keyword }, { params: prm, observe: 'response' });
  }

  create(o: any) {
    return this.http.post(`${this.baseUrl}/api/adm-status`, o);
  }

  edit(id: any) {
    return this.http.get(`${this.baseUrl}/api/adm-status/${id}`);
  }

  update(id: any, o: any) {
    return this.http.put(`${this.baseUrl}/api/adm-status/${id}`, o);
  }

  remove(id: any) {
    return this.http.delete(`${this.baseUrl}/api/adm-status/${id}`);
  }
}
