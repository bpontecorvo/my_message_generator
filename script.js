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
    case "spiritAnnimal": 
    spiritWisdom.push(`Today your spirit animal is $`)

    }
}

 console.log(spiritMessage);


