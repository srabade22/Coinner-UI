import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

// Router
import { AppRoutingModule } from "./app.routes";

// Components
import { AppComponent } from "./app.component";
import { CursorModule } from "./cursor/cursor.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CursorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
