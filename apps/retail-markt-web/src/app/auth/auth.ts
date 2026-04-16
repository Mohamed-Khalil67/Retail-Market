import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth = inject(Auth);
  currentUser$ = user(this.auth);

  async login(email: string, password: string){
    try {
      const result = await signInWithEmailAndPassword(this.auth, email, password);
      return result.user;
    } catch (e) {
      console.error('Login error:', e);
      throw e;
    }
  }

  async signup(email: string, password: string) {
    try {
      const result = await createUserWithEmailAndPassword(this.auth, email, password);
      return result.user;
    } catch (e) {
      console.error('Sign up error:', e);
      throw e;
    }
  }

  async googleSignIn() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      return result.user;
    } catch (e) {
      console.error('Google sign-in error:', e);
      throw e;
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
    } catch (e) {
      console.error('Logout error:', e);
      throw e;
    }
  }
}
