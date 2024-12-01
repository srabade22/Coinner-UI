import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { WebsiteRoutingModule } from './website.routes';

// Module
import { SharedModule } from '../shared/shared.module';

// Components
import { HomeComponent } from './home/home.component';
import { WebsiteComponent } from './website.component';

// Components

@NgModule({
  declarations: [
    HomeComponent,
    WebsiteComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule
  ]
})
export class WebsiteModule { }
