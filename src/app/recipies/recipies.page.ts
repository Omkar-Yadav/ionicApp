import { RecipeService } from './recipe.service';
import { Recipes } from './recipies.model';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit {

  recipes: Recipes[];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {

  }
  
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }

  openDetailsPage(recipexx) {

    this.router.navigate(['recipies/recipe' + recipexx]);
    debugger
  }
}