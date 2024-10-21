import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { TestymonialsComponent } from './Components/testymonials/testymonials.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { ButtonComponent } from './shared/button/button.component';
import { SectionHeadingComponent } from './shared/section-heading/section-heading.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HowComponent } from './Components/how/how.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    RecipesComponent,
    TestymonialsComponent,
    ContactUsComponent,
    HomeComponent,
    ButtonComponent,
    SectionHeadingComponent,
    HowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [
    provideToastr(), // Toastr providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
