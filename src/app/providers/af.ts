import {Injectable} from "@angular/core";
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import * as firebase from 'firebase/app'; 


@Injectable()
export class AF {
  
  public characters: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;

  public messages: FirebaseListObservable<any>;

  constructor(public db: AngularFireDatabase,public  afAuth: AngularFireAuth) {
     db.database.goOnline;
     afAuth.authState;
     this.characters = this.db.list('chracters');
     this.messages = this.db.list('messages');
  }
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
     return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  /**
   * Logs out the current user
   */
  logout() {
    return this.afAuth.auth.signOut();
  }
  saveCharacter(character){
      this.characters.push(character);
  }

    /**
   * Saves a message to the Firebase Realtime Database
   * @param text
   */
  sendMessage(text) {
    var message = {
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: Date.now()
    };
    this.messages.push(message);
  }


}