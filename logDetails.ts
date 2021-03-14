type Uid = number | string | undefined; // type alias


function logDetails(uid : Uid, item : string) {
    console.log(`A product ${uid} has a title as ${item}.`)
}

function logInfo(uid : Uid, user : string) {
    console.log(`An user ${uid} has a name as ${user}.`)
}

type Platform = 'Windows' | 'Linux' | 'Mac Os';

function renderPlatform(platform: Platform) {
    return platform;
}

renderPlatform('Windows');

logDetails(123, "sapato");
logDetails("123", "sapato");


logInfo(123, "sapato");
logInfo("123", "sapato");