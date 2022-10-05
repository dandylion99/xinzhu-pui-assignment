//array cart to store selected products
let cart=[];

class Roll {
    type;
    glazing;
    size;
    basePrice;
    element;
    totalPrice;

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
   }
}

//object array to store info
const glazingList = [
    {
        glazing: "Keep original",
        price: 0,
    },
    {
        glazing: "Sugar milk",
        price: 0,
    },
    {
        glazing: "Vanilla milk",
        price: 0.5,
    },
    {
        glazing: "Double chocolate",
        price: 1.5,
    },
];

const packList = [
    {
        pack: "1",
        price: 1,
    },
    {
        pack: "3",
        price: 3,
    },{
        pack: "6",
        price: 5,
    },{
        pack: "12",
        price: 10,
    },
];

// create the DOM element for an Roll object
function createElement(roll){
    let template = document.querySelector("#roll-template");
    let clone = template.content.cloneNode(true);
    roll.element = clone.querySelector(".cart-card");

    let container = document.querySelector("#roll-list");
    container.prepend(roll.element);

    const deleteButton = roll.element.querySelector(".cart-bottom");
    deleteButton.addEventListener('click', () => {
        removeElement(roll);
        updateTotal();
    }); //reference: lab05 example note-end.
    
    updateElement(roll);
}

// update the DOM element (text, image, price) for an Roll 
function updateElement(roll){
    let newBasePrice =  rolls[roll.type]['basePrice'];
    let newGlazingPrice = glazingList.find(x => x.glazing === roll.glazing).price; //reference: https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
    let newPackPrice = packList.find(x => x.pack == roll.size).price; //does not require roll.size to be string; reference: https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
    roll.totalPrice = (newBasePrice + newGlazingPrice)*newPackPrice;
    let newRollURL = "assets/"+rolls[roll.type]['imageFile'];

    let rollImageElement = roll.element.querySelector(".pic-cart");
    rollImageElement.src = newRollURL;

    let rollDespElement = roll.element.querySelector(".cart-mid");
    rollDespElement.innerHTML = roll.type+" Cinnamon Roll<br>Glazing: "+roll.glazing+"<br>Pack size: "+roll.size;

    let rollPriceElement = roll.element.querySelector(".cart-right");
    rollPriceElement.innerHTML = "<h1>$ "+roll.totalPrice.toFixed(2)+"</h1>";
}

// be triggered when "remove" is clicked; remove the roll from the DOM and the cart array
function removeElement(roll){
    roll.element.remove();

    //remove this roll from cart array, reference: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    const index = cart.indexOf(roll);
    if(index > -1){
        cart.splice(index, 1);
    }
}

// be triggered when glazing is changed (on detail page)
function glazingChange(element){
    const glazingChange = element.value;  
    glazingPrice = glazingList[glazingChange].price;
    rollGlazing = glazingList[glazingChange].glazing;
    // check current price change
    // console.log("glazingprice: "+glazingPrice+", packPrice "+packPrice);
    updatePrice();
}

// be triggered when pack is changed (on detail page)
function packChange(element){
    const packChange = element.value;
    packPrice = packList[packChange].price;
    packSize = packList[packChange].pack;
    // check current price change
    // console.log("glazingprice: "+glazingPrice+", packPrice "+packPrice);
    updatePrice();
}

// update total price based on glazing, pack, and base price (on detail page)
function updatePrice(){
    let totalPrice  = (basePrice + glazingPrice)*packPrice;
    let priceElement = document.querySelector("#totalPrice");
    // console.log("totalPrice: "+totalPrice);
    priceElement.innerText = "$ "+totalPrice.toFixed(2);
}

//update DOM elements for the current product
function updateProduct(){
    let imgSrc = currentRoll['imageFile'];
    let headerElement = document.querySelector("#product-header-text");
    let picElement = document.querySelector("#product-pic");
    let priceElement = document.querySelector("#totalPrice");
 
    productName = rollType+" Cinnamon Roll";
    headerElement.innerText = productName;

    picElement.src = "assets/"+imgSrc;
    priceElement.innerText = "$ "+basePrice;
}

// update cart array when new roll is added (on detial page)
function updateCart(){
    let newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(newRoll);
    console.log("current cart: "+JSON.stringify(cart)); //use stringify to print the object's content
}

// add four Rolls into cart (on cart page)
function initializeCart(){    
    let newRoll = new Roll("Original", "Sugar milk", 1, rolls['Original']['basePrice']);
    cart.push(newRoll);

    newRoll = new Roll("Walnut", "Vanilla milk", 12, rolls['Walnut']['basePrice']);
    cart.push(newRoll);

    newRoll = new Roll("Raisin", "Sugar milk", 3, rolls['Raisin']['basePrice']);
    cart.push(newRoll);


    newRoll = new Roll("Apple", "Keep original", 3, rolls['Apple']['basePrice']);
    cart.push(newRoll);

    for (let roll of cart){
        createElement(roll);
    }

    console.log(cart);
    updateTotal();
}

// update th total price on the cart page
function updateTotal(){
    let sum = 0;
    for (let roll of cart){
        sum += roll.totalPrice;
    }
    let sumElement = document.querySelector("#sum");
    sumElement.innerText = "$ "+sum.toFixed(2);
}

// global variables, to use on the detail page
// get parameter from URL
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
let currentRoll = rolls[rollType];

// store glazingPrice and packPrice as global variable
let glazingPrice = glazingList[0].price; //the default value from detail.html
let rollGlazing = glazingList[0].glazing;
let packPrice = packList[0].price;
let packSize = packList[0].pack;
let basePrice = 0;


// if it's the detail page, then create select elements
if (document.URL.includes("detail")){
    //console.log("you are on the detail page");

    // if currentRoll != null, namely it's on the detail page
    if(currentRoll){
        console.log("current roll is true");
        basePrice = currentRoll['basePrice']; //will be changed when other cakes are added
    }
    updateProduct();

    //add options to select
    let glazingElement = document.querySelector("#glazing");
    // if glazingElement exsits (it's on the detail page)
    if (glazingElement){
        for (let i=0;i<glazingList.length;i+=1){
            let option = document.createElement("option");
            option.text = glazingList[i].glazing;
            option.value = i;
            glazingElement.add(option);
        }
    }

    let packElement = document.querySelector("#pack");
    // if packElement exsits (it's on the detail page)
    if(packElement){
        for (let i=0;i<packList.length;i+=1){
            let option = document.createElement("option");
            option.text = packList[i].pack;
            option.value = i;
            packElement.add(option);
        }
    }
}

// if it's on the cart page, then initialize cart
if (document.URL.includes("cart")){
    //console.log("you are on the cart page");
    initializeCart();
}
