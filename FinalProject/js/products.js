let produce;

if (localStorage.getItem("allItems")) {
    produce = JSON.parse(localStorage.getItem("allItems"));
} else {
    produce = [
        {
            name: "Apple",
            type: "Fruit",
            color: "Red",
            description: "Crisp and sweet, perfect for snacking.",
            availableQty: 500,
            imageUrl: "./Images/produce/apples.jpg",
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
            imageUrl: "./Images/produce/bananas.jpg",
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
            imageUrl: "./Images/produce/carrots.jpg",
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
            imageUrl: "./Images/produce/tomatoes.jpg",
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
            imageUrl: "./Images/produce/strawberries.jpg",
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
            imageUrl: "./Images/produce/spinaches.jpg",
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
            imageUrl: "./Images/produce/potatoes.jpg",
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
            imageUrl: "./Images/produce/oranges.jpg",
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
            imageUrl: "./Images/produce/broccolis.jpg",
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
            imageUrl: "./Images/produce/grapes.jpg",
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
            imageUrl: "./Images/produce/bell-peppers.jpg",
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
            imageUrl: "./Images/produce/blueberries.jpg",
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
            imageUrl: "./Images/produce/cucumbers.jpg",
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
            imageUrl: "./Images/produce/mangoes.jpg",
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
            imageUrl: "./Images/produce/onions.jpg",
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
            imageUrl: "./Images/produce/peaches.jpg",
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
            imageUrl: "./Images/produce/zucchinis.jpg",
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
            imageUrl: "./Images/produce/pineapples.jpg",
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
            imageUrl: "./Images/produce/lettuces.jpg",
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
            imageUrl: "./Images/produce/pears.jpg",
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
            imageUrl: "./Images/produce/cabbages.jpg",
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
            imageUrl: "./Images/produce/kiwis.jpg",
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
            imageUrl: "./Images/produce/beetroots.jpg",
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
            imageUrl: "./Images/produce/watermelons.jpg",
            isSeasonal: true,
            season: "Summer",
            priceKg: 1.5,
            nutritionInfo: "Calories: 30, Vitamins: A, C",
            rating: 4.8
        }
    ];

    produce.forEach((item, i) => { item["id"] = i + 1 });
}

const displayProduce = (produce) => {
    let displayString = ``;

    produce.forEach(({ name, description, color, availableQty, imageUrl, season, priceKg, nutritionInfo, rating, selectedAmount, id }) => {
        displayString += `
        <div class="product" id="product-${id}">
                <img src="${imageUrl}" alt="image of ${color} ${name}">
                <div>
                    <h3>${name}</h3>
                    <p>${description}<b>(ID:${id})</b></p>
                    <p><b>Season: </b>${season}</p>
                    <p><b>Available Quantity: </b>${availableQty}</p>
                    <p><b>Price per kg(CAD): </b>${priceKg}</p>
                    <p><b>Nutrition: </b>${nutritionInfo}</p>
                    <p><b>Rating(out of 5): </b>${rating}</p>
                    <p>Add to cart?</p>
                    <button class="orange" onClick="removeProductButton('product-${id}')">-</button>
                    <input type="text" value="${selectedAmount || 0}" disabled>
                    <button class="green" onClick="addProductButton('product-${id}')">+</button>
                    <b>  Subtotal $: </b>
                    <input type="text" value="${((selectedAmount || 0) * priceKg).toFixed(2)}" disabled>
                </div>
            </div>
    `
    });

    if (!produce || !produce.length) {
        displayString = "<b>No Items found, change filter parameters</b>";
    }

    document.getElementById("productsDisplayBox").innerHTML = displayString;
}

displayProduce(produce);

const addProductButton = (stringId) => {
    const id = +stringId.split("-")[1];
    item = produce.find(item => item.id === id);

    const maxValue = item.availableQty;
    const priceKg = item.priceKg;

    const selectedAmountInput = document.getElementById(stringId).getElementsByTagName("input")[0];
    const SubtotalInput = document.getElementById(stringId).getElementsByTagName("input")[1];

    const selectedAmount = Number(selectedAmountInput.value) + 1;

    if (selectedAmount <= maxValue && selectedAmount >= 0) {
        selectedAmountInput.value = selectedAmount;
        SubtotalInput.value = ((selectedAmount || 0) * priceKg).toFixed(2)
        item["selectedAmount"] = selectedAmount;

        displayTotal();
    }
}

const removeProductButton = (stringId) => {
    const id = +stringId.split("-")[1];
    item = produce.find(item => item.id === id);

    const maxValue = item.availableQty;
    const priceKg = item.priceKg;

    const selectedAmountInput = document.getElementById(stringId).getElementsByTagName("input")[0];
    const SubtotalInput = document.getElementById(stringId).getElementsByTagName("input")[1];

    const selectedAmount = Number(selectedAmountInput.value) - 1;

    if (selectedAmount <= maxValue && selectedAmount >= 0) {
        selectedAmountInput.value = selectedAmount;
        SubtotalInput.value = ((selectedAmount || 0) * priceKg).toFixed(2)
        item["selectedAmount"] = selectedAmount;

        displayTotal();
    }
}

const onSearch = () => {
    const name = document.getElementById("filter-name").value;
    const type = document.getElementById("filter-type").value;
    const color = document.getElementById("filter-color").value;
    const season = document.getElementById("filter-season").value;

    const filteredProduce = produce.filter((item) => {
        const hasSameName = name ? item.name.toLowerCase().includes(name.toLowerCase()) : true;
        const hasSameType = type === 'any' ? true : item.type.toLowerCase() === type.toLowerCase();
        const hasSameColor = color === 'any' ? true : item.color.toLowerCase() === color.toLowerCase();
        const hasSameSeason = season === 'any' ? true : item.season.toLowerCase() === season.toLowerCase();

        return hasSameName && hasSameType && hasSameColor && hasSameSeason;
    });

    displayProduce(filteredProduce);
}

const onClear = () => {
    displayProduce(produce)

    document.getElementById("filter-name").value = "";
    document.getElementById("filter-type").value = "any";
    document.getElementById("filter-color").value = "any";
    document.getElementById("filter-season").value = "any";
};

const onShowCart = () => {
    const selectedItems = produce.filter(item => !!item.selectedAmount);
    displayProduce(selectedItems);
    onSaveCart();
}

const onSaveCart = () => {
    localStorage.setItem("allItems", JSON.stringify(produce));
}

const onClearCart = () => {
    produce.forEach(item => delete item.selectedAmount);
    displayProduce(produce);
    onSaveCart();
    displayTotal(0);
}

const displayTotal = (price) => {
    let totalPrice = 0.0;

    if(!price) {
        totalPrice = produce.reduce((p, c) => p + (c.selectedAmount || 0) * c.priceKg, 0);
    }

    document.getElementById("total").innerHTML = `<p>Total</p><b>$${totalPrice.toFixed(2)}</b>`;
}

displayTotal();