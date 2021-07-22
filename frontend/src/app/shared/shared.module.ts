import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EInputComponent } from './components/e-input/e-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [EInputComponent, DynamicFieldDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [
    EInputComponent,
    FormsModule,
    ReactiveFormsModule,
    DynamicFieldDirective,
    MaterialModule,
  ],
})
export class SharedModule {}
