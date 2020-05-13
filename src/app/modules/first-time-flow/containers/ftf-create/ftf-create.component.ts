import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from '@environment';
import { WindowService, DataService } from '../../../../services';
import { routes } from '@consts';
import { popupRoutes } from '@consts';

@Component({
  selector: 'app-ftf-create',
  templateUrl: './ftf-create.component.html',
  styleUrls: ['./ftf-create.component.scss']
})
export class FtfCreateComponent implements OnInit, OnDestroy {
  public bgUrl: string;
  public logoUrl: string = `${environment.assetsPath}/images/modules/wallet/containers/login/logo.svg`;
  public isFullScreen = false;
  public popupOpened = false;

  constructor(public router: Router,
              private dataService: DataService,
              private windowService: WindowService) {
    this.isFullScreen = windowService.isFullSize();
    this.bgUrl = `${environment.assetsPath}/images/modules/wallet/containers/login/` +
      (this.isFullScreen ? 'bg-full.svg' : 'bg.svg');

    dataService.changeEmitted$.subscribe(emittedState => {
      if (emittedState.popupOpened !== undefined) {
        this.popupOpened = emittedState.popupOpened;
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  newWalletClicked() {
    this.router.navigate([routes.FTF_GENERATE_SEED_ROUTE]);
  }
}
