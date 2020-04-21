// Function that determines if it should be sold and how much pottery is worth 
let potteryToSell = []

export const toSellOrNotToSell = (singlePot) => {
  if (singlePot.cracked === false && singlePot.weight >= 6) {
    singlePot.price = 40
    potteryToSell.push(singlePot)
    return true
  } else if (singlePot.cracked === false && singlePot.weight < 6) {
    singlePot.price = 20
    potteryToSell.push(singlePot)
    return true
  }
  return false
}

export const usePottery = () => {
    return potteryToSell.slice()
}