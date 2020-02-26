import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatePipe } from './pipes/paginate.pipe';
import { PostCommentComponent } from './components/post-comment/post-comment.component';

@NgModule({
  declarations: [
    PaginatePipe,
    PostCommentComponent
  ],
  exports: [
    PaginatePipe,
    PostCommentComponent
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class SharedModule { }
