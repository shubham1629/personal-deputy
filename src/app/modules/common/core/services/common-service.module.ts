import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http/http.service';
import { FirebaseService } from './firebase/firebase.service';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCdCXe477Z7Iep5cIfJshVljhq25Cu1G8U",
    authDomain: "deputy-828e0.firebaseapp.com",
    projectId: "deputy-828e0",
    storageBucket: "deputy-828e0.appspot.com",
    messagingSenderId: "171465067642",
    appId: "1:171465067642:web:d275479e4cfc4aad75ffc3",
    measurementId: "G-RNZE6XDB6G"
  };


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    provideFirebaseApp(()=>initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    HttpService,
    FirebaseService
  ]
})
export class CommonServiceModule { }
