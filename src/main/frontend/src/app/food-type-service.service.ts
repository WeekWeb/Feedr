import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodTypeService {
  private foodTypeSource = new BehaviorSubject("");
  foodType = this.foodTypeSource.asObservable();

  setFoodType(foodType: string){
    this.foodTypeSource.next(foodType);
  }

  constructor() {}
}
