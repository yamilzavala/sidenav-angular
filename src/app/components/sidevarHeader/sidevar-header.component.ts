import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidevar-header',
  templateUrl: './sidevar-header.component.html',
  styleUrls: ['./sidevar-header.component.css']
})
export class SidevarHeaderComponent implements OnInit {
  @Input() headerContent: string = 'Header sidenav';
  constructor() { }

  ngOnInit(): void {
  }

}
