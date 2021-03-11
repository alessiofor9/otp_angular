import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VisualizzaComponent } from './visualizza/visualizza.component';
import { RecuperaQrComponent } from './recupera-qr/recupera-qr.component';

const routes: Routes = [
  {path : '', component:  HomepageComponent},
  {path:'recuperaQr', component:RecuperaQrComponent},
  {path : 'cerca', component:VisualizzaComponent },
  {path : 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
