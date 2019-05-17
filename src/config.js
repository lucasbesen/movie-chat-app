export const firebase = {
  apiKey: "AIzaSyDfd2xXSdeKGcSmPsI19HIIwJUphg7LCyo",
  authDomain: "movie-application-9bd10.firebaseapp.com",
  databaseURL: "https://movie-application-9bd10.firebaseio.com",
  projectId: "movie-application-9bd10",
  storageBucket: "movie-application-9bd10.appspot.com'",
  messagingSenderId: "513600064520"
};

export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Store in Firestore instead of Real Time DB
  enableLogging: false
};

export default { firebase, rrfConfig }
