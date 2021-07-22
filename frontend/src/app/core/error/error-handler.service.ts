import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
  constructor(public router: Router) {}

  handleError(error: any | HttpErrorResponse) {
    console.group('ErrorHandler');
    console.error(error.message);
    console.error(error.stack);
    console.error(window.location.href);
    console.groupEnd();

    if (error instanceof HttpErrorResponse) {
      this.handleHttpError(error);
    } else {
      this.errorAlert({
        errorStatus: 500,
        errorMessage: 'Unknown error!',
        errorError: error,
      });
    }

    throw error;
  }

  /* -------------------------------------------------------------------------- */
  /*                                errorHandler                                */
  /* -------------------------------------------------------------------------- */

  public handleHttpError(error: HttpErrorResponse) {
    console.group('ErrorHandler');
    console.error(error);
    console.error(window.location.href);
    console.groupEnd();
    let newError;

    if (error.error) {
      newError = {
        errorStatus: error.status,
        errorMessage: error.error.error,
        errorError: error,
      };
    } else {
      newError = {
        errorStatus: 500,
        errorMessage: 'Unknown error',
        errorError: error,
      };
    }

    this.errorAlert(newError);
    // throw new HttpErrorResponse(newError);
  }
  // ────────────────────────────────────────────────────────────────────────────────

  /* ------------------------------- errorAlert; ------------------------------ */

  errorAlert(errorMessage: any) {
    swal
      .fire({
        title: 'Error',
        // titleText: errorMessage.errorStatus,
        text: errorMessage.errorMessage,
        // icon: 'error',
        // iconColor: 'red',
        confirmButtonText: 'Ok',
        showDenyButton: false,
        customClass: {
          confirmButton: 'btn btn-success',
        },
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log('confirmed');
        }
      });
  }
}
