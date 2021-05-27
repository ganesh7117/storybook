import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LinkComponent } from './components/link/link.component';
import { MatSelectComponent } from './mat-select/mat-select.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    MatSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
