import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

export const canActivatePage: CanActivateFn =
  async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router: Router = inject(Router);
    return await inject(UserService).canActivate() || router.navigateByUrl('login');
  };
