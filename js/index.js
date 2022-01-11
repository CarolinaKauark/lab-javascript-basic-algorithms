// Iteration 1: Names and Input
let hacker1 = "Ironhack" ;
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Joao";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length){
    console.log (`The navigator has the longest name, it has ${hacker2.length} characters.`);
  } else{
    console.log(`Wow, both have equally long name, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

//3.1
let novoHacker1 = "";
for(let contador = 0; contador < hacker1.length; contador++){
  novoHacker1 += hacker1[contador].toUpperCase() + " ";
}
console.log(novoHacker1);

//3.2
let novoHacker2 = "";
for(let contador = hacker2.length -1; contador >= 0; contador--){
  novoHacker2 += hacker2[contador];
}
console.log(novoHacker2);

//3.3
let comparacao = (hacker1.toUpperCase()).localeCompare(hacker2.toUpperCase());
switch(comparacao){
  case -1: 
    console.log("The driver's name goes first");
    break;
  case 0:
    console.log("What?! You both have the same name?");
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely.");
    break;
}

//BONUS 1
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus nisl sit amet erat mattis, eget egestas lorem eleifend. Praesent varius felis vel ligula aliquam, vel consequat ante eleifend. Ut congue, ligula eu pharetra luctus, augue eros cursus eros, sit amet molestie ipsum nunc at lacus. Fusce augue ex, rhoncus sit amet est aliquam, posuere posuere sem. Sed elementum nec leo sed pretium. Integer egestas nulla tellus, ac rutrum quam rhoncus quis. Vivamus porta eu nibh eu hendrerit. Etiam a sem vitae tellus egestas euismod ac non lacus. Donec tincidunt finibus massa eget sollicitudin. Donec quis dignissim diam. Cras tincidunt nisl accumsan erat faucibus porttitor sit amet id nisl. Aliquam sit amet hendrerit diam. Nulla libero tortor, tincidunt pellentesque orci ut, eleifend convallis nisi. Nam ac semper purus, eget auctor erat. Aliquam porttitor libero eu accumsan venenatis. Donec gravida a erat quis ultricies. Aenean molestie condimentum ante, ut tempor lacus ultrices a. Vestibulum viverra a eros a vehicula. Pellentesque quis ipsum finibus, pretium neque at, aliquam diam. Suspendisse potenti. Maecenas tortor tellus, maximus nec lectus a, hendrerit dignissim eros. Proin vel massa eu odio convallis gravida in ut arcu. Phasellus facilisis sapien nunc. Donec nec aliquam dui. Etiam in erat sit amet odio egestas venenatis vel non sem. Sed sed faucibus arcu, at mollis ex. Praesent consectetur tortor id eros feugiat iaculis. Duis pulvinar laoreet congue. Suspendisse luctus est dui, ac convallis est volutpat in. Sed a mi quis felis dignissim blandit ut sed libero. Maecenas at purus aliquet, eleifend magna pretium, mattis justo. Aliquam sed tortor erat. Mauris sollicitudin malesuada maximus. Sed at tempor lorem. Integer est felis, dictum nec ipsum et, viverra vehicula justo. Sed sit amet sollicitudin nisi. Mauris metus neque, malesuada in venenatis in, euismod efficitur justo. Duis vehicula, ligula sit amet molestie efficitur, nunc ipsum pharetra nibh, vitae sagittis sapien dolor non purus."

let contadorWords = 1;
let contadorEt = 0;

for(let i = 0; i< loremIpsum.length; i++){
  if(loremIpsum[i] === " "){
    contadorWords++;
  }
  
  if(loremIpsum[i] == "e" && loremIpsum[i+1] == "t"){
    contadorEt++;
  }
}
console.log(contadorWords);
console.log(contadorEt);

//BONUS 2

let palidromo = "A man, a plan, a canal, Panama!";
let newPalidromo = "";

for(let i = 0; i < palidromo.length; i++){
  if((palidromo[i] >= 'a' && palidromo[i] <= 'z') || (palidromo[i]  >= 'A' && palidromo[i]  <= 'Z') ){
      newPalidromo += palidromo[i].toLowerCase();
  }
}
console.log(newPalidromo);

let palidromoReverso ="";
for(let j = 0; j<newPalidromo.length; j++){
  palidromoReverso += newPalidromo[newPalidromo.length - j -1];
}
console.log(palidromoReverso);

if(newPalidromo === palidromoReverso){
  console.log("Essa string é Palidromo");
} else{
  console.log("Essa string não é palidromo");
}

//Ou
function validaPalidromo(newPalidromo){
    for(let j = 0; j<newPalidromo.length; j++){
        if(newPalidromo[j] != newPalidromo[newPalidromo.length-j-1]){
          return false;
          break;
        }
    }
    return true;
}

let palidromo = "A man, a plan, a canal, Panama!";
let newPalidromo = "";

for(let i = 0; i < palidromo.length; i++){
  if((palidromo[i] >= 'a' && palidromo[i] <= 'z') || (palidromo[i]  >= 'A' && palidromo[i]  <= 'Z') ){
      newPalidromo += palidromo[i].toLowerCase();
  }
}

if(validaPalidromo(newPalidromo)){
    console.log("Essa string é Palidromo");
  } else{
    console.log("Essa string não é palidromo");
  }

