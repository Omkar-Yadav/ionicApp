import { Recipes } from './../recipies/recipies.model';
import { RecipeService } from './../recipies/recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Devices } from './device.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  loadedRecipe: Recipes;
  devices : Devices;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private alertcontroller: AlertController
    ) { 
     
    }

  ngOnInit() {
     this.activatedRoute.paramMap.subscribe(
    paramMap => {
      if (!paramMap.has('recipeId')) {
        return;
      }
      debugger
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    }
   
     );
  }

  onDeleteRecipe() {
   this.alertcontroller.create(
    {
         header: "Are you sure? ",
         message: 'Do you really want to delete the recipe? ',
         buttons: [ {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipeService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipies']);
          }
        }
        ]
    }
   ).then(alertEl => {
     alertEl.present();
   });



  }

}
