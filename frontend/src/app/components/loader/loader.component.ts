import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  isLoadingSubject: Subject<boolean> = this.loaderService.isLoading;
  public isLoading = false;

  constructor(public loaderService: LoadingService) {}

  ngOnInit(): void {
    this.isLoadingSubject.subscribe((value) => {
      this.isLoading = value;
    });
  }
}
