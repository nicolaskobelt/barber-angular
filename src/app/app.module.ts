import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatCheckboxModule, MatListModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProfilesComponent } from './profiles/profiles.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ShowUsersComponent } from './show-users/show-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProfilesComponent,
    NewUserComponent,
    ShowUsersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    LayoutModule,
    ReactiveFormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
