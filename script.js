class Smoothie {
    constructor(ingredients, base, addIns, size) {
        this.ingredients = ingredients;
        this.base = base;
        this.addIns = addIns;
        this.size = size;
        this.price = this.calculatePrice();
        this.name = this.generateSmoothieName();
    }

    calculatePrice() {
        let basePrice = this.size === "Small" ? 5 : this.size === "Medium" ? 7 : 9;
        let addInCost = this.addIns.length * 0.5;
        return basePrice + addInCost;
    }

    getDescription() {
        return `${this.size} smoothie with ${this.base} and ${this.ingredients.join(", ")}. Add-ins: ${this.addIns.join(", ")}. Total: $${this.price.toFixed(2)}`;
    }

    generateSmoothieName() {
        const adjective = ["Tropical", "Fresh", "Energizing", "Power"];
        const randomIndex = Math.floor(Math.random() * adjective.length);
        return `${adjective[randomIndex]} ${this.ingredients[0]} Smoothie`;
    }
}

function orderSmoothie() {
    const ingredients = Array.from(document.querySelectorAll('input[name="ingredient"]:checked')).map(i => i.value);
    const base = document.getElementById("base").value;
    const addIns = Array.from(document.querySelectorAll('input[name="add-in"]:checked')).map(i => i.value);
    const size = document.querySelector('input[name="size"]:checked').value;

    const smoothie = new Smoothie(ingredients, base, addIns, size);
    document.getElementById("smoothie-output").innerText = `Your smoothie: ${smoothie.name}\n${smoothie.getDescription()}`;
    updateProgressBar();
}

function updateProgressBar() {
    const selectedOptions = document.querySelectorAll('input:checked, select option:checked').length;
    const totalOptions = document.querySelectorAll('input, select').length;
    const progressPercentage = (selectedOptions / totalOptions) * 100;
    document.getElementById("progress-bar").style.width = progressPercentage + "%";
}
