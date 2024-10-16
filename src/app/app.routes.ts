import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { RecipeComponent } from './feature/recipe/recipe.component';

export const routes: Routes = [
    {path: 'home', title: 'Home', component: HomeComponent},
    {path: 'recipe', title: 'Recipe',component: RecipeComponent},
];
