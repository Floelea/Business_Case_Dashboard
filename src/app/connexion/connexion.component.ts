import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent implements OnInit {
  nomutilisateur!: string;
  motdepasse!: string;
  echecConnexion: boolean = false;
  constructor(private routeur: Router, private auth: AuthService) {
    if (this.auth.connecte == true) {
      this.routeur.navigate(['/stats-component']);
    }
  }

  connexionDashboard() {
    this.auth
      .login(this.nomutilisateur, this.motdepasse)
      .then((retourBoolean) => {
        if (retourBoolean) {
          this.routeur.navigate(['/stats-component']);
        } else this.echecConnexion = true;
      });
  }
  ngOnInit(): void {}
}
