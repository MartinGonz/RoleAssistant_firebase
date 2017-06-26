import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import {AF} from "./providers/af";
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyD6Qg7tUhcpogn2rjVklNf2wMM3OS3jxRM',
  authDomain: 'merp-64b26.firebaseapp.com',
  databaseURL: 'https://merp-64b26.firebaseio.com',
  storageBucket: 'merp-64b26.appspot.com',
  messagingSenderId: '195433682352'
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path:'charSheet', component: CharacterSheetComponent},
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    CharacterSheetComponent
  ],
  imports: [
    BrowserModule,
     AngularFireModule.initializeApp(firebaseConfig),
     RouterModule.forRoot(routes),
     AngularFireDatabaseModule,
     AngularFireAuthModule,
     FormsModule
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
