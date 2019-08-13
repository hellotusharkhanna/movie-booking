import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";
import { RouterModule } from "@angular/router";
import { dashboardRoutes } from "./dashboard.routes";
import { AuthGuard } from "../guards/auth-guard.service";
import { RoleGuard } from "../guards/role-guard.service";
import { AddTheaterDialogComponent } from "./components/add-dialog.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [AuthGuard, RoleGuard],
  declarations: [
    HomeComponent,
    AdminComponent,
    LayoutComponent,
    AddTheaterDialogComponent
  ],
  entryComponents: [AddTheaterDialogComponent]
})
export class DashboardModule {}
