import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpService) {}

  /* --------------------------------- create --------------------------------- */

  public async create<Type>(url: string, body: Type) {
    return this.http.requestCreator('post', url, { body });
  }

  /* --------------------------------- update --------------------------------- */
  public async update<Type>(url: string, id: number, body: Type) {
    return this.http.requestCreator('put', url, { param: id, body });
  }

  /* --------------------------------- delete --------------------------------- */
  public async delete(url: string, id: number) {
    return this.http.requestCreator('delete', url, { param: id });
  }

  /* --------------------------------- getAll --------------------------------- */

  public async getAll<Type>(
    url: string,
    options?:
      | HttpParams
      | {
          [param: string]: string | string[];
        }
  ): Promise<Type[]> {
    return this.http.requestCreator('get', url, {
      params: options,
    });
  }

  /* --------------------------------- getAll --------------------------------- */

  public async getAllById<Type>(
    url: string,
    id: number,
    options?:
      | HttpParams
      | {
          [param: string]: string | string[];
        }
  ): Promise<Type[]> {
    return this.http.requestCreator('get', url, {
      params: options,
      param: id,
    });
  }

  /* --------------------------------- get one -------------------------------- */

  public async getOne<Type>(
    url: string,
    id: number,
    options?:
      | HttpParams
      | {
          [param: string]: string | string[];
        }
  ): Promise<Type> {
    return this.http.requestCreator('get', url, {
      param: id,
      params: options,
    });
  }
}
