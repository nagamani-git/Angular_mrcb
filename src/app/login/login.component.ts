import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, FormControl,Validators} from "@angular/forms"
import { UserService } from "../../services/user.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    [x: string]: any;
    loginForm: FormGroup;
    constructor(@Inject(FormBuilder) private fb: FormBuilder,public userService:UserService ) {
        this.buildForm();
        console.log(this.loginForm.value);
    }

    buildForm(){
        this.loginForm = this.fb.group({
            username:[null,[
                    Validators.required,
                    Validators.pattern('[a-zA-Z]+')
                ]
            ],
            password:[null,[Validators.required,
                Validators.minLength(6)]]
        });
    }
    get username():FormControl{
return this.loginForm.get('username') as FormControl
    }
    get password():FormControl{
        return this.loginForm.get('password') as FormControl
            }

    submitForm(obj):void{
        console.log("from login submit method");
        console.log(obj);
        console.log(obj.username);
        console.log(obj.password);

        this.userService.validateUser(obj).subscribe((res) => {
            console.log(res);
            console.log("user valid");
        })
    }

    resetForm():void{
        console.log(this.loginForm.reset());
    }
}