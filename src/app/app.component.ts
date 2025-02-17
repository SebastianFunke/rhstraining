import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './services/firestore.service';
import { RouterOutlet } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MatSelectModule,
    MatOptionModule, RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'RHS Trainingstagebuch';

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.testFirestore();
  }

  async testFirestore() {
    const training = {
      date: new Date().toISOString(),
      team: 'Team Alpha',
      dogName: 'Rex',
      goal: 'Flächensuche'
    };

    //await this.firestoreService.addTraining(training);
    const trainings = await this.firestoreService.getTrainings();
    console.log('Gespeicherte Trainings:', trainings);
  }
}