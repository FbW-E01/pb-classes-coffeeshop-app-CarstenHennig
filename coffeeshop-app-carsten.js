// ### Coffee Shop App

// Write a **class** called **CoffeeShop**, which has **three instance variables**:

// 1.  **name** : a string (basically, of the shop)
// 2.  **menu** : an array of items (of object type), with each item containing
//the **item** (name of the item), **type** (whether _food_ or a _drink_) and **price**.
// 3.  **orders** : an empty array

// and **seven methods**:

// 1.  **addOrder**: adds the **name** of the item to the end of the **orders** array if it exists on the **menu**. Otherwise, return `"This item is currently unavailable!"`
// 2.  **fulfillOrder**: if the **orders** array is **not empty**, return `"The {item} is ready!"`. If the **orders** array is empty, return `"All orders have been fulfilled!"`
// 3.  **listOrders**: returns the list of **orders** taken, otherwise, an **empty** array.
// 4.  **dueAmount**: returns the total amount due for the **orders** taken.
// 5.  **cheapestItem**: returns the **name** of the cheapest item on the menu.
// 6.  **drinksOnly**: returns only the _item_  **names** of _type_  **drink** from the menu.
// 7.  **foodOnly**: returns only the _item_  **names** of _type_  **food** from the menu.

// **IMPORTANT**: Orders are fulfilled in a **FIFO** (first-in, first-out) order.

class CoffeeShop {
  constructor(name, menu, orders) {
    this.amounted = 0;
    this.prices = [];
    this.drinks = [];
    this.foods = [];
    this.name = "CoffeeFellowers";
    this.menu = [
      { item: "Espresso", type: "hot drink", price: 1.45 },
      { item: "Capuccino", type: "hot drink", price: 2.6 },
      { item: "Ginger tea", type: "hot drink", price: 1.8 },
      { item: "Shortbread", type: "food", price: 0.85 },
      { item: "Cheese Cake", type: "food", price: 1.75 },
    ];
    this.orders = [];
  }

  addOrder(item) {
    this.menu.forEach((result) => {
      if (item === result.item) {
        //        console.log(result.item);
        this.orders.push(result.item);
        console.log(`Order added: ${this.orders}`);
      } else return "This item is currently unavailable!";
    });
  }

  fulfillOrder(item) {
    if (this.orders.length > 0) {
      console.log(`The \'${item}\' is ready!`);
    } else console.log(`All orders have been fulfilled.`);
  }

  listOrders() {
    console.log(`Your ${this.orders.length} orders are: ${this.orders}`);
  }

  dueAmount() {
    this.orders.forEach((result) => {
      //     console.log(result);
      this.menu.forEach((element) => {
        if (result === element.item) {
          this.amounted = this.amounted + element.price;
          //          console.log(this.amounted);
        }
      });
    });
    console.log(`Total amount of your order: ${this.amounted}€`);
  }

  cheapestItem() {
    this.menu.forEach((element) => {
      console.log(element.price);
      this.prices.push(element.price);
    });
    console.log(
      `Cheapest item on our menu today is ${Math.min(...this.prices)}`
    );
  }

  drinksOnly() {
    this.menu.forEach((element) => {
      if (element.type === "hot drink") {
        this.drinks.push(element.item);
      }
    });
    console.log(`Our drinks: ${this.drinks}`);
  }

  foodOnly() {
    this.menu.forEach((element) => {
      if (element.type === "food") {
        this.foods.push(element.item);
      }
    });
    console.log(`Our food: ${this.foods}`);
  }
}

const newOrder = new CoffeeShop();
// 1.  **addOrder**: adds the **name** of the item to the end of the **orders** array if it exists on the **menu**. Otherwise, return `"This item is currently unavailable!"`
newOrder.addOrder("Capuccino");
newOrder.addOrder("Espresso");
newOrder.addOrder("Ginger tea");
newOrder.addOrder("Capuccino");
// 2.  **fulfillOrder**: if the **orders** array is **not empty**, return `"The {item} is ready!"`. If the **orders** array is empty, return `"All orders have been fulfilled!"`
newOrder.fulfillOrder("Espresso");
// 3.  **listOrders**: returns the list of **orders** taken, otherwise, an **empty** array.
newOrder.listOrders();
// 4.  **dueAmount**: returns the total amount due for the **orders** taken.
newOrder.dueAmount();
// 5.  **cheapestItem**: returns the **name** of the cheapest item on the menu.
newOrder.cheapestItem();
// 6.  **drinksOnly**: returns only the _item_  **names** of _type_  **drink** from the menu.
newOrder.drinksOnly();
// 7.  **foodOnly**: returns only the _item_  **names** of _type_  **food** from the menu.
newOrder.foodOnly();

// ### Examples

// ```
// tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
// // Tesha's coffee shop does not sell hot cocoa
// tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
// // specifying the variant of "iced tea" will help the process

// tcs.addOrder("cinnamon roll") ➞  "Order added!"
// tcs.addOrder("iced coffee") ➞ "Order added!"
// tcs.listOrders ➞ ["cinnamon roll", "iced coffee"]
// // the list of all the items in the current order

// tcs.dueAmount() ➞ 2.17

// tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
// tcs.fulfillOrder() ➞ "The iced coffee is ready!"
// tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
// // all orders have been presumably served

// tcs.listOrders() ➞ []
// // an empty array is returned if all orders have been exhausted

// tcs.dueAmount() ➞ 0.0
// // no new orders taken, expect a zero payable

// tcs.cheapestItem() ➞ "lemonade"
// tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
// tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]
// ```

// ### Notes

// Round off **due amount** up to **two decimal** places.
