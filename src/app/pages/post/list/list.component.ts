import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public postList: any = [];

  constructor() { }

  ngOnInit() {
    this.postList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

}
