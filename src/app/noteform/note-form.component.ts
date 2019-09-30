import { Component, OnInit } from "@angular/core";
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { ADD_PROFILE, TOGGLE_NOTE_FORM_SHOW} from '../store/actions';

@Component({
  selector: 'note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  @select() isNoteFormShown;

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email:[''],
    description:['']
  });

  onSubmit() {
    this.ngRedux.dispatch({type: ADD_PROFILE, profile: this.profileForm.value});
    this.ngRedux.dispatch({type: TOGGLE_NOTE_FORM_SHOW});
    this.profileForm.reset();
  }

  constructor(private fb: FormBuilder, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {}
}
