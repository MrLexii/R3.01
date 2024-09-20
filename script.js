//Partie 1

// EX1
let titre = document.getElementById('titre')
titre.textContent="Convertisseur"
let ex1 = document.getElementById('ex1')
convertisseur = 18
//convertisseur = prompt("votre degres en Celsius ? ", 0)
ex1.textContent += " " + (convertisseur * (9/5) +32)


//EX2
let titre2 = document.getElementById('titre2')
titre2.textContent="Calcul aire"
let ex2 = document.getElementById("ex2")
longueur = 1
largeur = 2
//longueur = prompt("longueur : ", 1)
//largeur = prompt("largeur :", 2)
ex2.textContent += " " +(longueur * largeur)


//EX3
let titre3 = document.getElementById('titre3')
titre3.textContent="Calcul taxe"
let ex3ht = document.getElementById("ex3ht")
let ex3ttc = document.getElementById("ex3ttc")
let ex3tva = document.getElementById("ex3tva")
ht=100
ttc=0
tva=1.2
//ht = prompt("ht : ", 100)
//tva = prompt("tva : (ex:20% = 1.2)", 1.2)
ex3ht.textContent += " " + ht
ex3tva.textContent += " " + tva
ex3ttc.textContent += " " + ht*tva


//EX4
let titre4 = document.getElementById('titre4')
titre4.textContent="Concatenation nom+prenom"
let ex4pre = document.getElementById("ex4pre")
let ex4nom = document.getElementById("ex4nom")
let ex4conca = document.getElementById("ex4conca")
pre = "Jean-Francois"
nom = "Anne"
//pre = prompt("Prenom : ", "Jean-Francois")
//nom = prompt("Nom :", "Anne ")
ex4pre.textContent += " " + pre
ex4nom.textContent += " " + nom
ex4conca.textContent += " " + nom + " " +pre


//EX6
let titre6 = document.getElementById('titre6')
titre6.textContent="Calcul IMC"
let ex6 = document.getElementById("ex6")
let ex6poids = document.getElementById("ex6poids")
let ex6taille = document.getElementById("ex6taille")
poid = 83.5
taille = 1.85
//poid = prompt("poids : ", 83.5)
//taille = prompt("taille : (en Metre)", 1.85)
ex6poids.textContent += " " + poid
ex6taille.textContent += " " + taille
imc = poid / (taille*taille)
ex6.textContent += " " + imc.toFixed(2)


//EX7
let titre7 = document.getElementById('titre7')
titre7.textContent="Calcul commande"
let ex7 = document.getElementById("ex7")
let ex7minprix = document.getElementById("ex7minprix")
let ex7totalprix = document.getElementById("ex7totalprix")
minprix = 20
totalprix = 18
ex7minprix.textContent += " " + minprix
ex7totalprix.textContent += " " + totalprix
livraison = "Livraison Gratuite !"
if (totalprix < minprix){
    livraison = "Frais de Livraison : 100 Euros"
}
ex7.textContent += " " + livraison


//EX8
let titre8 = document.getElementById('titre8')
titre8.textContent="Convertisseur Binaire -> Décimal"
let ex8bi = document.getElementById("ex8bi")
let ex8de = document.getElementById("ex8de")
bi = "0100101110"
//bi = prompt("Binnaire :", "0o100101110")
ex8bi.textContent += " " + bi
ex8de.textContent += " " + parseInt(bi,2)





//Partie 2

//EX1
let titre2_1 = document.getElementById('titre2_1')
titre2_1.textContent="Objet Personne"
const perso = {pre:"noé",nom:"pisonel",age:"25",ville:"praz-de-lys"}
let ex2_1 = document.getElementById("ex2_1")
ex2_1.textContent += " Prenom: " + perso.pre +  ", Nom: " + perso.nom + ", Age: " + perso.age + ", Ville: " + perso.ville 

