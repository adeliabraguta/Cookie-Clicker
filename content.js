const BigCookie = document.querySelector("#bigCookie")
const products = document.querySelectorAll(".product")
const upgrades = document.querySelectorAll(".crate")
const cookiesText = document.querySelector("#cookies").textContent.split(' ');
const cookieCount = parseInt(cookiesText[0].replace(/,/g, ''));

function CookieClicker() {
    BigCookie.click()
}

function convertToNumber(text) {
    const parts = text.split(' ');
    if (parts.length === 2) {
        const number = parseFloat(parts[0].replace(/,/g, '')) || 0;
        const word = parts[1].toLowerCase();
        switch (word) {
            case 'million':
                return number * 1e6;
            case 'billion':
                return number * 1e9;
            case 'trillion':
                return number * 1e12;
            case 'quadrillion':
                return number * 1e15;
            case 'quintillion':
                return number * 1e18;
            case 'sextillion':
                return number * 1e21;
            case 'septillion':
                return number * 1e24;
            default:
                return number;
        }
    } else {
        return parseFloat(text.replace(/,/g, '')) || 0;
    }
}

function ProductsClicker() {
    const cookiesText = document.querySelector("#cookies").textContent.split(' ');
    const cookieCount = parseInt(cookiesText[0].replace(/,/g, ''));
    for (let i = products.length - 1; i >= 0; i--) {
        UpgradeClicker()
        const productToClick = products[i];
        const productText = productToClick.querySelector(".price").textContent;
        const productPrice = convertToNumber(productText);
        if (productToClick.classList.contains("disabled") && cookieCount > 1/2 * productPrice) {
           return
        } else if (productToClick.classList.contains("enabled")) {
            productToClick.click()
        }
    }
}

function UpgradeClicker() {
    const u = document.querySelector("#upgrade0")
    if (u != null) {
        u.click()
    }
}


function CloseNotes() {
    const note = document.querySelectorAll(".note");
    if (note.length > 0) {
        const close = note[0]?.querySelector(".close");
            close.click();
    }
}
const observerNotes = new MutationObserver(CloseNotes);
const observerConfig = { childList: true, subtree: true };
observerNotes.observe(document.body, observerConfig);


function ShimmerClicker() {
const shimmer = document.querySelector(".shimmer")
    if(shimmer != null){
        shimmer.click()
    }
}
const observerShimmer = new MutationObserver(ShimmerClicker)
observerShimmer.observe(document.body, observerConfig)