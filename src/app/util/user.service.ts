import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  path: '/' | undefined;
  domain: 'localhost' | undefined;
  isLoggin: boolean = false;
  constructor(private cookieService: CookieService, private router: Router) {}

  private getCookie(key: string): string {
    if (this.cookieService.check(key)) {
      return this.cookieService.get(key);
    } else {
      this.cookieService.deleteAll(this.path, this.domain, false, 'Lax');
      this.router.navigate(['/login']);
      return '';
    }
  }
  set isLogginState(state: boolean) {
    this.isLoggin = state;
  }

  get isLogginState(): boolean {
    return this.isLoggin;
  }
}
