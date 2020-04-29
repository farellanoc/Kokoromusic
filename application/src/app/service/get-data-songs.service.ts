import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class GetDataSongsService {

    constructor(private firestore: AngularFirestore) { }

    getSongs() {
        return this.firestore.collection('Canciones').snapshotChanges();
    }
}