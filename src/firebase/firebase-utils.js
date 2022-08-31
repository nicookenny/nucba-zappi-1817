import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
} from 'firebase/firestore';
import { ORDER_STATUS } from '../utils';

const app = initializeApp(firebaseConfig);

// FireStore => almacenamiento
export const firestore = getFirestore(app);

export const getOrCreateUserProfile = async userAuthenticated => {
  const userReference = doc(firestore, `users/${userAuthenticated.uid}`);

  const snapshot = await getDoc(userReference);

  if (!snapshot.exists()) {
    const { email, photoURL, displayName } = userAuthenticated;
    try {
      await setDoc(userReference, {
        name: displayName,
        email,
        photoURL,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log({ error });
    }
  }

  return snapshot;
};

export const createOrderDocument = async order => {
  const orderReference = doc(
    firestore,
    `orders/user/${order.user}/${order.id}`
  );

  const snapshot = await getDoc(orderReference);

  if (!snapshot.exists()) {
    try {
      await setDoc(orderReference, {
        ...order,
        createdAt: new Date(),
        status: ORDER_STATUS.PENDING,
      });
    } catch (error) {
      console.log({ error });
    }
  }

  return snapshot;
};

export const getFirebaseOrders = async userId => {
  const PATH = `orders/user/${userId}`;
  console.log(PATH);

  const collectionReference = collection(firestore, PATH);
  const { docs } = await getDocs(collectionReference);

  return docs.map(snap => snap.data());
};

// Auth => autenticación (login, registro, etc)
export const auth = getAuth(app);

// Crear un usuario
export const register = async (email, password) => {
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await sendEmailVerification(credentials.user, {
    url: 'http://localhost:3000',
  });

  alert(`Se envió un correo de verificación a ${email}`);
  localStorage.setItem('username', credentials.user);

  return credentials;
};

// Iniciar sesion con correo contraseña
export const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Reiniciar una pass
export const resetPassword = async email => {
  await sendPasswordResetEmail(auth, email, {
    url: 'http://localhost:3000/login',
  });
  alert(`Se envió un correo de recuperación de contraseña a ${email}`);
};

// Iniciar con google
const providerGoogle = new GoogleAuthProvider();
export const signInGoogle = () => signInWithPopup(auth, providerGoogle);
