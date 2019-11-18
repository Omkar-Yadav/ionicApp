import { Injectable } from '@angular/core';
import { Recipes } from './recipies.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipes[] = [
    {
      id: 'id1',
      title: 'title1',
      image: './assets/images/blank.jpg',
      ingrdients: ['ingredinet1', 'ingrdient2', 'ingredient3']
   },
   {
    id: 'id2',
    title: 'title2',
    image: './assets/images/blank.jpg',
    ingrdients: ['ingredinet1', 'ingrdient2', 'ingredient3']
   },
   {
   id: 'id3',
   title: 'title3',
   image: './assets/images/blank.jpg',
   ingrdients: ['ingredinet1', 'ingrdient2', 'ingredient3']
   }
  ];

  constructor() { }
  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
   return {...this.recipes.find(
    recipe => {
      return recipe.id === recipeId;
    }
   )};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter( recipe => {
      return  recipe.id !== recipeId;
     });
  }
}
