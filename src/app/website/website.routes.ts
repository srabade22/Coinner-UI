// website/website-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent, // Root component for WebsiteModule
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'games', component: GamesComponent },
        { path: 'shop', component: ShopComponent },
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
