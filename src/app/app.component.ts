import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signup:NgForm  //!!passing "f" as string

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

 /* onSubmit(form:NgForm) {
    console.log(form)
  }*/

  onSubmit() {
  console.log(this.signup)
  }

}
