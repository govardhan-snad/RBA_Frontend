import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApproachOneComponent } from './approach-one/approach-one.component';
import { ApproachTwoComponent } from './approach-two/approach-two.component';

const routes: Routes = [
  { path: '', component: ApproachOneComponent },
  { path: 'ap2', component: ApproachTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
