import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'shop',
    component:ShopComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:"singleproduct",
    component:SinglepageComponent
  },{
    path:"bestseller",
    component:BestsellerComponent
  },{
    path:"cart",
    component:CartComponent
  },{
    path:"checkout",
    component:CheckoutComponent
  },
  {
    path:"**",
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
