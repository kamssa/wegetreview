import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'site', pathMatch: 'full'},
  {path: 'site', loadChildren: './vues/site/site.module#SiteModule'},
  {path: 'dashboard', loadChildren: './vues/dashboard/dashboard.module#DashboardModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
