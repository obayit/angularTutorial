import { NgModule } from '@angular/core'; 
import { Routes, RouterModule} from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MarioComponent } from './mario/mario.component';

const routes: Routes=[
  { path: '', redirectTo: '/mario', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent},
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'mario', component: MarioComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
