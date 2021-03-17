import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VisualizzaComponent } from './visualizza/visualizza.component';
import { RecuperaQrComponent } from './recupera-qr/recupera-qr.component';
import { RegistraidpcComponent } from './registraidpc/registraidpc.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { ModificaComponent } from './modifica/modifica.component';

const routes: Routes = [
  {path : '', component:  HomepageComponent},
  {path : 'registra', component:  RegistraidpcComponent},
  {path:'recuperaQr', component:RecuperaQrComponent},
  {path : 'cerca', component:VisualizzaComponent },
  {path : 'login', component: LoginComponent },
  {path : 'homeuser', component: HomeuserComponent },
  {path:'modificautente' , component : ModificaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
