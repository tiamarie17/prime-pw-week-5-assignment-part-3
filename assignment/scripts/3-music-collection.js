console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
    let addedMusic = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(addedMusic);
    return addedMusic; 
}

let result = addToCollection('Strawberry Fields', 'The Beatles', 1968);
console.log(result);

addToCollection('Oops I did it again', 'Britney Spears', 2000);
console.log(result);

addToCollection('Lemonade', 'Beyoncé', 2016);
console.log(result);

addToCollection('Beyoncé', 'Beyoncé', 2013);
console.log(result);

addToCollection('Let it Be', 'The Beatles', 1970);
console.log(result);

addToCollection('She Wolf', 'Shakira', 2009);
console.log(result);

console.log(collection);


function showCollection(array){
    let numberOfItems = array.length;
    console.log(numberOfItems);

    for (let i = 0; i < array.length; i++){
        let result2 = array[i]
        console.log(result2.title + ' by ' + result2.artist + ' published in '+ result2.yearPublished);
   }
}
showCollection(collection);

function findByArtist(artist){
    let artistArray = [''];

}