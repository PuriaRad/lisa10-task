import {
  NgModule,
  Optional,
  SkipSelf,
  ErrorHandler,
  ModuleWithProviders,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './helpers';
import { ErrorHandlerService } from './error/error-handler.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        httpInterceptorProviders,
        { provide: ErrorHandler, useClass: ErrorHandlerService },
      ],
    };
  }
}
