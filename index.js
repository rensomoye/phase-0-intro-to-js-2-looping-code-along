//for (let age = 30; age <40; age++) {
    //console.log(`I'm ${age} years old. Happy Birthday to me!`);
    //debugger;
//}

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         //debugger;
//     }
//     return gifts;
// }
// wrapGifts(gifts)

function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        //debugger;
    }
    return messages
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(num){
    let i = num
    while(i >= 0){
        console.log(i--);
    }
}