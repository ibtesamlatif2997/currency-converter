import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(): void {
  }

  selectCurrencies(from:string, to:string){
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        from: from,
        to: to,
        isDetailed: true
      },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: false
      // do not trigger navigation
    });
  }

}
