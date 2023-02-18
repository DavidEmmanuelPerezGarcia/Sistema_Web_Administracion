import { Component } from '@angular/core';
import { LoadingService } from 'src/app/utils/services/loading.service';

@Component({
  selector: 'app-loading',
  template: `
    <div *ngIf="isLoading$ | async" class="overlay">
      <div class="loader"></div>
    </div>
  `,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent  {

  isLoading$ = this.loadingService.isLoading$;
  // Just One Exception
  constructor(private loadingService: LoadingService) {}

}
