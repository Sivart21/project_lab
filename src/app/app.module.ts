import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { DataService } from '../services/data.service';
import { FriendsComponent } from './friends/friends.component';
import { LibraryComponent } from './library/library.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';    // mentor

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    FriendsComponent,
    LibraryComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
