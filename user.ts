// accountInfo
// chatInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string; // optional
}

const account: AccountInfo = {
    id : 123,
    name : 'Willian',
    email : 'carlotaota@gmail.com'
}

type CharInfo = {
    nickname : string;
    level : number;
}

const char : CharInfo = {
    nickname : 'CARLOTA',
    level : 99
}

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const player : PlayerInfo = {
    id : 99,
    name : 'Juão',
    nickname : 'juaaao',
    level : 11,
    email : 'juao@gmail.com'
}