import { RecipeService } from './recipe.service';
import { Recipes } from './recipies.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit {

 recipes: Recipes[];

  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
   this.recipes  = this.recipeService.getAllRecipes();
  }

}
