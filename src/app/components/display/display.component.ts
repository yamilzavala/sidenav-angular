import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  //Fake data
  fakeContentData = [{
    subtitleItem: 'Sidenav subheader data',
    itemContent: [
      {itemsTitle: 'Sidenav title 01', itemsContent: 'Sidenav content 01'},
      {itemsTitle: 'Sidenav title 02', itemsContent: 'Sidenav content 02'},
      {itemsTitle: 'Sidenav title 03', itemsContent: 'Sidenav content 03'},
    ],
  }];

  fakeHeader = 'Example Header Title';

  constructor() { }

  ngOnInit(): void {
  }

}
