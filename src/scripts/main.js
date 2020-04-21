// Imports go first

import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";

// Make 5 pieces of pottery at the wheel
let potId = 1
let pottery = []

let bowl = makePottery(potId++, "bowl", 2, 10);
let mug = makePottery(potId++, "mug", 5, 6);
let urn = makePottery(potId++, "urn", 7, 20);
let jar = makePottery(potId++, "jar", 3, 6);
let vase = makePottery(potId++, "vase", 4, 15);

pottery.push(bowl, mug, urn, jar, vase)
console.table(pottery)
// Fire each piece of pottery in the kiln
let firedPottery = []

const firedBowl = firePottery(bowl, 2000)
const firedMug = firePottery(mug, 2250)
const firedUrn = firePottery(urn, 2150)
const firedJar = firePottery(jar, 2100)
const firedVase = firePottery(vase, 1950)

firedPottery.push(firedBowl, firedMug, firedUrn, firedJar, firedVase)
console.table(firedPottery)
// Determine which ones should be sold, and their price
toSellOrNotToSell(firedPottery)
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedUrn)
toSellOrNotToSell(firedJar)
toSellOrNotToSell(firedVase)

const array = usePottery()
console.table(array)
// Invoke the component function that renders the HTML list

