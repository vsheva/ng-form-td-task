import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signup: NgForm  //!!passing "f" as string

  defaultQ = "teacher";
  answer: "";
  genders = ["Male", "Female"];
  user = {
    username: '',
    mail: "",
    secretQuestion: "",
    answer: "",
    gender: "",
  };
  submited = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    //set whole form!!!
    /*  this.signup.setValue({
        userData:{
          username:suggestedName,
          email:''
        },
        secret:"pet",
        questionAnswer:"",
        gender:'male'
      })*/

    //set part of the form!!!
    this.signup.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });

  }

  /* onSubmit(form:NgForm) {
     console.log(form)
   }*/

  onSubmit() {
    this.user.username = this.signup.value.userData.username; //после равно - из HTML!!!
    this.user.mail = this.signup.value.userData.email;
    this.user.secretQuestion = this.signup.value.secret;
    this.user.answer = this.signup.value.questionAnswer;
    this.user.gender = this.signup.value.gender;
  }
}
