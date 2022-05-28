//document.getElementById("idmain").textContent = "novo texto";
//document.querySelector("#idmain").textContent = "tudo certo";
(function () {
  const nomeUsuario = "Endrich";
  document.querySelector(".top-bar p").textContent += 
  " " + nomeUsuario;
})();

/*(function () {
  const nomeUsuario = "Endrich";
  document.querySelector(".top-bar p").innerHTML +=
    " " + "<b>" + nomeUsuario + "</b>";
})();*/

/*(function () {
  const nomeUsuario = null;
  const elemento = document.querySelector(".top-bar p");
  if (nomeUsuario) {
    elemento.innerHTML += " " + "<b>" + nomeUsuario + "</b>";
  } else {
    elemento.parentElement.style.display = "none";
  }
})();*/

/*(function () {
  const nomeUsuario = null;
  const elemento = document.querySelector(".top-bar p");
  if (nomeUsuario) {
    elemento.innerHTML += " " + "<b>" + nomeUsuario + "</b>";
  } else {
    //elemento.remove();

    //removendo o filho
    const elementoParaRemover = elemento.parentElement;
    elementoParaRemover.parentElement.removeChild(elementoParaRemover);
  }
})();*/
