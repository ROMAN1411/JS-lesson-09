console.log('-----------------------------------------------');
{
    const pizzaPalace = {
        pizzas: ['Supercheese', 'Smoked', 'Four meats'],
        // Change code below this line
        checkPizza(pizzaName) {
            return this.pizzas.includes(pizzaName);
        },
        order(pizzaName) {
            // console.log(pizzaName);
            const isPizzaAvailable = this.checkPizza(pizzaName);

            if (!isPizzaAvailable) {
                return `Sorry, there is no pizza named «${pizzaName}»`;
            }

            return `Order accepted, preparing «${pizzaName}» pizza`;
        },
        // Change code above this line
    };

    console.log(pizzaPalace.order('Smoked')); // повертає рядок "Order accepted, preparing «Smoked» pizza"
    console.log(pizzaPalace.order('Four meats')); // повертає рядок "Order accepted, preparing «Four meats» pizza"
    console.log(pizzaPalace.order('Big Mike')); // повертає рядок "Sorry, there is no pizza named «Big Mike»"
    console.log(pizzaPalace.order('Viennese')); // повертає рядок "Sorry, there is no pizza named «Viennese»"
}
console.log('-----------------------------------------------');
{
    const customer = {
        username: 'Mango',
        balance: 24000,
        discount: 0.1,
        orders: ['Burger', 'Pizza', 'Salad'],
        // Change code below this line
        getBalance() {
            return this.balance;
        },
        getDiscount() {
            return this.discount;
        },
        setDiscount(value) {
            this.discount = value;
        },
        getOrders() {
            return this.orders;
        },
        addOrder(cost, order) {
            this.balance -= cost - cost * this.discount;
            this.orders.push(order);
        },
        // Change code above this line
    };

    // customer.setDiscount(0.15);
    // console.log(customer.getDiscount()); // 0.15
    // customer.addOrder(5000, 'Steak');
    // console.log(customer.getBalance()); // 19750
    // console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
}
console.log('-----------------------------------------------');
{
}
