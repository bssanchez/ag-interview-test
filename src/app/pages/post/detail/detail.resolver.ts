import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ProxyService } from 'src/app/shared/services/proxy.service';

@Injectable({
  providedIn: 'root'
})
export class DetailResolver implements Resolve<any>  {
  constructor(
    private proxyServ: ProxyService
  ) { }

  /**
   * Resolve HTTP request before loading component
   * @param route ActivatedRouteSnapshot
   */
  resolve(route: ActivatedRouteSnapshot) {
    return new Promise<any>(async (resolve) => {
      const postId = route.params.id;

      const post: any = await this.proxyServ.get(`/posts/${postId}`);
      post.comments = await this.proxyServ.get(`/posts/${postId}/comments`);

      resolve(post);
    });
  }
}
