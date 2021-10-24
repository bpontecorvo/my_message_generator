console.log("Hello World");

//Generate random numbers
function generateRandomNumber (num) {
    return Math.floor(Math.random() * num )
}
console.log(generateRandomNumber(34))

//Data to populate messages
const spiritWisdom = {
    spiritAnimal: ['Orca', 'Foster Dog', 'Snek'],
    spiritPower: ['enhanced smelling abilities', 'confident public speaker', 'never becomes dehydrated'],
    spiritPlace: ['Outer Space', 'Central Park', 'Spokane'],
    };

// Spirit Output Holder
let spiritMessage = []

for (prop in spiritWisdom){
    let index = generateRandomNumber(spiritWisdom[prop].length);
    switch(prop) {
    case "spiritAnimal": 
        spiritMessage.push(`Today your spirit animal is ${spiritWisdom[prop][index]}`);
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


