import { Component, OnInit } from '@angular/core';
import { TastyService } from 'src/app/services/tasty.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  meals:any [] = []
  constructor(private dataApi:TastyService) {}

  ngOnInit(): void {
    this.getRecipes()
  }

  getRecipes(){
    this.dataApi.getMeals().subscribe((res:any) => {
      this.meals = res.meals
    })
  }
}
