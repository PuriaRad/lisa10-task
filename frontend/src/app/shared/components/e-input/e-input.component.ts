import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistrationField } from 'src/app/core/models/RegistrationField.interface';

@Component({
  selector: 'app-e-input',
  templateUrl: './e-input.component.html',
  styleUrls: ['./e-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EInputComponent implements OnInit {
  /* -------------------------------------------------------------------------- */
  /*                                    form                                    */
  /* -------------------------------------------------------------------------- */

  @Input() group: FormGroup;
  @Input() field: RegistrationField;

  /* ------------------------------- constructor ------------------------------ */

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }
}
