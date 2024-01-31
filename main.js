// Resten av linjen er en kommentar

/**
 * Lengre kommentar
 * med flere linjer
 */

// Vi kan lagre verdier/data typer
// Ved hjelp av "let <navn> = <informasjon>"
let numberA = 32
let numberB = 10
let numberC = numberA / numberB

console.log(numberC);

// Tekst strenger
let firstName = "lars" // Kan bruke ""
let middleName = 'gunnar' // Eller ''
let fullName = firstName + " " + middleName

// Litt greier måte å formater på
let greeting = `Greeting class from ${fullName}`

console.log(greeting)

// Booleans (Sant Usant verdier)
let thisIsTrue = true 
let thisIsFalse = false

console.log(thisIsFalse)

// Udefinerte variabler gir "undefined"
let thisIsUndefined
console.log(thisIsUndefined)

// Vi kan endre på verdiene til en variable
let count = 0
console.log(count)

count = count + 1000
console.log(count)

// Variabler definert med const
// kan ikke endres på etter de er laget
const constantVariable = 0
//constantVariable = 10


// Objekter, en samling av andre variabler
let me = {
    name: "Lars",
    age: 34,
    isMarried: false
}

console.log(me)
// Vi kan få tilgang til et enkelt element
// ved å spesisifiser plassering
console.log(me.age)

// Dette kan kombinere 
const information = `This person is ${me.age} years old`
console.log(information)

// Lister med variabler

let weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]

console.log(weekdays)
// Vi kan få tilgang til et enkelt element
// ved å spesisifiser plassering
console.log(weekdays[0])
