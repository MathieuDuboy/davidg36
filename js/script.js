function Delete(id) {
  // récupérer le tableau dans localStorage.listeEnvie
  var tab_json = localStorage.getItem("listeEnvie");
  // Parser la chaine JSON en Array
  var tab_listeEnvie = JSON.parse(tab_json);
  // rechercher la valeur et si elle existe, la retirer
  var index = tab_listeEnvie.indexOf(id);
  if (index !== -1) {
      tab_listeEnvie.splice(index, 1);
  }else {
    alert('id pas présent dans listeEnvie')
  }
  // Afficher le résultat du tableau et stocker la nouvelle valeur de listeEnvie dans localStorage
  localStorage.setItem("listeEnvie",  JSON.stringify(tab_listeEnvie));
  document.getElementById("tab_listeEnvie").innerHTML = JSON.stringify(tab_listeEnvie);
  // Mettre à jour le compte d'elements dans le span
  Display();

}

function Display() {
  // récupérer le tableau dans localStorage.listeEnvie
  var tab_json = localStorage.getItem("listeEnvie");
  // Parser la chaine JSON en Array
  var tab_listeEnvie = JSON.parse(tab_json);
  // Compter les valeurs
  var taille_tab_listeEnvie = tab_listeEnvie.length;
  // Afficher le résultat dans le span "nb_listeEnvie"
  document.getElementById("nb_listeEnvie").innerHTML = taille_tab_listeEnvie;
}
