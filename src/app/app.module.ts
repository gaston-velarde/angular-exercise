import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store/store';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from '@angular/forms';
import { NoteFormComponent } from "./noteform/note-form.component";
import { NoteCounterComponent } from "./notecounter/note-counter.component";
import { NoteProfileComponent } from "./noteprofile/note-profile.component";
@NgModule({
  declarations: [AppComponent, NoteFormComponent, NoteCounterComponent, NoteProfileComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserModule, FormsModule,ReactiveFormsModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
