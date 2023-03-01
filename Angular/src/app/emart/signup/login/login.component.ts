import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';

import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  errorMessage: string;
  username: string;
  password: string;
  currentBuyer: any;
  buyer: boolean;
  constructor(protected emartService: EmartService, protected router: Router, protected activatedRoute: ActivatedRoute,
    protected loginService: LoginService) {
     }
  ngOnInit(): void {
    this.errorMessage = "";
  }
  validate() {

      this.emartService
        .validateBuyer(this.username, this.password)
        .subscribe(
          (response) => {
            this.currentBuyer = response;
            this.emartService.setBuyerAndBills(this.currentBuyer);

            if (this.currentBuyer.id != 0) {
              this.loginService.loginBuyer(this.currentBuyer.id);
              sessionStorage.setItem('key', 'true');//storing session storage item as true for login nav bar stability
              sessionStorage.setItem('auth', 'true');
              this.router.navigate(['']);
              this.emartService.getAllBills();
              this.emartService.getCurrentBuyer();
              // console.log("getcurrentbiyer call: " + JSON.stringify(this.emartService.getCurrentBuyer()));
              // console.log(" login comp : " +  JSON.stringify(this.currentBuyer));
            }
            else {
              this.errorMessage = "Invalid username/password";
            }
          }
        );
    
  }
}






