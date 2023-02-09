import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
import "./styles.scss";

// Inicializar Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCwjqBBW4mVV7m4NDqrLyd4PAtSaLwN23I",
  authDomain: "frases-7f8cb.firebaseapp.com",
  databaseURL: "https://frases-7f8cb.firebaseio.com",
  projectId: "frases-7f8cb",
  storageBucket: "frases-7f8cb.appspot.com",
  messagingSenderId: "192789687047",
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// State
const fraseBtn = document.querySelector("#updateFraseBtn");
const fraseTxt = document.querySelector("#frase");

// Total de frase no backend
const numFrasesDoc = await getDoc(doc(firestore, "frases/num"));
const dados = numFrasesDoc.data();
const totalFrases = dados.frases;

// Event handler
fraseBtn.addEventListener("click", updateText);

// Helper que retorna número aleatório entre min e max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Atualiza o texto na página com uma frase aleatória
async function updateText() {
  const frase = getRandomInt(1, totalFrases);
  const fraseDoc = await getDoc(doc(firestore, "frases/" + frase));
  if (fraseDoc.exists) {
    const dados = fraseDoc.data();
    fraseTxt.innerHTML = dados.frase;
  }
}
