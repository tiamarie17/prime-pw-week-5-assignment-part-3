console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, tracks){
    let addedMusic = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    }
    collection.push(addedMusic);

    return addedMusic; 
}

//Creating tracks for each album
let track1 = {
    name: 'Penny Lane',
    duration: 136
}

let track2 = {
    name: 'Yellow Submarine',
    duration: 120
}
let album1Tracks = [track1, track2];


let track3 = {
    name: 'Lucky',
    duration: 135
}

let track4 = {
    name: 'Dont Go Knocking on My Door',
    duration: 156
}
let album2Tracks = [track3, track4];


let track5 = {
    name: 'Hold Up',
    duration: 135
}

let track6 = {
    name: 'Formation',
    duration: 156
}
let album3Tracks = [track5, track6];


let track7 = {
    name: 'Pretty Hurts',
    duration: 143
}

let track8 = {
    name: 'Halo',
    duration: 142
}
let album4Tracks = [track7, track8];


let track9 = {
    name: 'A Hard Days Night',
    duration: 135
}
let track10 = {
    name: 'Dear Prudence',
    duration: 156
}
let album5Tracks = [track9, track10];

let track11 = {
    name: 'Loca',
    duration: 195
}
let track12 = {
    name: 'Bicicleta',
    duration: 155
}
let album6Tracks = [track11, track12];



//Testing addtoCollection function

console.log(addToCollection('Strawberry Fields', 'The Beatles', 1968, album1Tracks ));

console.log(addToCollection('Oops I did it again', 'Britney Spears', 2000, album2Tracks));

console.log(addToCollection('Lemonade', 'Beyoncé', 2016, album3Tracks));

console.log(addToCollection('Beyoncé', 'Beyoncé', 2013, album4Tracks));

console.log(addToCollection('Let it Be', 'The Beatles', 1970, album5Tracks));

console.log(addToCollection('She Wolf', 'Shakira', 2009, album6Tracks));

console.log(collection);


//Creating showCollection function

function showCollection(anyArray){
    let numberOfItems = anyArray.length;
    console.log(numberOfItems);

    for (let i = 0; i < anyArray.length; i++){
        let result2 = anyArray[i]
        console.log(result2.title + ' by ' + result2.artist + ' published in '+ result2.yearPublished);   
   }
   
}  
//Testing showCollection function
showCollection(collection);


//Creating findByArtist function
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

//Testing findByArtist function

console.log(findByArtist('Beyoncé'));

console.log(findByArtist('Justin Timberlake'));



//Creating search function
//Assuming the artist, year, and any one of the trackNames matches the criteria:

function search (criteria){
    function isEmpty(criteria){
        return Object.keys(criteria).length === 0;  
    }
    if(criteria == null || isEmpty(criteria)){
        return collection;
    } 
    else { 
        for(i=0; i<collection.length; i++){
            let newArray = []
            let res = collection[i];
               for (let item of res.tracks){
                item = res.tracks[i];
            if(res.artist == criteria.artist && res.yearPublished == criteria.year){
                newArray.push(res);
            } else if (item == criteria.trackName) {
                newArray.push(item);
            }
        }
       return newArray; 
    } 
} 

}

//input object that is not a match
let mySearch = {artist: 'Ray Charles', year: 1957, trackName: 'Under Pressure'};    
let res2 = search(mySearch);
console.log(res2);
//returns empty array


//input object that is a match based on artist, year, and trackName
let mySearch2 = {artist: 'Shakira', year: 2009, trackName: 'Loca'};
let res3 = search(mySearch2);
console.log(res3);
//returns newArray


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
