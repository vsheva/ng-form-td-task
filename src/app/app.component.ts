import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupF: NgForm  //singup -is fetched directly from template NGForm with @ViewChild // is !!passing "f" as string

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
    this.signupF.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });

  }

  /* onSubmit(form:NgForm) {
     console.log(form)
   }*/

  onSubmit() {
    this.submited= true;
    this.user.username = this.signupF.value.userData.username; //после равно - из HTML!!!
    this.user.mail = this.signupF.value.userData.email;
    this.user.secretQuestion = this.signupF.value.secret;
    this.user.answer = this.signupF.value.questionAnswer;
    this.user.gender = this.signupF.value.gender;

    this.signupF.reset()
  }
}
