//le code javascript
const boutton = [...document.querySelectorAll(".bouton")];
const listekeycode = boutton.map((bouttons) => bouttons.dataset.key);
const ecran = document.querySelector(".ecran");
document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  calculer(valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  calculer(valeur);
});
const calculer = (valeur) => {
  if (listekeycode.includes(valeur)) {
    switch (valeur) {
      case "8":
        ecran.textContent = "";
        break;
      case "187":
        const calcul = eval(ecran.textContent);
        ecran.textContent = calcul;
        break;
      default:
        const indexkeycode = listekeycode.indexOf(valeur);
        const touche = boutton[indexkeycode];
        ecran.textContent += touche.innerHTML;
        break;
    }
  }
};
window.addEventListener("error", (e) => {
  alert("erreur!!! : " + e.message);
});
