import { Injectable } from '@angular/core';
import { RegistrationField } from '../models/RegistrationField.interface';
import { RegistrationRequest } from '../models/RegistrationRequest.interface';
import { CrudService } from '../services/crud.service';

@Injectable({
  providedIn: 'root',
})
export class RegistrationAPIService {
  constructor(private crudService: CrudService) {}

  /* -------------------------- getRegistrationField; ------------------------- */

  public async getRegistrationField(): Promise<RegistrationField[]> {
    return this.crudService.getAll<RegistrationField>('registrationField');
  }

  /* -------------------------- registrationRequest; -------------------------- */

  public async registrationRequest(
    body: RegistrationRequest
  ): Promise<boolean> {
    return this.crudService.create<RegistrationRequest>(
      'registrationRequest',
      body
    );
  }
}
