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
        const makeColumn8 = makeRow.insertCell(7);
        const makeColumn9 = makeRow.insertCell(8);

        item.subTotal = (item.priceKg * item.selectedAmount);

        makeColumn1.innerHTML = item.id;
        makeColumn2.innerHTML = item.name;
        makeColumn3.innerHTML = item.type;
        makeColumn4.innerHTML = item.color;
        makeColumn5.innerHTML = item.description;
        makeColumn6.innerHTML = item.priceKg;
        makeColumn7.innerHTML = item.availableQty;
        makeColumn8.innerHTML = item.selectedAmount;
        makeColumn9.innerHTML = item.subTotal.toFixed(2);
    })

    if (!selectedItems.length) {
        document.getElementById("message").innerHTML = "<b>Oops, no items in your Cart yet!</b>";
    }
}

displayPurchaseTable();

const calculateTotal = () => {
    const total = produce.filter(item => item.hasOwnProperty("selectedAmount")).reduce((p, c) => p + (c.selectedAmount || 0) * c.priceKg, 0).toFixed(2);
    document.getElementById("total").innerHTML = "Total: $" + total;
}

calculateTotal();

const isCartEmpty = () => !table.rows.length;

window.updateCart = () => {
    const url = new URL(window.location.toString().replace("purchase", "products"));

    if (!isCartEmpty()) {
        url.searchParams.set("showCart", "true");
    }

    window.location.href = url.toString();
}

const loginDialog = document.getElementById("login-dialog");
const signupDialog = document.getElementById("signup-dialog");

window.startPurchase = () => {
    if (isCartEmpty()) {
        return;
    }

    loginDialog.showModal();
    loadUserNameFromCookie("login-username");
}

const loadUserNameFromCookie = (id) => {
    const username = document.cookie.split(";").find(s => s.includes("username"))?.split("=")[1];

    if(username) {
        document.getElementById(id).value = username;
    }
}

const setUsernameInCookie = (username) => {
    document.cookie = "username=" + username; 
}

window.verifyPurchase = () => {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const jsonUsers = localStorage.getItem('users');

    let isFound = false;

    if (jsonUsers) {
        const users = JSON.parse(jsonUsers);
        isFound = users.find(user => user.username.toLowerCase() === username.toLowerCase() && user.password === password);
    }

    if (isFound) {
        closeLoginDialog();
        confirmPurchase();
        setUsernameInCookie(username);
    } else {
        loginDialog.getElementsByTagName('p')[0].innerHTML = "Username or Password Error"
    }
}

window.closeLoginDialog = () => {
    loginDialog.close();
}


const confirmPurchase = () => {
    produce.filter(item => item.hasOwnProperty("selectedAmount")).forEach(item => {
        item.availableQty -= +item.selectedAmount;
        delete item.selectedAmount;
    })

    localStorage.setItem("allItems", JSON.stringify(produce));
    displayPurchaseTable();
    calculateTotal();

    alert("Purchase Confirmed, Thanks for Shopping with us!")
}

window.openSignupDialog = () => {
    closeLoginDialog();
    signupDialog.showModal();
}

window.closeSignupDialog = () => {
    signupDialog.close();
}

window.addNewUser = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    const userExists = users?.find(user => user.username.toLowerCase() === username.toLowerCase());

    if(userExists) {
        signupDialog.getElementsByTagName('p')[0].innerHTML = "User already exists";
    } else if (!username.trim()) {
        signupDialog.getElementsByTagName('p')[0].innerHTML = "Username can't be empty";
    } else {
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        signupDialog.close();
        confirmPurchase();
    }
}