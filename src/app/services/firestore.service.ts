import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, CollectionReference, DocumentData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private trainingsCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.trainingsCollection = collection(this.firestore, 'trainings'); // Firestore-Sammlung
  }

  // Training speichern
  async addTraining(training: any): Promise<void> {
    try {
      await addDoc(this.trainingsCollection, training);
      console.log('Training gespeichert:', training);
    } catch (error) {
      console.error('Fehler beim Speichern:', error);
    }
  }

  // Alle Trainings abrufen
  async getTrainings(): Promise<any[]> {
    const snapshot = await getDocs(this.trainingsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}
