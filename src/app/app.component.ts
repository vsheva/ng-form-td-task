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
  genders = ["Male", "Female"]

  suggestUserName() {
    const suggestedName = 'Superuser';

    /* this.signup.setValue({
       userData:{
         username:suggestedName,
         email:''
       },
       secret:"pet",
       questionAnswer:"",
       gender:'male'
     })*/

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
    console.log(this.signup)
  }

}
