import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoiveCardComponent } from './shared/component/moive-card/moive-card.component';
import { IsLikedComponent } from './shared/component/is-liked/is-liked.component';
import { FormsModule } from '@angular/forms';
import { SearchInputPipe } from './shared/pipes/search-input.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoiveCardComponent,
    IsLikedComponent,
    SearchInputPipe,
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
