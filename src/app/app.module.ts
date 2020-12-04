import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { PodstronaComponent } from './components/podstrona/podstrona.component';
import { PnfComponent } from './components/pnf/pnf.component' ;
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'podstrona', component: PodstronaComponent },
  { path: '**', component: PnfComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KontaktComponent,
    PodstronaComponent,
    PnfComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
