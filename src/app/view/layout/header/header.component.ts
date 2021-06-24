import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username : string;
  constructor(
    private service : AuthService,
    private cookie : CookieService
  ) { }

  ngOnInit() {
    this.username = this.cookie.get('username');
  }

  logout(){
    this.service.logout();
  }
}
