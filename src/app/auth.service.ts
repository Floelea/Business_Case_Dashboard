import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

type DonneesLoginServeur = {
  token: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public connecte!: boolean;
  connecteStorage: string;
  private token: string = '';

  constructor(private http: HttpClient) {
    this.connecteStorage = localStorage.getItem('connecte')!;
    if (this.connecteStorage == null) {
      localStorage.setItem('connecte', 'false');
      this.connecte = false;
    } else {
      this.connecte = localStorage.getItem('connecte') == 'true';
    }
  }
  login(email: string, password: string): Promise<boolean> {
    return this.http
      .post(
        'https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/' + 'login',
        JSON.stringify({
          email: email,
          password: password,
        })
      )
      .toPromise()
      .then(
        (data) => {
          let donneesServeur = data as DonneesLoginServeur;
          this.token = donneesServeur.token;
          this.connecte = true;
          localStorage.setItem('connecte', 'true');
          console.log(data);
          return true;
        },
        (err) => {
          this.logout();
          return false;
        }
      );
  }
  logout() {
    this.connecte = false;
    localStorage.setItem('connecte', 'false');
  }

  getStats() {
    const httpOptions = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token,
      }),
    };
  }
}
