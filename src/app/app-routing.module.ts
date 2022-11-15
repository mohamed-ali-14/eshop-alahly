import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ExComponent } from './ex/ex.component';
import { HomeComponent } from './home/home.component';
import { MlabsComponent } from './mlabs/mlabs.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ShonatComponent } from './shonat/shonat.component';

NotfoundComponent
const routes: Routes = [
{path:" ",redirectTo:"HomeComponent",pathMatch:"full"},
{path:"home",component:HomeComponent},
{path:"shonat",component:ShonatComponent},
{path:"mlabs",component:MlabsComponent},
{path:"ex",component:ExComponent},
{path:"cart",component:CartComponent},
{path:"**",component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
