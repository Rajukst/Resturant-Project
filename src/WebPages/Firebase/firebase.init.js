import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialApp = () => {
  initializeApp(firebaseConfig);
};
export default initialApp;
