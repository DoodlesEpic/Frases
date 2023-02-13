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
const container = document.querySelector("#container");
const fraseBtn = document.querySelector("#updateFraseBtn");
const fraseTxt = document.querySelector("#frase");

// Total de frases no backend
const numFrasesDoc = await getDoc(doc(firestore, "frases/num"));
const dados = numFrasesDoc.data();
const totalFrases = dados?.frases;

// Event handler
fraseBtn?.addEventListener("click", updateText);

// Helper que retorna número aleatório entre min e max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Atualiza o texto na página com uma frase aleatória
async function updateText() {
  // Começar a animação de troca de frase
  container?.classList.add("invisible");
  container?.classList.remove("visible");
  const ultimaUpdate = Date.now();

  // Obter frase aleatoriamente
  const frase = getRandomInt(1, totalFrases);
  const fraseDoc = await getDoc(doc(firestore, "frases/" + frase));

  // Esperar pelo menos 400ms para completar a animação
  if (Date.now() - ultimaUpdate < 400)
    await new Promise((resolve) =>
      setTimeout(resolve, 400 - (Date.now() - ultimaUpdate))
    );

  // Atualizar o texto com a nova frase
  if (fraseDoc.exists() && fraseTxt?.innerHTML)
    fraseTxt.innerHTML = fraseDoc.data().frase;

  // Finalizar a animação de troca de frase
  container?.classList.add("visible");
  container?.classList.remove("invisible");
}
