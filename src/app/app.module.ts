import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { ShowPetsComponent } from './show-pets/show-pets.component';
import { NewPetComponent } from './new-pet/new-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPetsComponent,
    ShowPetsComponent,
    NewPetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
