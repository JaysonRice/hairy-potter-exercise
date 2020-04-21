// Function that runs pots through the kiln
export const firePottery = (sinlglePot, kilnTemp) => {
    sinlglePot.fired = true
    if (kilnTemp > 2200) {
      sinlglePot.cracked = true
    } else {
      (kilnTemp >= 2200)
      sinlglePot.cracked = false
  
    }
    return sinlglePot
  }