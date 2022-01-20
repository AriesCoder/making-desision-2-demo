console.log("Hello World")
const backpack = []

backpack.push("Sword")
backpack.push("Shield")
backpack.push("food")

//backpack.shift()
backpack.splice(0,1)

let furCoat = "fur coat"

backpack.push(furCoat)
backpack.pop(furCoat)
backpack.unshift(furCoat)

let itemCount = backpack.length

console.log(itemCount)  
for (let i =0; i <= backpack.length-1; i++){
    console.log(backpack[i])
}
let guessMe = 54

while (guessMe < 100) {
    console.log("------", guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log("divisible by 4 or 5, add 25")
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        console.log("divisible by 3")
        guessMe -= 27
    } else {
        console.log(" not divisible by 3 or 5")
        guessMe += 3
    }
    guessMe += 22
}
console.log(guessMe)