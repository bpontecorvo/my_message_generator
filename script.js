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
    let wisdomPrefix = "";

    switch(prop) {
    case "Spirit Animal":
        wisdomPrefix = `At ${now.toLocaleTimeString()}  on ${now.toLocaleDateString()}, `;
        break;
    case "Spirit Power":
        wisdomPrefix = 'and ';
        break;
    case "Spirit Place":
        wisdomPrefix = 'Lastly, ';
        break;
    default:
        wisdomPrefix = 'Unknown: '
        //spiritMessage.push(`unknown spirit property ${prop}`);
    }
    if (wisdomPrefix.length > 0) {
        wisdomPrefix += `Your ${prop} is ${spiritWisdom[prop][index]}`;
        spiritMessage.push(wisdomPrefix);
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


