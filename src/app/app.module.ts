import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GoogleMapsModule } from '@angular/google-maps';
import { EmployeesComponent } from './components/employees/employees.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RoutingTestComponent } from './components/routing-test/routing-test.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FrontPageComponent,
    DropDownComponent,
    ContactFormComponent,
    EmployeesComponent,
    RoutingTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,

    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    GoogleMapsModule,
    MatTabsModule,
    MatAutocompleteModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
