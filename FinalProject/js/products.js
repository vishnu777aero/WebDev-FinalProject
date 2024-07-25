import { produce } from './_sample-data.js';

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
        displayString = "<b>Oops! No Items found</b>";
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