import app from "./firebaseconfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue, push } from "firebase/database";

const auth = getAuth(app);
const database = getDatabase(app);

let signUpUser = (obj) => {
    const { email, password, userName, contact } = obj
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // user successfully registered
                const user = userCredential;
                const refrence = ref(database, `users/${user.uid}`);
                push(refrence, obj).then(() => { resolve("user created succesfully") }).catch((errr) => { reject(errr) })
            })
            .catch((err) => { reject(err) })
    })

};

let loginUser = (obj) => {
    let { email, password } = obj;
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          const reference = ref(database, `users/${user.uid}`);
          onValue(reference, (e) => {
            // let status = e.exists();
            // console.log(status);
            console.log(e.val());
            resolve(e.val())
            // if (status) {
            //   resolve(e.val());
            // } else {
            //   reject("Data Not Found :(");
            // }
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          reject(errorMessage);
        });
    })

};
export { signUpUser, loginUser };