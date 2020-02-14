import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
//import { User } from "../../model/user";
import { UserService } from "../../services/user.service";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['registration.component.css']
})
export class RegistrationComponent implements OnInit {
    registrationForm: FormGroup;
    constructor(@Inject(FormBuilder) private fb: FormBuilder,public userService:UserService) {
        //console.log(this.registrationForm.value);
       
    }

    ngOnInit() {
        this.registrationForm = this.fb.group({
            username: [null, [Validators.required, Validators.pattern('[a-zA-Z]+')]],
            password: [null, [Validators.required, Validators.minLength(6)]],
            confirmpassword: [null, [Validators.required, Validators.minLength(6)]],
            email: [null, [Validators.required, Validators.email]],
            mobileNumber: [null, [Validators.required, Validators.pattern('[0-9]+')]],
            address: [null, [Validators.required]]
        });
    }
    
    get contorls() {
        return this.registrationForm.controls;
    }
   
    submitRegistrationForm(Obj): void {
        console.log("this is from registartion component")
        console.log(Obj);
        this.userService.registerUser(Obj).subscribe((res) => {
            console.log(res);
            console.log("data updates in json");
        })
       console.log(this.registrationForm.valid);
    }

    resetForm(): void {
        console.log(this.registrationForm.reset());
    }
}