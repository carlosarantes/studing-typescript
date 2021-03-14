// Describe object structure
interface Game {
    id? : string | number;
    title : string;
    description: string;
    readonly genre : string;
    platform? : string[];
    getSimilars? : (title : string) => void;
}

const callOfDuty : Game = {
    id : 123,
    title : "Call of Duty",
    description : "massa d+",
    genre : "War",
    platform : [ 'Play 2' ],
    getSimilars : (title : string) => {
        console.log('teste');
    } 
}

if (callOfDuty.getSimilars) {
    callOfDuty.getSimilars('asas');
} 

interface DLC extends Game {
    originalGame : Game;
    newContent : string[];
}

const doidera: DLC = {
    id : 123,
    title : "Call of Duty",
    description : "massa d+",
    genre : "War",
    platform : [ 'Play 2' ],
    getSimilars : (title : string) => {
        console.log('teste');
    },
    originalGame : callOfDuty,
    newContent : [ 'asas' ]
}

class CreateGame implements Game {
    title : string;
    description: string;
    genre : string;

    constructor(title : string, description: string, genre : string) {
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
 }