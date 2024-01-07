interface Audiplayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}

interface Details {
    author:string;
    year:number;
}

const audioPlayer:Audiplayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const {song:anothersong,songDuration:duration,details} = audioPlayer;
const {author} = details;

console.log('Song', anothersong);
console.log('Duration', duration);
console.log('Author', author);


export {}