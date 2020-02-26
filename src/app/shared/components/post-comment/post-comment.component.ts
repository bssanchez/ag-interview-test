import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {
  @Input() public comment: any = null;
  @Output() private clickEmitButton = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Emit date and comment.id when click on button
   * @param event MouseEvent
   */
  emitDate(event: any) {
    event.data = {
      date: new Date(),
      commentId: this.comment.id
    };

    this.clickEmitButton.emit(event);
  }
}
