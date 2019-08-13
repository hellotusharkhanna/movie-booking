import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
