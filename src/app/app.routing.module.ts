import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./components/cart/cart.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductsComponent } from "./components/products/products.component";
import { RegisterComponent } from "./components/register/register.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path:'home' ,component:HomeComponent},
    { path:'products' ,component:ProductsComponent},
    { path:'cart' ,component:CartComponent},
    { path:'login' ,component:LoginComponent},
    { path:'register' ,component:RegisterComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
