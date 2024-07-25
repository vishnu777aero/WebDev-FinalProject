import { produce } from "./_sample-data.js";

const table = document.getElementById("table");

const displayPurchaseTable = () => {
    table.innerHTML = "";

    const selectedItems = produce.filter(p => p?.selectedAmount > 0);

    selectedItems.forEach((item) => {
        const makeRow = table.insertRow(-1);

        const makeColumn1 = makeRow.insertCell(0);
        const makeColumn2 = makeRow.insertCell(1);
        const makeColumn3 = makeRow.insertCell(2);
        const makeColumn4 = makeRow.insertCell(3);
        const makeColumn5 = makeRow.insertCell(4);
        const makeColumn6 = makeRow.insertCell(5);
        const makeColumn7 = makeRow.insertCell(6);

        item.subTotal = (item.priceKg * item.selectedAmount);

        makeColumn1.innerHTML = item.id;
        makeColumn2.innerHTML = item.name;
        makeColumn3.innerHTML = item.type;
        makeColumn4.innerHTML = item.priceKg;
        makeColumn5.innerHTML = item.availableQty;
        makeColumn6.innerHTML = item.selectedAmount;
        makeColumn7.innerHTML = item.subTotal.toFixed(2);
    })
}

displayPurchaseTable();