import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lowbar-admin',
  templateUrl: './lowbar-admin.component.html',
  styleUrls: ['./lowbar-admin.component.css']
})
export class LowbarAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  refresh(){
    location.reload();
  }

}
