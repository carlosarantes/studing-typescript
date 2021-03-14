abstract class UserAccount {
    public name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails() : void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }
}

class CharAccount extends UserAccount {
    private nickname : string;
    level : number;

    constructor(name : string, 
                age: number, 
                nickname : string, 
                level: number) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }

    get getLevel() {
        console.log('------- GET --------')
        return this.level;
    }

    set setLevel (level: number) {
        this.level = level;
    }

    logCharDetails() {
        console.log(`Char ${this.nickname} has level of ${this.level}`);
    }
}

//const carlota = new UserAccount("Carlota", 25);
//carlota.logDetails();

const john = new CharAccount("Carlito", 26, "carlota.ota", 12);
john.name;
// john.nickname = '121'

console.log(john.getLevel) // Accessor
john.setLevel = 12;