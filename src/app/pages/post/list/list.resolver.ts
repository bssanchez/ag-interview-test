import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ProxyService } from '../../../shared/services/proxy.service';

@Injectable({
  providedIn: 'root'
})
export class ListResolver implements Resolve<any>  {
  constructor(
    private proxyServ: ProxyService
  ) { }

  /**
   * Resolve HTTP request before loading component
   * @param route ActivatedRouteSnapshot
   */
  resolve(route: ActivatedRouteSnapshot) {
    return new Promise(async (resolve) => {
      const response: any = await this.proxyServ.get('/posts');
      resolve(response);
    });
  }
}
