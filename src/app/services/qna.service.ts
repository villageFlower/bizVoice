import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class QnaService {

  constructor(private firestore: AngularFirestore) { }

  getAllUCQnA(cate){
    return this.firestore.collection('ucqnaCollection', ref => ref.where("cate", "==", cate)).valueChanges({idField:'id'})
  }

  getOneUCQnA(id){
    return this.firestore.collection('ucqnaCollection').doc(id).valueChanges()
  }

  setqnaID(id){
    localStorage.setItem('qnaID',id)
  }
}
