import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { NewTurnComponent } from './new-turn/new-turn.component';
import { PlanningComponent } from './planning/planning.component';
import { NewClientComponent } from './new-client/new-client.component';
import { ClientsComponent } from './clients/clients.component';


const routes: Routes = [
  {
    path: 'newuser',
    component: NewUserComponent
  },
  {
    path: 'profile/:id',
    component: ProfilesComponent
  },
  {
    path: 'users',
    component: ShowUsersComponent
  },
  {
    path: 'newturn',
    component: NewTurnComponent
  },
  {
    path: 'planning',
    component: PlanningComponent
  },
  {
    path: 'newclient',
    component: NewClientComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
