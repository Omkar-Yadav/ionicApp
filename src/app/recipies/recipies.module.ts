import { StatsComponent } from './../stats/stats.component';
import { RecipeDetailsPage } from './../recipe-details/recipe-details.page';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecipiesPage } from './recipies.page';


const routes: Routes = [
  {
    path: '',
    component: RecipiesPage
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecipiesPage, RecipeItemComponent, StatsComponent]
})
export class RecipiesPageModule {}
