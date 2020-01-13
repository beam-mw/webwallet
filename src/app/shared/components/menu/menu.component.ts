import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import { environment } from '@environment';
import { ActivatedRoute} from '@angular/router';
import { DataService } from './../../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  public iconClose: string = `${environment.assetsPath}/images/shared/components/menu/icon-close.svg`;
  public iconBuyBeam: string = `${environment.assetsPath}/images/shared/components/menu/icon-where-to-buy-beam.svg`;

  menuItems = [{
      path: '/wallet/main',
      title: 'Wallet',
      src: '',
      srcOut: `${environment.assetsPath}/images/shared/components/menu/ic-wallet.svg`,
      srcOn: `${environment.assetsPath}/images/shared/components/menu/ic-wallet-active.svg`
    }, {
      path: '/addresses/list',
      title: 'Addresses',
      src: '',
      srcOut: `${environment.assetsPath}/images/shared/components/menu/ic-addressbook.svg`,
      srcOn: `${environment.assetsPath}/images/shared/components/menu/ic-addressbook-active.svg`
    }, {
      path: '/utxo/info',
      title: 'UTXO',
      src: '',
      srcOut: `${environment.assetsPath}/images/shared/components/menu/ic-utxo.svg`,
      srcOn: `${environment.assetsPath}/images/shared/components/menu/ic-utxo-active.svg`
    }, {
      path: '',
      title: 'Settings',
      src: '',
      srcOut: `${environment.assetsPath}/images/shared/components/menu/icon-settings.svg`,
      srcOn: `${environment.assetsPath}/images/shared/components/menu/icon-settings-active.svg`
    }, {
      path: '',
      title: 'Logout',
      src: '',
      srcOut: `${environment.assetsPath}/images/shared/components/menu/icon-logout.svg`,
      srcOn: `${environment.assetsPath}/images/shared/components/menu/icon-logout-active.svg`
    }
  ];

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.emitChange(true);
  }

  ngOnDestroy() {
    this.dataService.emitChange(false);
  }

  closeMenu() {
    this.router.navigate([{ outlets: { sidemenu: null }}], {relativeTo: this.activatedRoute.parent});
  }

  goToBuyBeam() {
    window.open('https://beam.mw/#exchanges', '_blank');
  }
}