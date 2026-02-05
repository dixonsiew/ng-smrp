import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface AppConfig {
  baseUrl: string;
  logo: string;
  loginTitle: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private appConfig: AppConfig | null = null;
  private httpClient: HttpClient;

  constructor(private httpBackend: HttpBackend) {
    this.httpClient = new HttpClient(this.httpBackend);
  }

  loadConfig(): Promise<AppConfig> {
    return firstValueFrom(
      this.httpClient.get<AppConfig>('./assets/config.json').pipe(
        tap(config => {
          this.appConfig = config;
        })
      )
    );
  }

  get config(): AppConfig {
    if (!this.appConfig) {
      throw new Error('Config not loaded. Ensure ConfigService.loadConfig() is called before accessing config.');
    }
    return this.appConfig;
  }
}
