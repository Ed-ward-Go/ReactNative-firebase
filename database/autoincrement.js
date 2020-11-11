
const firedb = firebase.firestore(); 
const increment = firebase.firestore.FieldValue.increment(1);
const decrement = firebase.firestore.FieldValue.decrement(-1);

const autoRef = db.collection('usuarios').doc(autoIncrementable);
autoRef.update({count: increment});
autoRef.update({count: decrement});