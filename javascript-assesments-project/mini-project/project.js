console.log("--- Initializing Inventory System ---");

const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

function getCategory(price) {
    let category;

    if (price < 50) {
        category = "Budget";
    } else if (price < 200) {
        category = "Standard";
    } else {
        category = "Premium";
    }

    switch (category) {
        case "Budget":
            return "Budget";
        case "Standard":
            return "Standard";
        case "Premium":
            return "Premium";
        default:
            return "Unknown";
    }
}

function calculateTotal(items) {
    let total = 0;

    for (const item of items) {
        total += item.price;
    }

    return total;
}

const calculateDiscount = (price, discount = 0) => {
    return price - (price * discount / 100);
};

const calculateTax = (price, taxRate = 0) => {
    return price + (price * taxRate / 100);
};

console.log("[Prompt executed: User adds a new product]");

let productName = prompt("Enter product name:");
let productPrice = Number(prompt("Enter product price:"));

if (
    productName !== null &&
    productName.trim() !== "" &&
    Number.isFinite(productPrice) &&
    productPrice > 0
) {
    inventory.push({
        name: productName.trim(),
        price: productPrice
    });
} else {
    console.log("Invalid input. Product was not added.");
}

console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach(item => {
    console.log(
        `* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`
    );
});

console.log("\n--- Financial Analytics ---");

const totalValue = calculateTotal(inventory);

console.log("Total Inventory Value: $" + totalValue);


let affordableItems = inventory.filter(item => {
    if (item.price >= 200) {
        return false;
    }
    return true;
});

console.log(
    "Filtered Affordable Items (Under $200):",
    affordableItems.map(item => item.name)
);

const report = inventory.map(
    item => `${item.name.toUpperCase()}: $${item.price}`
);

console.log("Formatted Report List:", report);
