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
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';



import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProfilesComponent } from './profiles/profiles.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { NewTurnComponent } from './new-turn/new-turn.component';
import { PlanningComponent } from './planning/planning.component';
import { FechaHoraComponent } from './date-timePicker/fecha-hora.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { NewClientComponent } from './new-client/new-client.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProfilesComponent,
    NewUserComponent,
    ShowUsersComponent,
    NewTurnComponent,
    PlanningComponent,
    FechaHoraComponent,
    NewClientComponent
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
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    TooltipModule,
    NgxMaterialTimepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    CalendarModule,
    AccordionModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],

})
export class AppModule { }
