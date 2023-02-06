const inventory = []

const item1 = {
  name: 'Laptop',
  model: 'Macbook Pro',
  cost: 1500,
  quantity: 5,
}
const item2 = {
  name: 'Smartphone',
  model: 'iPhone 13',
  cost: 999,
  quantity: 10,
}
const item3 = {
  name: 'Tablet',
  model: 'iPad Pro',
  cost: 799,
  quantity: 15,
}
inventory.push(item1, item2, item3)
console.log('Inventory: ', inventory)
const thirdItemQuantity = inventory[2].quantity
console.log('Third Item Quantity: ', thirdItemQuantity)
