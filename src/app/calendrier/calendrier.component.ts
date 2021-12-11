import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css'],
})
export class CalendrierComponent implements OnInit {
  selected: Date = new Date('2021-12-15');

  constructor() {
    console.log(this.selected);
  }

  ngOnInit(): void {}
}
