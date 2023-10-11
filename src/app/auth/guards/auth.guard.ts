
import { Injectable } from '@angular/core';
import { CanActivateFn, CanMatchFn } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard  implements CanMatchFn, CanActivateFn {

  // Aqui no se como implementar en base a las nuevas CanMatchFn, CanActivateFn
  constructor() { }

}
