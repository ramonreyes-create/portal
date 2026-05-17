import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged,
  signOut
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { firebaseConfig }
from "./firebase-config.js";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

onAuthStateChanged(auth, user => {

  if (!user) {

    window.location.href = "../login.html";

  }

});

const logoutBtn =
  document.getElementById("logout");

if (logoutBtn) {

  logoutBtn.addEventListener(
    "click",
    async () => {

      await signOut(auth);

      window.location.href =
        "../login.html";

    }
  );

}
