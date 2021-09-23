import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.css']
})
export class SidenavContentComponent implements OnInit {
  @Input() sidenavContent: SidenavContentI[] = [{ 
      subtitleItem: 'Subtitle', 
      itemsTitle: ['Title_01', 'Title_02', 'Title_03'], 
      itemsContent: ['Content_01', 'Content_02', 'Content_03']
    }];
  constructor() { }

  ngOnInit(): void {
  }

}

export interface SidenavContentI {
  subtitleItem: string;
  itemsTitle: string[];
  itemsContent: string[];
}
