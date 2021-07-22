import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { ErrorHandlerService } from '../error/error-handler.service';
import { ApiOptions } from '../models/api-options';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService
  ) {}

  /* -------------------------------------------------------------------------- */
  /*                               requestCreator                               */
  /* -------------------------------------------------------------------------- */

  public async requestCreator(
    method = 'get',
    url: string,
    options: ApiOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
    }
  ): Promise<any> {
    /* -------------------------------------------------------------------------- */
    /*                                    init                                    */
    /* -------------------------------------------------------------------------- */
    if (options && !options.headers)
      options['headers'] = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      });

    if (options && (options.param == undefined || options.param == null)) {
      options.param = '';
    }

    /* -------------------------------------------------------------------------- */
    /*                                   request                                  */
    /* -------------------------------------------------------------------------- */

    return this.http
      .request(method, `${environment.backendAPI + url}${options.param}`, {
        body: options.body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        responseType: options.responseType,
        reportProgress: options.reportProgress,
        withCredentials: options.withCredentials,
      })
      .toPromise()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        this.errorHandler.handleHttpError(err);
      });
  }
}
