function orderSmoothie() {
    const size = document.getElementById('size').value;
    const fruits = Array.from(document.querySelectorAll('input[name="fruit"]:checked')).map(fruit => fruit.value);
    const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(topping => topping.value);

    // Create a smoothie object
    const smoothie = {
        size,
        fruits,
        toppings,
        description() {
            return `Size: ${this.size}\nFruits: ${this.fruits.join(", ")}\nToppings: ${this.toppings.join(", ")}`;
        }
    };

    // Update the order summary
    document.getElementById('smoothie-description').textContent = smoothie.description();
    document.getElementById('order-summary').classList.remove('hidden');
}
