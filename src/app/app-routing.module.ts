import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ShowUsersComponent } from './show-users/show-users.component';


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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
