import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lowbar-main',
  templateUrl: './lowbar-main.component.html',
  styleUrls: ['./lowbar-main.component.css']
})
export class LowbarMainComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  refresh(){
    location.reload();
  }
}
