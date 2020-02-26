import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatePipe } from './pipes/paginate.pipe';

@NgModule({
  declarations: [PaginatePipe],
  exports: [PaginatePipe],
  imports: [
    CommonModule
  ],
  providers: []
})
export class SharedModule { }
