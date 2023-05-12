import { initializeApp } from "firebase/app";

const firebaseConfig = getFirebaseConfig();

export function getFirebaseConfig() {
  return {
    apiKey: process.env.NEXT_PUBLIC_apiKey,
    authDomain: process.env.NEXT_PUBLIC_authDomain,
    projectId: process.env.NEXT_PUBLIC_projectId,
    storageBucket: process.env.NEXT_PUBLIC_storageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
    appId: process.env.NEXT_PUBLIC_appId,
  };
}

export const app = initializeApp(firebaseConfig);
