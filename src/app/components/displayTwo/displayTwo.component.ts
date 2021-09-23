import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-two',
  templateUrl: './displayTwo.component.html',
  styleUrls: ['./displayTwo.component.css']
})
export class DisplayTwoComponent implements OnInit {
  opened = false;
  constructor() { }

  ngOnInit(): void {
  }

}
