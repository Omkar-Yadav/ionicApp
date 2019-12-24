import { Injectable } from '@angular/core';
import { Recipes } from './recipies.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipes[] = [
    {
      id: 'id1',
      title: 'BedRoom1',
      image: './assets/images/gallery.jpg',
      ingrdients: ['ingredinet1', 'ingrdient2', 'ingredient3']
   },
   {
    id: 'id2',
    title: 'BedRoom2',
    image: './assets/images/bedroom1.jpg',
    ingrdients: ['ingredinet1', 'ingrdient2', 'ingredient3']
   },
   {
   id: 'id3',
   title: 'Hall',
   image: './assets/images/bedroom2.jpg',
   ingrdients: ['ingredinet1', 'ingrdient2', 'ingredient3']
   },
   {
    id: 'id4',
    title: 'Kitchen',
    image: './assets/images/bathroom.jpg',
    ingrdients: ['ingredinet1', 'ingrdient2', 'ingredient3']
    },
    {
      id: 'id5',
      title: 'Gallary',
      image: './assets/images/hall.jpg',
      ingrdients: ['ingredinet1', 'ingrdient2', 'ingredient3']
      },
      {
        id: 'id6',
        title: 'Roof',
        image: './assets/images/rooftop.jpg',
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
      debugger
       
      return ("recipe" + recipe.id) === (recipeId);
    }
   )};
   
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter( recipe => {
      return  recipe.id !== recipeId;
     });
  }
}
