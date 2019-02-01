const metals = [
    { metal: "Sterling Silver", ppo: 12.42 },
    { metal: "14K Gold", ppo: 736.4 },
    { metal: "24K Gold", ppo: 1258.9 },
    { metal: "Platinum", ppo: 795.45 },
    { metal: "Palladium", ppo: 1241.0 }
]

const diamonds = [
    { carets: 0.5, price: 405 },
    { carets: 0.75, price: 782 },
    { carets: 1, price: 1470 },
    { carets: 1.5, price: 1997 },
    { carets: 2, price: 3638 }
]

const ringStyles = [
    { style: "Classic", price: 500 },
    { style: "Modern", price: 710 },
    { style: "Vintage", price: 965 }
]

const createCustomRing = (style, carets, metal) => {
    return {
        style: style.style,
        carets: carets.carets,
        metal: metal.metal,
        price: style.price + carets.price + metal.ppo
    }
}

const newRingOrder = createCustomRing(ringStyles[1], diamonds[2], metals[2])
// Then add order to customer's shopping cart
console.log(newRingOrder)

