import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f')SignupForm:NgForm;
  value = 'pet';
  questionAnswer ='nelly'
  genders =['Males', 'Females'];

  details=[]
  suggestUserName() {
    const suggestedName = 'Superuser';
    //this.SignupForm.setValue({
      //username : suggestedName,
      //email: '',
      //secret: this.value,
      //questionAnswer: this.questionAnswer,
      //g: ''
    //})
    this.SignupForm.form.patchValue({
      username : suggestedName
    })
  }
  optionvalue(){
    return this.value;
  }
  OnSubmit(){
   this.details.push({
        username : this.SignupForm.value.username,
        emails : this.SignupForm.value.email
   })
   this.SignupForm.reset();
  }
}
