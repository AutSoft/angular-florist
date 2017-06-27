import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  isLoading = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.isLoading = true;
    this.authService.register(this.username, this.password).subscribe(
      () => {
        console.log('registered');
        this.isLoading = false;
      },
      () => this.isLoading = false
    );
  }

}
