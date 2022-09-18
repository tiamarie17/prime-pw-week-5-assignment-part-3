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

console.log(addToCollection('Strawberry Fields', 'The Beatles', 1968));

console.log(addToCollection('Oops I did it again', 'Britney Spears', 2000));

console.log(addToCollection('Lemonade', 'Beyoncé', 2016));

console.log(addToCollection('Beyoncé', 'Beyoncé', 2013));

console.log(addToCollection('Let it Be', 'The Beatles', 1970));

console.log(addToCollection('She Wolf', 'Shakira', 2009));

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
    let artistArray = [];
    for(let i=0; i < collection.length; i++){
        let find = collection[i];
        if (find.artist == artist){
            artistArray.push(find);
        }
    }
    return artistArray;  
}
console.log(findByArtist('Beyoncé'));

console.log(findByArtist('Justin Timberlake'));




function search (criteria){
    function isEmpty(criteria){
       return Object.keys(criteria).length === 0;  
    } 
    if(criteria == null || isEmpty(criteria)){
        return collection;
    } 
    else { 
        let newArray = [];
        for(i=0; i<collection.length; i++){
            let res = collection[i];
            if(res.artist == criteria.artist && res.yearPublished == criteria.year){
                newArray.push(res);
            }
        }
        return newArray;
    } 
}

//input object that is not a match
let mySearch = {artist: 'Ray Charles', year: 1957};    
let res2 = search(mySearch);
console.log(res2);
//returns empty array


//input object that is a match
let mySearch2 = {artist: 'Britney Spears', year: 2000};
let res3 = search(mySearch2);
console.log(res3);
//returns one Britney Spears object from collection array


//input object that is undefined
let mySearch3;
let res4 = search(mySearch3);
console.log(res4);
//returns all the albums in collection


//input does not include an object
let res5 = search();
console.log(res5);
// returns all the albums in collection

//input is an empty object
let res7 = search({});
console.log(res7);
//returns all the albums in collection