import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { firebaseConfig }
from "./firebase-config.js";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const email = document.getElementById("email");

const password = document.getElementById("password");

const mensaje = document.getElementById("mensaje");

document
.getElementById("login")
.addEventListener("click", async () => {

  try {

    await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    window.location.href = "index.html";

  } catch (error) {

    mensaje.textContent =
      "Error: " + error.message;

  }

});

document
.getElementById("register")
.addEventListener("click", async () => {

  try {

    await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    mensaje.textContent =
      "Usuario creado correctamente";

  } catch (error) {

    mensaje.textContent =
      "Error: " + error.message;

  }

});
