import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root'
})
export class PersonCategoryCodeService {

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
    return this.http.get(`${this.baseUrl}/api/person-category-codes`, { params: prm, observe: 'response' });
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
    return this.http.post(`${this.baseUrl}/api/person-category-codes`, { keyword: keyword }, { params: prm, observe: 'response' });
  }

  create(o: any) {
    return this.http.post(`${this.baseUrl}/api/person-category-code`, o);
  }

  edit(id: any) {
    return this.http.get(`${this.baseUrl}/api/person-category-code/${id}`);
  }

  update(id: any, o: any) {
    return this.http.put(`${this.baseUrl}/api/person-category-code/${id}`, o);
  }

  remove(id: any) {
    return this.http.delete(`${this.baseUrl}/api/person-category-code/${id}`);
  }
}
