import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store/store';

@Component({
    selector: 'note-counter',
    templateUrl: './note-counter.component.html'
  })
  export class NoteCounterComponent {
    @select() profiles;
    @select() lastUpdate;

    constructor(private ngRedux: NgRedux<IAppState>) { }
  }