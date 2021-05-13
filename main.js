'use strict';

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

// Liste des photos de mon sélecteur
let photolist;

// variable représentant le nombre de photos sélectionné
let totalSelected = 0;


let totalEm;


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function onSelectPhoto()
{
    // Récupérer la photo sur laquelle on a cliqué
    
    // this => élément sur lequel a été déclenché l'événement
    console.log(this);
    
    // Ajout/ retrait (avec toggle) de la classe selected à l'élément sur lequel on a cliqué
    this.classList.toggle("selected");
    
    
    
    // 1ère solution: si la classe est selectionné on ajoute 1 sinon on retire 1 au total
    console.log(this.classList.contains("selected"));
    
    // Si l'élément li contient la classe "selected" (si il vient d'être selectionner)
    if (this.classList.contains("selected")) {
        // on incrémente le total (+1)
        totalSelected++;
    } else {
        // sinon on décrémente le total (-1)
        totalSelected--;
    }
    
    totalEm.textContent = totalSelected;
    
    // 2ème solution :  récupérer tout les li de photolist qui ont la classe "selected"
    totalSelected = document.querySelectorAll("#photolist li.selected").length;
    
    totalEm.textContent = totalSelected;
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

document.addEventListener('DOMContentLoaded', function () {
    // Recherche des éléments avec document.querySelector et mise en place des événements
    
    // ici on dit que notre variable em correspond au html li qui est dans l'id "#total"
    totalEm = document.querySelector("#total em");
    
    // Récupérer tous les li de photolist
    photolist = document.querySelectorAll('#photolist li');
    
    // Mise en place d'un événement sur chacun des éléments html contenus dans le tableau
    for (let i = 0; i < photolist.length; i++) {
        photolist[i].addEventListener('click', onSelectPhoto);
    }
    
    
    
});