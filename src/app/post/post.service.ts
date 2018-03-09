import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Post } from './post.model';

@Injectable()
export class PostService {
  postCollection: AngularFirestoreCollection<Post>

  constructor(private afs: AngularFirestore) {
    this.postCollection = this.afs.collection('post', ref =>
      ref.orderBy('claps', 'desc').limit(10)
    )
  }

  create(data: Post) {
    return this.postCollection.add(data)
  }

}
