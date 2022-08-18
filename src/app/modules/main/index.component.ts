import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  mobileQuery!: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private storage:StorageService
  ) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  ngOnInit(): void {
    // var sc = document.createElement("script");
    // sc.src = "/assets/js/pages/dashboards/dashboard1.js";
    // document.body.appendChild(sc);
  }
  onLogout(){
    this.storage.removeLogin();
  }
}
