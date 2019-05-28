import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private _loginUrl = "http://localhost:3000/login";
  private _registerUel = "http://localhost:3000/register";

  constructor(
    private afAuth: AngularFireAuth,
    private http: HttpClient,
  ) { }
  login() {
    console.log('Redirecting to google login provider')
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
  loginFaceBooks(){
    console.log('Redirecting to facebook login provider')
    this.afAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider());
  }

  logout() {
    console.log('logouting..')
    this.afAuth.auth.signOut()
  }
  getLoggedInUser() {
    return this.afAuth.authState;
  }
  loginuser(user){
    return this.http.post<any>(this._loginUrl, user)
  }
  registerUser(user){
    return this.http.post<any>(this._registerUel, user)
  }
}
