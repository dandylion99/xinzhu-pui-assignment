//array cart to store selected products
let cart=[];

class Roll {
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
        glazing: "Keep Original",
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

function glazingChange(element){
    const glazingChange = element.value;  
    glazingPrice = glazingList[glazingChange].price;
    rollGlazing = glazingList[glazingChange].glazing;
    // check current price change
    // console.log("glazingprice: "+glazingPrice+", packPrice "+packPrice);
    updatePrice();
}

function packChange(element){
    const packChange = element.value;
    packPrice = packList[packChange].price;
    packSize = packList[packChange].pack;
    // check current price change
    //console.log("glazingprice: "+glazingPrice+", packPrice "+packPrice);
    updatePrice();
}

function updatePrice(){
    let totalPrice  = (basePrice + glazingPrice)*packPrice;
    let priceElement = document.querySelector("#totalPrice");
    // console.log("totalPrice: "+totalPrice);
    priceElement.innerText = "$ "+totalPrice.toFixed(2);
}



//add options to select
let glazingElement = document.querySelector("#glazing");
for (let i=0;i<glazingList.length;i+=1){
    let option = document.createElement("option");
    option.text = glazingList[i].glazing;
    option.value = i;
    glazingElement.add(option);
}

let packElement = document.querySelector("#pack");
for (let i=0;i<packList.length;i+=1){
    let option = document.createElement("option");
    option.text = packList[i].pack;
    option.value = i;
    packElement.add(option);
}

//get parameter from URL
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
let currentRoll = rolls[rollType];

// store glazingPrice and packPrice as global variable
let glazingPrice = glazingList[0].price; //the default value from detail.html
let rollGlazing = glazingList[0].glazing;

let packPrice = packList[0].price;
let packSize = packList[0].pack;

let basePrice = currentRoll['basePrice']; //will be changed when other cakes are added

updateProduct();

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

function updateCart(){
    let newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(newRoll);
    console.log("current cart: "+JSON.stringify(cart)); //use stringify to print the object's content
}




