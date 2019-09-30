import { Component, OnInit } from "@angular/core";
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { REMOVE_PROFILE, TOGGLE_NOTE_FORM_SHOW  } from '../store/actions';

@Component({
  selector: 'note-profile',
  templateUrl: './note-profile.component.html',
  styleUrls: ['./note-profile.component.css']
})
export class NoteProfileComponent implements OnInit {

  @select() profiles;
  @select() isNoteFormShown;

  removeProfile(profile) {
    this.ngRedux.dispatch({type: REMOVE_PROFILE, id: profile.id});
  }

  toggleNoteFormShow(){
    this.ngRedux.dispatch({type: TOGGLE_NOTE_FORM_SHOW});
  }

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {}
}
