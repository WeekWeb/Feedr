import {Component, OnInit} from '@angular/core';
import { FormsModule} from "@angular/forms";
import { SearchBarFilterPipe } from "../search-bar-filter.pipe";

@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.css']
})
export class ContentMainComponent implements OnInit {

  public term;
  public events = [
    { name: 'asdf',
      description: 'hello my baby',
      date: '1/1/2000',
      address: '6969 cool st'
    },
    { name: 'jkl',
      description: 'qwerty',
      date: '2/2/1000',
      address: 'my house'
    },
    { name: 'hoobastank',
      description: 'stoobahank',
      date: '12/25/1980',
      address: 'over there'
    },
    { name: 'tusk act 4',
      description: 'arigatou gyro',
      date: 'chapter 84',
      address: 'america'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
