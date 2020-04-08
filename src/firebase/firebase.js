import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCboi1-iWEdkYrNDVtKUU6Gba8-fMhRn5o",
    authDomain: "bling-a7e17.firebaseapp.com",
    databaseURL: "https://bling-a7e17.firebaseio.com",
    projectId: "bling-a7e17",
    storageBucket: "bling-a7e17.appspot.com",
    messagingSenderId: "79582842065",
    appId: "1:79582842065:web:68b90615ee6c26898c49f0",
    measurementId: "G-X67W776CL2"
}

firebase.initializeApp(firebaseConfig)

const database=firebase.database()
const googleAuthProvider= new firebase.auth.GoogleAuthProvider()

googleAuthProvider.setCustomParameters({
    prompt: 'select_account'
  });

export {firebase,googleAuthProvider,database as default}

// firebase.database().ref('expenses').push({
//     description:'Sanaya',
//     note:'none',
//     amount:500,
//     createdAt:0
// })

// firebase.database().ref('expenses').on('value',(snapshot)=>{
//     const expenses=[]
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ... childSnapshot.val()
//         })
//     })
//     console.log(expenses)
    
// })

// firebase.database().ref().on('value',(snapshot)=>{
//     console.log(`I got the name from ${snapshot.val().name}`)
    
// })

// firebase.database().ref('attributes/height').once('value').then((snapshot)=>{
//     console.log(snapshot.val())
    
// })

// firebase.database().ref().set({
//     name:'Raj Sangani',
//     isSingle:true
// })

// firebase.database().ref('attributes').set({
//     height:'6 feet',
//     weight:65
// }).then(()=>{
//     console.log('Synced')
    
// })


// firebase.database().ref('attributes/height').remove().then(
//     (data)=>{
//         console.log(data)
        
//     }
// ).catch((e)=>{
//     console.log(e)
    
// })

// firebase.database().ref().update({
//     'attributes/height':'5 10'
// })