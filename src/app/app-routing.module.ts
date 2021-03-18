import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SimulationsComponent } from './components/simulations/simulations.component';
import { VideoSimulationComponent } from './components/video-simulation/video-simulation.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'videos/:simUrl', component: VideoSimulationComponent,
  },
  {
    path: 'home/:subject', component: SimulationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
