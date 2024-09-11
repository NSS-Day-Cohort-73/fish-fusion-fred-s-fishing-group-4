const { boatInventory } = require("./fishingBoat.js")
const { fishProperties } = require("./fishingBoat.js")

const findFish = boatInventory(fishProperties)


//invoke the boatInventory function and generate own inventory stored in a mongerInventory function
// Each day, the fishmonger buys exactly 10 of each inexpensive fish caught by the fishing boat. 
//If any of the fishing boat's fish quantity is less than 10, the fish monger does not buy it.
// The fishmonger does not buy any fish from the boat that is priced higher than $7.50 per fish.

function mongerInventory (searchProp) {
    const availableFish = []
    for (let i = 0; i < findFish.length; i++) {
        let currentFish = findFish[i]
        if (currentFish.amount >= 10 && currentFish.price < 7.50) {
            availableFish.push(currentFish)
        }
    }
    return availableFish
}


//invoke a function with the information of mongerInventory &
// The fishmonger lets the chef of a restuarant specify what their maximum budget is per fish. 
// From your array of purchased fish, you must filter that down to the fish that meet the price constraint of the restaurant chef.
// Once you have that final array of fish, return that array.



module.exports = {mongerInventory, findFish}



