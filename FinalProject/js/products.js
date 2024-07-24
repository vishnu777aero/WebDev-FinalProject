const produce = [
    {
        name: "Apple",
        type: "Fruit",
        color: "Red",
        description: "Crisp and sweet, perfect for snacking.",
        availableQty: 500,
        imageUrl: "https://example.com/apple.jpg",
        isSeasonal: true,
        season: "Fall",
        priceKg: 3.5,
        nutritionInfo: "Calories: 52, Vitamins: A, C",
        rating: 4.7
    },
    {
        name: "Banana",
        type: "Fruit",
        color: "Yellow",
        description: "Rich in potassium, great for energy.",
        availableQty: 300,
        imageUrl: "https://example.com/banana.jpg",
        isSeasonal: false,
        season: "All",
        priceKg: 1.2,
        nutritionInfo: "Calories: 89, Vitamins: B6, C",
        rating: 4.5
    },
    {
        name: "Carrot",
        type: "Vegetable",
        color: "Orange",
        description: "Crunchy and sweet, great for salads.",
        availableQty: 400,
        imageUrl: "https://example.com/carrot.jpg",
        isSeasonal: true,
        season: "Winter",
        priceKg: 2.0,
        nutritionInfo: "Calories: 41, Vitamins: A, K",
        rating: 4.6
    },
    {
        name: "Tomato",
        type: "Vegetable",
        color: "Red",
        description: "Juicy and tangy, perfect for sauces.",
        availableQty: 350,
        imageUrl: "https://example.com/tomato.jpg",
        isSeasonal: true,
        season: "Summer",
        priceKg: 2.5,
        nutritionInfo: "Calories: 18, Vitamins: C, K",
        rating: 4.4
    },
    {
        name: "Strawberry",
        type: "Fruit",
        color: "Red",
        description: "Sweet and juicy, great for desserts.",
        availableQty: 200,
        imageUrl: "https://example.com/strawberry.jpg",
        isSeasonal: true,
        season: "Spring",
        priceKg: 6.0,
        nutritionInfo: "Calories: 32, Vitamins: C, Manganese",
        rating: 4.8
    },
    {
        name: "Spinach",
        type: "Vegetable",
        color: "Green",
        description: "Leafy and nutritious, perfect for salads.",
        availableQty: 150,
        imageUrl: "https://example.com/spinach.jpg",
        isSeasonal: false,
        season: "All",
        priceKg: 3.0,
        nutritionInfo: "Calories: 23, Vitamins: A, C, K",
        rating: 4.3
    },
    {
        name: "Potato",
        type: "Vegetable",
        color: "Brown",
        description: "Starchy and versatile, great for many dishes.",
        availableQty: 600,
        imageUrl: "https://example.com/potato.jpg",
        isSeasonal: false,
        season: "All",
        priceKg: 2.99,
        nutritionInfo: "Calories: 77, Vitamins: B6, C",
        rating: 4.5
    },
    {
        name: "Orange",
        type: "Fruit",
        color: "Orange",
        description: "Citrusy and refreshing, great for juices.",
        availableQty: 250,
        imageUrl: "https://example.com/orange.jpg",
        isSeasonal: true,
        season: "Winter",
        priceKg: 3.0,
        nutritionInfo: "Calories: 47, Vitamins: C, B1",
        rating: 4.7
    },
    {
        name: "Broccoli",
        type: "Vegetable",
        color: "Green",
        description: "Crunchy and nutritious, great for stir-fries.",
        availableQty: 180,
        imageUrl: "https://example.com/broccoli.jpg",
        isSeasonal: true,
        season: "Fall",
        priceKg: 4.0,
        nutritionInfo: "Calories: 34, Vitamins: C, K",
        rating: 4.4
    },
    {
        name: "Grapes",
        type: "Fruit",
        color: "Purple",
        description: "Sweet and juicy, perfect for snacking.",
        availableQty: 220,
        imageUrl: "https://example.com/grapes.jpg",
        isSeasonal: true,
        season: "Summer",
        priceKg: 5.5,
        nutritionInfo: "Calories: 69, Vitamins: C, K",
        rating: 4.6
    },
    {
        name: "Bell Pepper",
        type: "Vegetable",
        color: "Green",
        description: "Crisp and sweet, great for salads.",
        availableQty: 270,
        imageUrl: "https://example.com/bellpepper.jpg",
        isSeasonal: true,
        season: "Summer",
        priceKg: 3.5,
        nutritionInfo: "Calories: 20, Vitamins: A, C",
        rating: 4.5
    },
    {
        name: "Blueberry",
        type: "Fruit",
        color: "Blue",
        description: "Sweet and tangy, perfect for desserts.",
        availableQty: 180,
        imageUrl: "https://example.com/blueberry.jpg",
        isSeasonal: true,
        season: "Summer",
        priceKg: 8.0,
        nutritionInfo: "Calories: 57, Vitamins: C, K",
        rating: 4.9
    },
    {
        name: "Cucumber",
        type: "Vegetable",
        color: "Green",
        description: "Refreshing and hydrating, great for salads.",
        availableQty: 240,
        imageUrl: "https://example.com/cucumber.jpg",
        isSeasonal: true,
        season: "Summer",
        priceKg: 2.2,
        nutritionInfo: "Calories: 16, Vitamins: K, C",
        rating: 4.3
    },
    {
        name: "Mango",
        type: "Fruit",
        color: "Orange",
        description: "Tropical and sweet, great for smoothies.",
        availableQty: 150,
        imageUrl: "https://example.com/mango.jpg",
        isSeasonal: true,
        season: "Summer",
        priceKg: 4.0,
        nutritionInfo: "Calories: 60, Vitamins: A, C",
        rating: 4.7
    },
    {
        name: "Onion",
        type: "Vegetable",
        color: "Yellow",
        description: "Pungent and versatile, essential for cooking.",
        availableQty: 350,
        imageUrl: "https://example.com/onion.jpg",
        isSeasonal: false,
        season: "All",
        priceKg: 1.5,
        nutritionInfo: "Calories: 40, Vitamins: C, B6",
        rating: 4.4
    },
    {
        name: "Peach",
        type: "Fruit",
        color: "Peach",
        description: "Juicy and sweet, perfect for desserts.",
        availableQty: 200,
        imageUrl: "https://example.com/peach.jpg",
        isSeasonal: true,
        season: "Summer",
        priceKg: 4.5,
        nutritionInfo: "Calories: 39, Vitamins: A, C",
        rating: 4.6
    },
    {
        name: "Zucchini",
        type: "Vegetable",
        color: "Green",
        description: "Mild and tender, great for stir-fries.",
        availableQty: 220,
        imageUrl: "https://example.com/zucchini.jpg",
        isSeasonal: true,
        season: "Summer",
        priceKg: 2.8,
        nutritionInfo: "Calories: 17, Vitamins: A, C",
        rating: 4.5
    },
    {
        name: "Pineapple",
        type: "Fruit",
        color: "Yellow",
        description: "Tropical and tangy, perfect for snacks.",
        availableQty: 130,
        imageUrl: "https://example.com/pineapple.jpg",
        isSeasonal: false,
        season: "All",
        priceKg: 3.0,
        nutritionInfo: "Calories: 50, Vitamins: C, B6",
        rating: 4.7
    },
    {
        name: "Lettuce",
        type: "Vegetable",
        color: "Green",
        description: "Crisp and fresh, great for salads.",
        availableQty: 250,
        imageUrl: "https://example.com/lettuce.jpg",
        isSeasonal: false,
        season: "All",
        priceKg: 1.8,
        nutritionInfo: "Calories: 15, Vitamins: A, K",
        rating: 4.3
    },
    {
        name: "Pear",
        type: "Fruit",
        color: "Green",
        description: "Sweet and juicy, great for snacks.",
        availableQty: 200,
        imageUrl: "https://example.com/pear.jpg",
        isSeasonal: true,
        season: "Fall",
        priceKg: 3.5,
        nutritionInfo: "Calories: 57, Vitamins: C, K",
        rating: 4.6
    },
    {
        name: "Cabbage",
        type: "Vegetable",
        color: "Green",
        description: "Crunchy and nutritious, great for salads.",
        availableQty: 180,
        imageUrl: "https://example.com/cabbage.jpg",
        isSeasonal: false,
        season: "All",
        priceKg: 2.5,
        nutritionInfo: "Calories: 25, Vitamins: C, K",
        rating: 4.4
    },
    {
        name: "Kiwi",
        type: "Fruit",
        color: "Brown",
        description: "Tangy and sweet, great for snacks.",
        availableQty: 160,
        imageUrl: "https://example.com/kiwi.jpg",
        isSeasonal: true,
        season: "Winter",
        priceKg: 5.0,
        nutritionInfo: "Calories: 41, Vitamins: C, E",
        rating: 4.5
    },
    {
        name: "Beetroot",
        type: "Vegetable",
        color: "Red",
        description: "Earthy and sweet, great for salads.",
        availableQty: 200,
        imageUrl: "https://example.com/beetroot.jpg",
        isSeasonal: true,
        season: "Fall",
        priceKg: 3.0,
        nutritionInfo: "Calories: 43, Vitamins: C, B6",
        rating: 4.6
    },
    {
        name: "Watermelon",
        type: "Fruit",
        color: "Green",
        description: "Refreshing and hydrating, perfect for summer.",
        availableQty: 100,
        imageUrl: "https://example.com/watermelon.jpg",
        isSeasonal: true,
        season: "Summer",
        priceKg: 1.5,
        nutritionInfo: "Calories: 30, Vitamins: A, C",
        rating: 4.8
    }
];

let displayString = ``;

produce.forEach(({ name, description, color, availableQty, imageUrl, season, priceKg, nutritionInfo, rating }) => {
    displayString += `
        <div class="product">
                <img src="${imageUrl}" alt="image of ${color} ${name}">
                <div>
                    <h3>${name}</h3>
                    <p>${description}</p>
                    <p>${season}</p>
                    <p>${availableQty}</p>
                    <p>${priceKg}</p>
                    <p>${nutritionInfo}</p>
                    <p>${rating}</p>
                    <p>Add to cart?</p>
                    <button>+</button>
                    <input type="text" value="0">
                    <button>-</button>
                </div>
            </div>
    `
});

document.getElementById("productsDisplayBox").innerHTML = displayString;