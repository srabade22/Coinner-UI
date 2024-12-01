// website/website-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent, // Root component for WebsiteModule
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
