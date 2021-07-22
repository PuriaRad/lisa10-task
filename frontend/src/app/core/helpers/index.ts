import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogInterceptor } from './log.interceptor';
import { LoaderInterceptor } from './loader.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
];
