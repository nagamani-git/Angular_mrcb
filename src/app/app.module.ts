import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { UserService } from "../services/user.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRouteModule } from "./app.route.module";

@NgModule({
  imports:[BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,AppRouteModule],
  declarations:[AppComponent,LoginComponent,RegistrationComponent],
  bootstrap:[AppComponent],
  providers:[UserService]
})
export class AppModule{}