import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = '';
  private tokenUrl = '';
  private refreshTokenUrl = '';
  private revokeTokenUrl = '';
  private token!: string;

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {
    this.baseUrl = this.configService.config.baseUrl;
    this.tokenUrl = `${this.baseUrl}/o/token`;
    this.refreshTokenUrl = `${this.baseUrl}/o/refresh-token`;
    this.revokeTokenUrl = `${this.baseUrl}/o/revoke_token/`;
  }

  getToken(): string | null {
    return localStorage.getItem('access-token') || '';
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refresh-token');
  }

  refreshToken(): Observable<any> {
    let refresh_token = this.getRefreshToken();

    if (!refresh_token) {
      this.logout();
      return of(null);
    }

    const body = {
      refresh_token: refresh_token
    };
    return this.http.post(this.refreshTokenUrl, body).pipe(
      map((res: any) => this.extractRefreshToken(res)),
      catchError(e => this.handleError(e))
    );
  }

  refreshToken000(): Observable<string> {
    let token = this.getToken();

    if (!token) {
      this.logout();
      return of('');
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'isRefreshToken': 'true'
      })
    };
    return this.http.get(this.refreshTokenUrl, httpOptions).pipe(
      map((res: any) => this.extractToken(res)),
      catchError(e => this.handleError(e))
    );
  }

  authenticate(username: string, password: string): Observable<string> {
    const body = {
      username, password
    }
    return this.http.post(this.tokenUrl, body).pipe(
      map((res: any) => this.extractToken(res)),
      catchError(e => this.handleError(e))
    );
  }

  logout() {
    this.clear();
  }

  handleError(e: any) {
    return throwError(() => e);
  }

  hasValidToken(): boolean {
    return !!this.getToken();
  }

  clear() {
    localStorage.clear();
  }

  extractRefreshToken(res: any): string {
    localStorage.setItem('access-token', res.token);
    this.token = res.token;
    return this.token;
  }

  extractToken(res: any): string {
    localStorage.setItem('access-token', res.token);
    this.token = res.token;
    return this.token;
  }

  saveUser(res: any) {
    const user = Object.assign(new User(), res);
    localStorage.setItem('user', JSON.stringify(res));
    localStorage.setItem('user-group', JSON.stringify(user.roles));
    return user;
  }

  getUserDetails() {
    return this.http.get(`${this.baseUrl}/api/current-user`);
  }

  loadUser(): User {
    const o = localStorage.getItem('user');
    let user = null;
    if (o != null) {
      user = JSON.parse(o || '{}');
    }

    return user;
  }

  hasRole(role: any) {
    const group = localStorage.getItem('user-group');
    if (group == null) {
      return false;
    }

    const roles: any[] = JSON.parse(group || '{}');
    const b = roles.some((x, i) => {
      return x.name === role;
    });
    
    return b;
  }
}