//EX2
let titre2_2 = document.getElementById('titre2_2')
titre2_2.textContent="Tab Personne"
let ex2_2 = document.getElementById("ex2_2")
const tabperso = [
     {prenom: "John", nom: "Doe", age: 25, ville: "Rouen"},
     {prenom: "Jane", nom: "Doe", age: 30, ville: "Paris"},
     {prenom: "Jim", nom: "Doe", age: 35, ville: "Caen"}
]
ex2_2.textContent += " Prenom: " + tabperso[0].prenom +  ", Nom: " + tabperso[0].nom + ", Age: " + tabperso[0].age + ", Ville: " + tabperso[0].ville 
ex2_2.textContent += " // Prenom: " + tabperso[1].prenom +  ", Nom: " + tabperso[1].nom + ", Age: " + tabperso[1].age + ", Ville: " + tabperso[1].ville 
ex2_2.textContent += " // Prenom: " + tabperso[2].prenom +  ", Nom: " + tabperso[2].nom + ", Age: " + tabperso[2].age + ", Ville: " + tabperso[2].ville 


//EX3
let titre2_3 = document.getElementById('titre2_3')
titre2_3.textContent="Tab Personne + 1"
let ex2_3 = document.getElementById("ex2_3")
tabperso.push({prenom: " Marc", nom: "Doe", age: 32, ville: "Marseille"})
ex2_3.textContent += " Prenom: " + tabperso[3].prenom +  ", Nom: " + tabperso[3].nom + ", Age: " + tabperso[3].age + ", Ville: " + tabperso[3].ville 


//EX4
let titre2_4 = document.getElementById('titre2_4')
titre2_4.textContent="Tab Personne modifier"
let ex2_4 = document.getElementById("ex2_4")
tabperso[0].prenom = "Jean"
ex2_4.textContent += " Prenom: " + tabperso[0].prenom +  ", Nom: " + tabperso[0].nom + ", Age: " + tabperso[0].age + ", Ville: " + tabperso[0].ville
tabperso.splice(2)
ex2_4.textContent += " // Objet 2 Supprimer"


//EX5
let titre2_5 = document.getElementById('titre2_5')
titre2_5.textContent="Tableau de Chiffre"
let ex2_5 = document.getElementById("ex2_5")
const tableau = [1,2,3,4,5,6,7,8,9,10]
ex2_5.textContent += " premier : " + tableau[0] + " dernier : " + tableau[9] + " longueur : " + tableau.length


//EX6
let titre2_6 = document.getElementById('titre2_6')
titre2_6.textContent="Tableau de Chiffre 2"
let ex2_6 = document.getElementById("ex2_6")
let ex2_62 = document.getElementById("ex2_62")
const tableau2 = [10,20,30,40,50,60,70,80,90,100]
for(let i = 0 ; i < 10 ; i++){
    ex2_6.textContent += " " + tableau2[i]
}
tableau2.reverse()
for(let i = 0 ; i < 10 ; i++){
    ex2_62.textContent += " " + tableau2[i]
}


//EX7
let titre2_7 = document.getElementById('titre2_7')
titre2_7.textContent="Numbers"
let ex2_7 = document.getElementById("ex2_7")
let ex2_72 = document.getElementById("ex2_72")
const number = [2,5,1,9,0,3,7,4,6,8]
for(let i = 0 ; i < 10 ; i++){
    ex2_7.textContent += " " + number[i]
}
number.sort()
for(let i = 0 ; i < 10 ; i++){
    ex2_72.textContent += " " + number[i]
}


//EX8
let titre2_8 = document.getElementById('titre2_8')
titre2_8.textContent="Numbers2"
let ex2_8 = document.getElementById("ex2_8")
let ex2_82 = document.getElementById("ex2_82")
let ex2_83 = document.getElementById("ex2_83")
const number2 = [2,5,1,9,0,3,7,4,6,8]
number2.sort()
number2.push(11)
for(let i = 0 ; i < 11 ; i++){
    ex2_8.textContent += " " + number2[i]
}
number2.unshift(0)
for(let i = 0 ; i < 12 ; i++){
    ex2_82.textContent += " " + number2[i]
}
number2.pop()
for(let i = 0 ; i < 11 ; i++){
    ex2_83.textContent += " " + number2[i]
}