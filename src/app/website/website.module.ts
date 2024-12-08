import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { WebsiteRoutingModule } from './website.routes';

// Module
import { SharedModule } from '../shared/shared.module';

// Components
import { HomeComponent } from './home/home.component';
import { WebsiteComponent } from './website.component';
import { GamesComponent } from './games/games.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

// Components

@NgModule({
  declarations: [
    HomeComponent,
    WebsiteComponent,
    GamesComponent,
    ShopComponent,
    AboutComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule
  ]
})
export class WebsiteModule { }
