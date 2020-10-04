import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { SliderGroupComponent } from './slider-group/slider-group.component';
import { SelectGroupComponent } from './select-group/select-group.component';
import { SideInfoComponent } from './side-info/side-info.component';
import { Ng5SliderModule } from 'ng5-slider';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { SubmittedComponent } from './submitted/submitted.component';

const routes : Routes = [
  {path:'simulator', component: ContainerComponent },
  {path: '',redirectTo:'/simulator',pathMatch:'full'},
  {path:'simulator/submit',component:SubmittedComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    InputGroupComponent,
    SliderGroupComponent,
    SelectGroupComponent,
    SideInfoComponent,
    HeaderCompComponent,
    SubmittedComponent
    
  ],
  imports: [
    BrowserModule,
    Ng5SliderModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
