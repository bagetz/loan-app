import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { RecipeComponent } from './feature/recipe/recipe.component';
import { RoleComponent } from './feature/role/role.component';

export const routes: Routes = [
    {path: 'home', title: 'Home', component: HomeComponent},
    {path: 'recipe', title: 'Recipe',component: RecipeComponent},
    {path: 'role', title: 'Role',component: RoleComponent},
];
