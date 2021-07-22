import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with basic auth credentials if available
    const started = Date.now();
    let ok: string;
    let body: any;
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          ok = event instanceof HttpResponse ? 'succeeded' : '';
          body =
            event instanceof HttpResponse && event.body
              ? event.body
              : undefined;
        },
        (error: HttpErrorResponse) => (ok = 'failed')
      ),
      // Log when response observable either completes or errors
      finalize(() => {
        const elapsed = Date.now() - started;
        // const msg = `${request.method} "${
        //   request.urlWithParams
        // }" ${ok} in ${elapsed} ms.`;
        // console.log(msg);
        if (ok == 'succeeded') {
          console.log(
            '%c⧭ ' + ok + ' ' + request.method,
            'color: green; font-size: 1rem; font-weight: bold;',
            {
              payload: request.body,
              response: body,
            },
            `"${request.urlWithParams}" ${ok} in ${elapsed} ms.`
          );
        } else {
          console.log(
            '%c⧭ ' + ok + ' ' + request.method,
            'color: red; font-size: 1rem; font-weight: bold;',
            {
              payload: request.body,
              response: body,
            },
            `"${request.urlWithParams}" ${ok} in ${elapsed} ms.`
          );
        }
      })
    );
  }
}
