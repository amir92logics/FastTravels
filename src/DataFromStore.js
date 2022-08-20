
import React, { Component } from 'react'
import db from "./firebaseConfig";
import { collection, addDoc, Timestamp, orderBy, query, onSnapshot, doc, setDoc } from 'firebase/firestore'


export default class DataFromStore extends Component {
    componentDidMount() {
        const q = query(collection(db, 'FaresData'))
        onSnapshot(q, (querySnapshot) => {
            let res = querySnapshot.docs.map(doc => {
                console.log(doc.data().Data);
            })
            this.setState({ data: res });
        })


    }

  render() {
    return (
      <div>DataFromStore</div>
    )
  }
}
