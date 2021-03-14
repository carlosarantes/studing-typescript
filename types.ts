// boolean
let isOpen: boolean;
isOpen = true;

// string
let message : string;
message = `foo ${isOpen}`;

// number
let total : number;
total = 10 / 3;

// array
let items : number[];
items = [1, 2, 5];

let total2 : Array<number>;
total2 = [1,2,3,4];

// tuple
let title : [number, string, string];
title = [1, "foo", "bar"];

// enum
enum Colors {
    white = '#ffffff',
    black = '#000000'
}

// any
let coisa : any;
coisa = true;

// void
function logger() : void {
    console.log('foo')
}

// null | undefined
type Bla = string | undefined;

// never
function error() : never {
    throw new Error("erro");
}

// object
let cart : object;
cart = { key : "fi" };

// Type Inferance
let message2 = "mensagem definida"
message2 = "string nova";

window.addEventListener("click", (e) => {
    console.log(e.target);
})

