const display = document.getElementById("display"); // On récupère l’élément display une seule fois pour éviter de répéter le code
 
// Fonction pour ajouter un nombre ou un opérateur
function insert(input){ 
    // On ajoute la valeur sans effacer ce qui est déjà affiché
    display.value += input; 
} 
 // Fonction pour effacer tout l’écran
function clearDisplay(){ 
    display.value = ""; 
} 
 // Fonction pour changer le signe du nombre
function toggleSign(){ 
    // On multiplie par -1 pour inverser le signe
    display.value = - display.value; 
} 
 // Fonction pour supprimer le dernier caractère
function Del(){ 
     // slice permet de retirer le dernier élément
    display.value = display.value.slice(0,-1); 
} 
 
function calculate(){ 
        try{ 
            // eval permet d’évaluer l’expression mathématique saisie
        display.value = eval(display.value) 
    } 
    catch(error){ 
         // En cas d’erreur (ex: expression invalide)
        display.value = "Error"; 
        // On efface après un court délai pour permettre à l’utilisateur de recommencer
        setTimeout(clearDisplay, 1500); 
    } 
} 
// Fonction racine carrée
function RC(){
      // Conversion en nombre pour permettre le calcul
    let value = parseFloat(display.value);

     // Si aucune valeur valide, on affiche un message
    if(isNaN(value)){
        display.value = "Error";
    }
    // On empêche la racine carrée des nombres négatifs
    else if(value< 0){
        display.value = "Error"; 
    } 
    // Utilisation de la fonction native pour calculer la racine
    else{
        display.value = Math.sqrt(value);
    }
}