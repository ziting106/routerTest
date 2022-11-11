import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //宣告acct，pwd去接html[(ngModel)]的value
  public acct: string | undefined;
  public pwd: string | undefined;
  public login() {
    //回傳資料給後端做確認
    //我們先做個假資料，可以判斷 登入成功 或 登入失敗
    let username = 'aaa';
    let userpwd = 'bbb';

    if (this.acct == username && this.pwd == userpwd) {
      this.router.navigate(['home']);
      alert('登入成功');
    } else {
      alert('登入失敗');
      this.acct = '';
      this.pwd = '';
    }
  }
  constructor(private router: Router, private cookieService: CookieService) {}

  ngOnInit(): void {}
}
