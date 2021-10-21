import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { HomeComponent } from './components/home/home.component';
import { ListRestaurantComponent } from './components/list-restaurant/list-restaurant.component';
import { UpdateRestaurantComponent } from './components/update-restaurant/update-restaurant.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add-restaurant', component: AddRestaurantComponent },
  { path: 'add-restaurant/:id', component: AddRestaurantComponent },
  { path: 'list-restaurant', component: ListRestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
