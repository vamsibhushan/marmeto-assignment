

let mainPageDiv = document.getElementById("sectionPage");

const menBtn = document.getElementById("men-btn");
const womenBtn = document.getElementById("women-btn");
const kidsBtn = document.getElementById("kids-btn");
let givenData;




// here we display the data 
function displayPageDetails(container, each) {
    const {
        badge_text,
        compare_at_price,
        id,
        image,
        price,
        second_image,
        title,
        vendor
    } = each;

    const divEl = document.createElement("div");
    divEl.classList.add("item")
    container.appendChild(divEl);

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("imgDiv");
    const imgEl = document.createElement("img");
    imgEl.src = image;
    imgEl.classList.add("imgEl");
    imgDiv.appendChild(imgEl);
    if (badge_text !== null) {
        const imgText = document.createElement("p");
        imgText.textContent = badge_text;
        imgText.classList.add("textImg");
        imgDiv.appendChild(imgText);
    }

    divEl.appendChild(imgDiv);

    // below text
    const divEl2 = document.createElement("div");
    divEl2.classList.add("mainTitleDiv");
    divEl.appendChild(divEl2);

    let titlePara = document.createElement("p");
    titlePara.textContent = title;
    titlePara.classList.add("main-title");
    divEl2.appendChild(titlePara);

    let venderTxt = document.createElement("p");
    venderTxt.textContent = "•  " + vendor;
    divEl2.appendChild(venderTxt);

    //price details
    let priceDiv = document.createElement("div");
    priceDiv.classList.add("price-div");
    divEl.appendChild(priceDiv);

    let mainPrice = document.createElement("p");
    mainPrice.textContent = "Rs " + price + ".00";
    mainPrice.classList.add("price");
    priceDiv.appendChild(mainPrice);

    let cutOffPrice = document.createElement("p");
    cutOffPrice.textContent = compare_at_price + ".00";
    cutOffPrice.classList.add("cutOff");
    priceDiv.appendChild(cutOffPrice);

    let discountPrice = document.createElement("p");
    discountPrice.textContent = "50% Off";
    discountPrice.style.color = "Red";
    priceDiv.appendChild(discountPrice);

    //add to cart button 
    let cartBuyBtn = document.createElement("div");
    cartBuyBtn.classList.add("buy-cart-btn");
    divEl.appendChild(cartBuyBtn);
    let buyNow = document.createElement("button");
    buyNow.textContent = "Buy Now";
    buyNow.classList.add("cart-Btn");
    cartBuyBtn.appendChild(buyNow);

    let cartBtn = document.createElement("button");
    cartBtn.textContent = "Add to Cart";
    cartBtn.classList.add("cart-Btn");
    cartBuyBtn.appendChild(cartBtn);

}

function menPageDetails(details) {
    mainPageDiv.innerHTML = '';
    menBtn.classList.add("activeBtn");

    for (const each of details.category_products) {
        displayPageDetails(mainPageDiv, each);
    }
}

const options = {
    method: "GET",
};

const url = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json';

fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let {
            categories
        } = data;
        givenData = categories;
        menPageDetails(givenData[0]);
    });


function womenPageDetails(details) {
    mainPageDiv.innerHTML = '';
    for (const each of details.category_products) {
        displayPageDetails(mainPageDiv, each);
    }
}

function kidsPageDetails(details) {
    mainPageDiv.innerHTML = '';
    for (const each of details.category_products) {
        displayPageDetails(mainPageDiv, each);
    }
}



function display(details) {

    if (details === "men") {
        menBtn.classList.add("activeBtn");
        womenBtn.classList.remove("activeBtn");
        kidsBtn.classList.remove("activeBtn");

        menPageDetails(givenData[0]);
    }
    if (details === "women") {
        menBtn.classList.remove("activeBtn");
        womenBtn.classList.add("activeBtn");
        kidsBtn.classList.remove("activeBtn");
        womenPageDetails(givenData[1]);
    }
    if (details === "kids") {
        menBtn.classList.remove("activeBtn");
        womenBtn.classList.remove("activeBtn");
        kidsBtn.classList.add("activeBtn");
        kidsPageDetails(givenData[2]);
    }


}
