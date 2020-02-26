import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public postList: any = [];
  public page = 0;
  public pages = [];

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.postList = this.activatedRoute.snapshot.data.posts;

    let pages = Math.round(this.postList.length / 10);
    const mod = this.postList.length % 10;
    if (mod > 0) {
      pages++;
    }

    for (let i = 0; i < pages; i++) {
      this.pages.push(i);
    }
  }

  ngOnInit() { }

}
