import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { HomeComponent } from './components/home/home.component';
import { ListRestaurantResolverService } from './components/list-restaurant/list-restaurant-resolver.service';
import { ListRestaurantComponent } from './components/list-restaurant/list-restaurant.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateRestaurantComponent } from './components/update-restaurant/update-restaurant.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'add-restaurant', component: AddRestaurantComponent },
    { path: 'add-restaurant/:id', component: AddRestaurantComponent },
    { path: 'list-restaurant', component: ListRestaurantComponent, resolve: { data: ListRestaurantResolverService } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
