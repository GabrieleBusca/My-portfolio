/*OBJECTS - ways of representi entities in a much more details way without restoring to multiple variables*/

const person = {
name: "Gabriele",
height: 180,
isTeaching: true,
isWebcamOn: true,
"e-mail":"gabrieleguercino@gmail.com",
location: {lat: 500.2345, lon: 27.687}
}

// DOT notation - access data inside preprieties

console.log(person.name + "height is:" + person.height + "cm");
//console.log(person.e - mail); THIS IS NOT POSSIBLE WITH THE DOT NOTATION

//square brakets notation

console.log(person["e-mail"]);

const wordToLookFor = "e-mail";
console.log(person[wordToLookFor]);

console.log(person.isTeaching);

// Manipulating an object:adding a new key value pair
console.log(person.address);
console.log(person);
person.address = "via papa 11";

//manipulating an object: delete a property and corresponding value

delete person .isWebcamOn;
console.log(person);

//duplicate an object
//const person2 = person //this is wrong
// now person2 is the same object in memory as person

const person2 = Object.assign ({}, person) //now we have a shallow copy on person

person2.name ="sam";
person2 ["e-mail"] = "ses@epicode.com";

person2.location = Object.assign ({},person.location);
person2.location.lat = 11.35456;
person2.location.lon = 134.456;

//prefer this method whenever you want to clone just one object
//the Object.assign allows for multiple sources which structuredClone don't allow

 const person3 = structuredClone(person); //creates a deep clon even of nested references


person3.name = "luca";
person3 ["e-mail"] = "luca@epicode.com";
person3.location.lat = 63.5432;
person3.location.lon = 18.4529;

console.log("PERSON", person);
console.log("PERSON2", person2);
console.log("PERSON3", person3);


