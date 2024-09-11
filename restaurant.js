const { mongerInventory } = require("./fishMonger.js")
const { findFish } = require("./fishMonger.js")



//importing the fishMonger function to invoke it 
//const dailyPriceLimit = 3.99 TEST
const mongerStuff = mongerInventory(findFish)

function chefInventory (searchProp) {
    const chefsChoice = []
    for (let i = 0; i < mongerStuff.length; i++) {
        let currentFish = mongerStuff[i]
        if (searchProp > currentFish.price) {
            chefsChoice.push(currentFish.species)
        }
    }
    //return console.log(chefsChoice) TEST
    return chefsChoice
}


//defining a function that will build the HTML version of their daily menu
const fishMenu = (price) => {
    const todaysCatch = chefInventory(price)
    //console.log (todaysCatch) TEST
    const fishNames = []
    let html = "<h1>Menu</h1>"
    for (const fish of todaysCatch){
        html += ` <article class="menu">
        <h2>${fish}</h2>
        <section class="menu__item">${fish} Soup</section>
        <section class="menu__item">${fish} Sandwich</section>
        <section class="menu__item">Grilled ${fish}</section>
    </article>`
    }
    return html
}



module.exports = { chefInventory, mongerStuff, fishMenu}