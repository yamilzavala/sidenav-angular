import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.css'],
})
export class SidenavContentComponent implements OnInit {
  @Input() sidenavContent: SidenavContentI[] = [
    {
      subtitleItem: 'Subtitle',
      itemContent: [
        {itemsTitle: 'Title_01', itemsContent: 'Content_01'},
        {itemsTitle: 'Title_02', itemsContent: 'Content_02'},
        {itemsTitle: 'Title_03', itemsContent: 'Content_03'},
      ],
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}

export interface SidenavContentI {
  subtitleItem: string;
  itemContent: ItemContent[];
}

export interface ItemContent { 
  itemsTitle: string;
  itemsContent: string;
}
