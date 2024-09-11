//FREDS FISHING !!!
const { mongerStuff } = require("./restaurant.js")
const { fishMenu } = require("./restaurant.js")


const dailyPriceLimit = 3.99
const menu = fishMenu(dailyPriceLimit)
console.log(menu)

//console.log(chefsChoice) EARLY TEST