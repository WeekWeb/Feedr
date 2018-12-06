import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FoodTypeService} from "../food-type-service.service";

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.css']
})
export class DropdownFilterComponent implements OnInit {

  public foodTypes = [
    "",
    'Mexican',
    'Italian',
    'Seafood',
    'Pizza',
    'Indian',
    'BBQ',
    'Chinese',
    'Japanese',
    'Thai',
    'Korean'
  ];

  public onButtonClick(foodType:string){
    console.log(foodType);
    this.foodTypeService.setFoodType(foodType);
  }

  constructor(private foodTypeService: FoodTypeService) { }

  ngOnInit() {
    this.foodTypes = this.foodTypes.sort();
  }

}
