// Count subtotal

const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];


const totalPriceProducts = cartItems.reduce((totalPrice,product)=>{
    return totalPrice + (product.price * product.quantity)
},0)

console.log(totalPriceProducts)


const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];


const mostGoalPlayer = players.reduce((mostGoal,player)=> {
    if(mostGoal.score > player.score){
        return mostGoal
    }
    return player
},players[0])

console.log(mostGoalPlayer)