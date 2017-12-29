//alert(" The JavaScript says 'Have a nice day'");
//console.log("Argy Bargy");

let places = document.getElementsByClassName("penguinPlace");

let penguinList = ["penguin1", "penguin2", "penguin3", "penguin4", "penguin5", "penguin6", "penguin7", "penguin8", "yeti"];




for(let i = 0; i < places.length; i++){
 
  places[i].className += " " + penguinList[i];
}
//pick a random place for the yeti 

let yetiPlace = Math.floor(   Math.random() * 9  );
//console.log("The yeti will be at space " + yetiPlace);

//Now move the yeti
let thePenguin = places[yetiPlace].className;
places[yetiPlace].className = "penguinPlace yeti";
places[places.length-1].className = "penguinPlace " + thePenguin;
