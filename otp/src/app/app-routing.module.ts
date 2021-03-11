import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VisualizzaComponent } from './visualizza/visualizza.component';

const routes: Routes = [
  {path : 'cerca', component:VisualizzaComponent },
  {path : 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
