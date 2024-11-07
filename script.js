// Smoothie class to represent a smoothie order
class Smoothie {
    // Constructor initializes the smoothie with ingredients, base, add-ins, size, price, and name
    constructor(ingredients, base, addIns, size) {
        this.ingredients = ingredients;  // List of selected ingredients (e.g., Banana, Mango)
        this.base = base;  // Selected base (e.g., Water, Milk)
        this.addIns = addIns;  // List of selected add-ins (e.g., Protein, Chia Seeds)
        this.size = size;  // Selected size (Small, Medium, Large)
        this.price = this.calculatePrice();  // Calculate the price based on size and add-ins
        this.name = this.generateSmoothieName();  // Generate a random smoothie name based on the first ingredient
    }

    // Method to calculate the price of the smoothie
    calculatePrice() {
        // Base price based on size
        let basePrice = this.size === "Small" ? 5 : this.size === "Medium" ? 7 : 9;
        // Additional cost for add-ins, each add-in adds $0.5 to the price
        let addInCost = this.addIns.length * 0.5;
        // Return the total price
        return basePrice + addInCost;
    }

    // Method to generate a name for the smoothie based on a random adjective and the first ingredient
    generateSmoothieName() {
        // Array of adjectives to use for smoothie names
        const adjective = ["Tropical", "Fresh", "Energizing", "Power"];
        // Randomly select an adjective from the array
        const randomIndex = Math.floor(Math.random() * adjective.length);
        // Return the generated smoothie name
        return `${adjective[randomIndex]} ${this.ingredients[0]} Smoothie`;
    }

    // Method to generate a description of the smoothie order
    getDescription() {
        // Return a formatted description of the smoothie order including size, base, ingredients, add-ins, and total price
        return `${this.size} smoothie with ${this.base} and ${this.ingredients.join(", ")}. Add-ins: ${this.addIns.join(", ")}. Total: $${this.price.toFixed(2)}`;
    }
}

// Function to handle smoothie order when the user clicks the "Order" button
function orderSmoothie() {
    // Get selected ingredients from the checkboxes
    const ingredients = Array.from(document.querySelectorAll('input[name="ingredient"]:checked')).map(i => i.value);
    // Get selected base from the dropdown
    const base = document.getElementById("base").value;
    // Get selected add-ins from the checkboxes
    const addIns = Array.from(document.querySelectorAll('input[name="add-in"]:checked')).map(i => i.value);
    // Get selected size from the radio buttons
    const size = document.querySelector('input[name="size"]:checked').value;

    // Create a new Smoothie object with the selected options
    const smoothie = new Smoothie(ingredients, base, addIns, size);
    // Display the smoothie details in the output section
    document.getElementById("smoothie-output").innerText = `Your smoothie: ${smoothie.name}\n${smoothie.getDescription()}`;
    
    // Update the progress bar based on selected options
    updateProgressBar();
}

// Function to update the progress bar based on how many options the user has selected
function updateProgressBar() {
    // Get the number of selected options (checkboxes, radio buttons, and dropdowns)
    const selectedOptions = document.querySelectorAll('input:checked, select option:checked').length;
    // Get the total number of input options (checkboxes, radio buttons, and dropdowns)
    const totalOptions = document.querySelectorAll('input, select').length;
    // Calculate the progress as a percentage of selected options
    const progressPercentage = (selectedOptions / totalOptions) * 100;
    // Set the width of the progress bar based on the percentage
    document.getElementById("progress-bar").style.width = progressPercentage + "%";
}
