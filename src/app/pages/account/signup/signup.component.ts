import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  submitted = false; 
   movieCollection: any =
     [
      { name: '1900', selected: false, disabled: false },
      { name: '1926', selected: false, disabled: false },
      { name: 'Hazmat', selected: false, disabled: false },
      { name: 'FMCSR', selected: false, disabled: false },
    ];  

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password : ['', Validators.required],
      book: this.formBuilder.array([])
    });
  
    
    this.form.markAsTouched();
  }

  ngOnInit(): void {
    
  }
  change() {
    console.log(this.form.value);
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return
    } 

    console.log("Name :- " + JSON.stringify(this.form.value))

  }

  get f() { return this.form.controls; }
}
