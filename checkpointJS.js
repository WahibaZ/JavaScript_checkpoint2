/* **************************************String Manipulation Functions ***********************************/

/* ................reverse................................... */
function reverseS(str){

    return str.split('').reverse().join('');
/* str.split('') splits the string into an array of characters.
reverse() reverses the order of the elements in the array.
join('') joins the elements of the array back into a string. */

}
let str="bonjour";
console.log("la chaine inversee: "+reverseS(str));

/* .....................count................................... */
function countC(str) {
    // Return the length of the string
    return str.length;
}

let chaine = "bonjour";
console.log("Number of characters:"+countC(chaine)); 

/* ....................Capitalize Words............................ */
function capitalize(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(' ');
    for (let index = 0; index < words.length; index++) {
        words[index]=words[index].charAt(0).toUpperCase()+ words[index].slice(1);
        //slice retourne la suite des caracteres a partir du premier index
    }
   return words.join(' ');
  
}
let sentence = "hello, how are you?";
console.log(capitalize(sentence)); 

/* ************************************************Array Functions:********************************************************** */
/* ....................MaxMin......................... */
function maxTab(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for an empty array
    }
    let maxVal = arr[0]; // Initialize maxVal with the first element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}

function minTab(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for an empty array
    }
    let minVal = arr[0]; // Initialize minVal with the first element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    return minVal;
}
/* .................Sum of Array..................... */
function sumTab(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
/* .................Filter Array..................... */
function filtreTab(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==n) {
            return ( "existe dans le tableau");
        }
        else{
            return ( "n'existe pas dans le tableau");
        }
    }
    
}


let tab = [1,2,3,4,5,6,7,8,9];
let n=10;
console.log("Maximum value:", maxTab(tab));
console.log("Minimum value:", minTab(tab));
console.log("Sum of array:", sumTab(tab));
console.log("lelement "+n ,filtreTab(tab, n));

/* *********************************************Mathematical Functions:**************************************************** */

/* ..................Factorial:..................................... */
function factorial(num) {
    if (num < 0) {
        return "Undefined"; // Factorial of negative numbers is undefined
    } else if (num === 0 || num === 1) {
        return 1; // Factorial of 0 or 1 is 1
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}
let number = 5;
console.log("Factorial of", number, "is:", factorial(number)); 

/* ...................Prime Number .................................. */
/* Un nombre premier est un nombre entier strictement supérieur à 1
 qui n'a que deux diviseurs distincts : 1 et lui-même. */
 function Prime(num) {
    // If the number is less than 2, it's not prime
    if (num <= 1) {
        return ("n'est pas premier");
    }
    // Check for divisibility by numbers from 2 to the square root of the number
    for (let i = 2; i<n; i++) {
        if (num % i === 0) {
            // If the number is divisible by any number other than 1 and itself, it's not prime
            return ("n'est pas premier");
        }
        else{
            return (" est premier");
        }
    }
      
}
let nb = 17;
console.log(nb, Prime(nb)); 
/* .................................Fibonacci .......................................... */
/* La suite de Fibonacci commence généralement par les nombres 0 et 1, 
et les nombres suivants sont calculés en ajoutant les deux nombres précédents. 
Ainsi, la suite commence comme suit :
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... */

function fibonacci(nbr) {
    if (nbr <= 0) {
        return "Invalid input"; // Valeur invalide
    } else if (nbr === 1) {
        return [0]; // Cas de base : le premier nombre de Fibonacci est 0
    } else if (nbr === 2) {
        return [0, 1]; // Cas de base : le deuxième nombre de Fibonacci est 1
    } else {
        let fibTab = [0, 1]; // Initialisation avec les deux premiers nombres de Fibonacci
        for (let i = 2; i < nbr; i++) {
            fibTab.push(fibTab[i - 1] + fibTab[i - 2]); // Calcul du nombre de Fibonacci suivant
        }
        return fibTab;
    }
}
let nbr = 10;
console.log("Fibonacci pour le nombre =", nbr, ":", fibonacci(nbr)); // Affiche les 10 premiers nombres de la suite de Fibonacci

