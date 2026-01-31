//ARRAYS - list of dta accessible by indices

//how to create an array => new Array (num)

const arrOfNames = ["gabriele" , "sam" , "gianni", "olef"]
//                     0           1        2         3
const second = arrOfNames 
console.log ( "Array", arrOfNames); //questo se ho bisogno della intera 

const second2 = arrOfNames [1];
console.log ("second element:", second2); //questo se vuoi solo un elemento specifico dell array

const last = arrOfNames [3];
console.log ( "last element:" , last);

//un modo alternativo per selezionare l'ultima posizione è utilizzare la proprieta .lenght -1
const last2 = arrOfNames[arrOfNames.length -1];

console.log ("last element", last2);

//per aggiungere nuovi elementi ALLA FINE utilizza il metodo .oush

arrOfNames.push ("sas");
console.log( "array", arrOfNames);

 //per aggiungere un nuovo elemento ALL'INIZIO  .unshift 
 arrOfNames.unshift ("Franco");
console.log("ARRAYS", arrOfNames);

//per rimuoveredalla fine.pop
//per rimuovere dall'inizio .shift
// per ordinare le strings in ordine alfabetico .sort

const slicedArr = arrOfNames.slice (1,3);
//.slice per selezionare elementi specifici di un array

const removeSecond= arrOfNames.splice (1, 1);

console.log ("secondpositionremoved", removeSecond);
console.log("array", arrOfNames);
console.log ("Slicedarray", slicedArr);









