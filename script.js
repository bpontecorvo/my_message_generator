var debugIt = false;

var fs=require('fs');

// read data from file
var jsonData=fs.readFileSync('spiritprops.json', 'utf8');
if (debugIt) {
    console.log("SpiritWisdom JSON from file:\n" + jsonData + "\n");
}
var spiritWisdom=JSON.parse(jsonData);


//Generate random numbers
function generateRandomNumber (num) {
    return Math.floor(Math.random() * num )
}

// Spirit Output Holder
let spiritMessage = []

for (prop in spiritWisdom){
    let index = generateRandomNumber(spiritWisdom[prop].length);
    var now = new Date();
    switch(prop) {
    case "spiritAnimal":
        spiritMessage.push(`At ${now.toLocaleTimeString()}  on ${now.toLocaleDateString()}, your spirit animal is ${spiritWisdom[prop][index]}`);
        break
    case "spiritPower": 
        spiritMessage.push(`Your spirit power is ${spiritWisdom[prop][index]}`);
        break
    case "spiritPlace": 
        spiritMessage.push(`Lastly, your spiritual place is ${spiritWisdom[prop][index]}`);
        break
    default:
        spiritWisdom.push('Not enough information');
    }
}


const format = (spiritMessage) => {
    let formatted = '';
    spiritMessage.map(value => {
        return formatted += (value + "\n");
    })
    return formatted;

}

console.log(format(spiritMessage));


