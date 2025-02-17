import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

import { routes  } from './app.routes';





export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withComponentInputBinding()), 
    provideFirebaseApp(() => 
      initializeApp({ projectId: "rhs-training", appId: "1:937238967202:web:7335ca9fdc1d7b5105f8fb", storageBucket: "rhs-training.firebasestorage.app", apiKey: "AIzaSyBRlDa7ad3H80rMZd4MkPQHMxR-_y2KPzw", authDomain: "rhs-training.firebaseapp.com", messagingSenderId: "937238967202" })), 
    provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), 
    provideDatabase(() => getDatabase()),
    
  ]
};
