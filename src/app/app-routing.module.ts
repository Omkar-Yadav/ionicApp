import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recipies', pathMatch: 'full' },
  { path: 'recipies',
    children: [
      {
        path: '',
        loadChildren: './recipies/recipies.module#RecipiesPageModule'
      },
      {
        path: ':recipeId',
        loadChildren: './recipe-details/recipe-details.module#RecipeDetailsPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
