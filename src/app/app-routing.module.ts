import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { RoutingTestComponent } from './components/routing-test/routing-test.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent},
  { path: 'routing-test', component: RoutingTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
