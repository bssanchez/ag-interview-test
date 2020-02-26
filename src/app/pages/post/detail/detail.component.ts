import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public id: string = null;
  public post: any = null;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.post = this.activatedRoute.snapshot.data.post;

    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  ngOnInit() { }

}
