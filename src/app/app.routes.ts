import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

// Importiere deine Komponenten
import { TeamsComponent } from './components/teams/teams.component';

// Definiere die Routen
export const routes: Routes = [
  { path: 'teams', component: TeamsComponent } // Teams-Seite
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()), // Hash-Modus aktivieren
    provideAnimations(),
  ]
};
