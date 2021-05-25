import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Build } from '../model/build';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  userId: string;

  constructor(
    private db: AngularFirestore,
    private authService: AuthService
  ) {
    this.authService.getCurrentUser().subscribe(
      data => this.userId = data.uid
    );
  }

  public addBuild(build: Build): Promise<DocumentReference> {
    return this.db.collection('users/' + this.userId + '/builds').add(build);
  }

  public deleteBuildById(id: number): Promise<void> {
    return this.db.collection('users/' + this.userId + '/builds').doc(''+id).delete();
  }

  public updateBuildById(id: string, build: Build): Promise<void> {
    return this.db.collection('users/' + this.userId + '/builds').doc(id).set(build);
  }

  public getBuildById(id: string): Observable<Build> {
    return this.db.collection('users/' + this.userId + '/builds').doc<Build>(id).valueChanges();
  }

  public getBuilds(): Observable<Build[]> {
    return this.db.collection<Build>('users/' + this.userId + '/builds').snapshotChanges()
      .pipe(
        map(
          snaps => snaps.map(
            snap => <Build>{
              buildId: snap.payload.doc.id,
              ...snap.payload.doc.data()// as Build
            }
          )
        )
      );
  }
}
