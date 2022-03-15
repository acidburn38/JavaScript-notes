//* ---Les types
Number
BigInt
String
Boolean
Symbol
Object 
    Function    
    Array
    Date
    RegExp
null
undefined



//* ---Les variables
var nom = "Hurlet";
// Variable disponible partout
let prenom = "Laure";
// Variables qui pourront être utilisées dans un bloc
// Uniquement disponible dans le bloc qui contient la déclaration
const pet = "Patti";
// Variables dont la valeur ne doit pas changer
// Une variable déclarée avec const est disponible dans le bloc dans lequel elle est déclarée



//* ---Opérateurs
// Opérateur Math permet de supprimer le nombre après la virgule
console.log(Math.floor(3 / 2)); // 1

// Convertir une chaine de caractère en nombre !le second paramètre determine la base 10
parseInt("123", 10); // 123
parseInt("010", 10); //10

// Determiner la longueur d'une chaine de caractère
"bonjour".length; // 7

// Trouver le premier caratère dans une chaine string
"bonjour".charAt(0); // "b"

// Remplacer une chaine de caractère par une autre
"coucou monde".replace("coucou", "bonjour"); // "bonjour monde"

// Convertir la chaine en lettre capitale
"bonjour".toUpperCase(); // "BONJOUR"

// Convertir la chaine en lettre minuscule
"HELLO".toLowerCase(); // "hello"



//* ---Les boucles



//* ---les objets
// Déclarer un objet
let obj1 = new Object();
let obj2 = {};
let obj = {
    name: 'Carotte',
    _for: 'Max', // Le mot "for" est un mot réservé, utilisez plutôt "_for"
    details: {
      color: 'orange',
      size: 12
    }
};
// Accéder aux prorpiétés de l'objet.
obj.details.color; // orange
obj['details']['size']; // 12

// Créer un prototype d'objet
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Définir un objet
let you = new Person('You', 24);
// Nous créons une nouvelle personne nommée "You" âgée de 24 ans

// Notation par points
obj.name = 'Simon';
let name = obj.name;

// Notation entre crochets
obj['name'] = 'Simon';
let name2 = obj['name'];
// On peut utiliser une variable pour définir une clé
let user = prompt('quelle clé ?');
obj[user] = prompt('quelle valeur ?');



//* ---Les tableaux
let a = new Array();
a[0] = "chien";
a[1] = "chat";
a[2] = "poule";
a.length; // 3

let b = ["chien", "chat", "poule"];
b.length; // 3

let c = ["chien", "chat", "poule"];
c[100] = "renard";
c.length // 101

// Boucle dans un array
for (let i = 0; i < a.length; i++) {
    // Faire quelque chose avec a[i]
}

for (const currentValue of a) {
    // Faire quelque chose avec currentValue
}

['chien', 'chat', 'poule'].forEach(function(currentValue, index, array) {
    // Faire quelque chose avec currentValue ou array[index]
});

// Méthodes array
a.push(item); // Ajouter un élément à un tableau
a.toString() // Renvoie une chaîne composée des différents éléments auxquels on a appliqué toString(), séparés par des virgules.
a.concat(item1[, item2[, ...[, itemN]]]) // Renvoie un nouveau tableau auquel on a ajouté les éléments.
a.join(sep) // Convertit le tableau en une chaîne dont les valeurs sont séparées par le paramètre sep.
a.pop() // 	Renvoie le dernier élément du tableau et le retire du tableau.
a.push(item1, ..., itemN) // Ajoute un ou plusieurs éléments à la fin du tableau.
a.shift() // Renvoie le premier élément du tableau et le retire du tableau.
a.unshift(item1[, item2[, ...[, itemN]]]) // Ajoute des éléments au début du tableau.
a.slice(start[, end]) // Renvoie un sous-tableau.
a.sort([cmpfn]) // Trie le tableau (avec une fonction de comparaison optionnelle).
a.splice(start, delcount[, item1[, ...[, itemN]]]) // Permet de modifier un tableau en en supprimant une partie et en la remplaçant avec plus d'éléments.
a.reverse() // Retourne le tableau.



