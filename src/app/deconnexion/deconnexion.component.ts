import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css'],
})
export class DeconnexionComponent implements OnInit {
  constructor(private routeur: Router, private auth: AuthService) {}
  deconnexionDashboard() {
    this.auth.logout();
    this.routeur.navigate(['/connexion-component']);
  }
  ngOnInit(): void {}
}
