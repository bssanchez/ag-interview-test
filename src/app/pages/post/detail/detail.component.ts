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
  public showDate: any = null;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.post = this.activatedRoute.snapshot.data.post;
    console.log(this.post);
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  ngOnInit() { }

  /**
   * Assign conctenated data of EventEmmiter from CommentComponent
   * @param event any
   */
  onDateEmitted(event) {
    this.showDate = `[${event.data.commentId}] ${event.data.date}`;
  }

}
