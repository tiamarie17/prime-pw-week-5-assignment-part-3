console.log('***** Music Collection *****')

let collection = [];
let addedMusic;
 

function addToCollection(title, artist, yearPublished){
    
        addedMusic = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(addedMusic);
    return addedMusic; 
}

addToCollection('Strawberry Fields', 'The Beatles', 1968);
console.log(addedMusic);

addToCollection('Oops I did it again', 'Britney Spears', 2000);
console.log(addedMusic);

addToCollection('Lemonade', 'Beyoncé', 2016);
console.log(addedMusic);

addToCollection('Beyoncé', 'Beyoncé', 2013);
console.log(addedMusic);

addToCollection('Let it Be', 'The Beatles', 1970);
console.log(addedMusic);

addToCollection('She Wolf', 'Shakira', 2009);
console.log(addedMusic);

console.log(collection);


function showCollection(array){
   console.log(array.length);
   for (let i = 0; i < array.length; i++){
      let result = title + 'by' + artist + 'published in' + yearPublished;
   }
   console.log(result);
}