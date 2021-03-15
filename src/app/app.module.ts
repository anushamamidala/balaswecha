import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SafePipe } from './safe.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SimulationsComponent } from './components/simulations/simulations.component';
import { VideoSimulationComponent } from './components/video-simulation/video-simulation.component';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SimulationsComponent,
    VideoSimulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