//* ---Les fonctions

function ajoute(x, y) {
    let total = x + y;
    return total;
}

// Fonction qui permet d'obtenir la somme de nombres passé en arguments
function ajoute() {
    let somme = 0;
    for (let i = 0, j = arguments.length; i < j; i++) {
      somme += arguments[i];
    }
    return somme;
}
  
ajoute(2, 3, 4, 5); // 14

// Fonction qui calcule la moyenne
function moyenne() {
    let somme = 0;
    for (let i = 0, j = arguments.length; i < j; i++) {
      somme += arguments[i];
    }
    return somme / arguments.length;
}
moyenne(2, 3, 4, 5); // 3.5

// Pareil mais avec une boucle for of
// "args" contient tous les paramètres passés à la fonction
function moyenne(...args) {
    let somme = 0;
    for (let valeur of args) {
      somme += valeur;
    }
    return somme / args.length;
}
moyenne(2, 3, 4, 5); // 3.5

// Fonctions anonymes
let moyenne = function() {
    let somme = 0;
    for (let i = 0, j = arguments.length; i < j; i++) {
      somme += arguments[i];
    }
    return somme / arguments.length;
};

// Fonctions récursives
// Exemple de base
function countChars(elm) {
    if (elm.nodeType == 3) { // TEXT_NODE
      return elm.nodeValue.length;
    }
    let count = 0;
    for (let i = 0, child; child = elm.childNodes[i]; i++) {
      count += countChars(child);
    }
    return count;
}

// Exemple avec une IIFE "expression de fonction imédiatement invoquées"
let charsInBody = (function counter(elm) {
    if (elm.nodeType == 3) { // TEXT_NODE
      return elm.nodeValue.length;
    }
    let count = 0;
    for (let i = 0, child; child = elm.childNodes[i]; i++) {
      count += counter(child);
    }
    return count;
})(document.body);



//* Les objets personnalisés
// Exmple d'objet ou une fonction y est attachée
function creerPersonne(prenom, nom) {
    return {
      prenom: prenom,
      nom: nom,
      nomComplet: function() {
        return this.prenom + ' ' + this.nom;
        },
      nomCompletInverse: function() {
        return this.nom + ' ' + this.prenom;
        }
    };
}
  
let s = creerPersonne("Simon", "Willison")
s.nomComplet(); // Simon Willison
s.nomCompletInverse(); // Willison Simon

// Avec un constructeur
function Personne(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
    this.nomComplet = function() {
      return this.prenom + ' ' + this.nom;
    }
    this.nomCompletInverse = function() {
      return this.nom + ' ' + this.prenom;
    }
}
let s = new Personne("Simon", "Willison");

// Oject.prototype est un objet oartagé par toutes les instances
function Personne(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
}
Personne.prototype.nomComplet = function() {
    return this.prenom + ', ' + this.nom;
}
Personne.prototype.nomCompletInverse = function() {
    return this.nom + ', ' + this.prenom;
}

// Ajout de méthode à la fonction Personne
let s = new Personne("Simon", "Willison");
s.prenomEnMajuscules(); 

Personne.prototype.prenomEnMajuscules = function prenomEnMajuscules() {
  return this.prenom.toUpperCase()
}
s.prenomEnMajuscules(); // "SIMON"

// Méthode string qui renvoie une chaine de caractère à l'envers
let s = "Simon";
s.inverse(); 

String.prototype.inverse = function inverse() {
let r = "";
  for (let i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
}
s.inverse(); // "nomiS"

//* Les fermetures
function creerAdditionneur(a) {
    return function(b) {
      return a + b;
    }
}
let ajoute5 = creerAdditionneur(5);
let ajoute20 = creerAdditionneur(20);
ajoute5(6); // 11
ajoute20(7); // 27





