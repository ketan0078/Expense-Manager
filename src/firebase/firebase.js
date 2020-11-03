import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDHVpITEerQk-MWjmHCYs1qctoPlI8YNP8",
    authDomain: "expensify-5a0cf.firebaseapp.com",
    databaseURL: "https://expensify-5a0cf.firebaseio.com",
    projectId: "expensify-5a0cf",
    storageBucket: "expensify-5a0cf.appspot.com",
    messagingSenderId: "1048290860137",
    appId: "1:1048290860137:web:1249cf9ff2cea11d05d6f8",
    measurementId: "G-V4Z0L36Z0S"
  };

  firebase.initializeApp(firebaseConfig);

const database=firebase.database()

const googleauthprovider=new firebase.auth.GoogleAuthProvider()

export {firebase,googleauthprovider,database as default}
//   firebase.database().ref().set({
//       name:'SOHAN',
//       age:18,
//       istaken:false,
//       location:{
//           city:'khamgaon'
//       }

//   })
//   firebase.database().ref('location/city').set('mumbai')
//   firebase.database().ref('height').set(7.8)\

// database.ref('age').remove()
// database.ref('job').set('amazon')
// database.ref('title').set('boss')
// // database.ref().update({

// // })

// // database.ref().update({'location/city':'mumbai',
// // age:19})

// database.ref().on('value',(snapshot)=>{
//     console.log(`sohan is ${snapshot.val().title} at ${snapshot.val().job}`)
// })


// setTimeout(()=>{
// database.ref().update({
//     'location/city':'pune'
// })
// },6000)

// database.ref('expenses').push({
//     description:'expenses calculator',
//     note:'woi',
//     amount:908,
//     createdAt:69
// })

// database.ref('expenses').on('value',(snapshot)=>{
//   const expenses=[]
//   snapshot.forEach((childss)=>{
//     expenses.push({
//       id:childss.key,
//       ...childss.val()
//     })
    
//   })
//   console.log(expenses)
// })





