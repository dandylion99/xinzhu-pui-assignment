function getGlazingPrice(){
    let glazingElement = document.querySelector("#glazing");
    let glazingNum = glazingElement.value;
    const glazingList = {
        "Keep Original": 0,
        "Sugar milk": 0,
        "Vanilla milk": 0.5,
        "Double chocolate": 1.5 
    };
    return glazingList[glazingNum];
}

function getPackPrice(){
    let packElement = document.querySelector("#pack");
    let packNum = packElement.value;
    const packList = {
        "1": 1,
        "3": 3,
        "6": 5,
        "12": 10
    }
    // console.log(packList[packNum]);
    return packList[packNum];
}

function glazingChange(){
    glazingPrice = getGlazingPrice();
    // check current price change
    // console.log("glazingprice: "+glazingPrice+", packPrice "+packPrice);
    updatePrice();
}

function packChange(){
    packPrice = getPackPrice();
    // check current price change
    // console.log("glazingprice: "+glazingPrice+", packPrice "+packPrice);
    updatePrice();
}

function updatePrice(){
    const basePrice = 2.49; //will be changed when other cakes are added
    let totalPrice  = (basePrice + glazingPrice)*packPrice;
    let priceElement = document.querySelector("#totalPrice");
    // console.log("totalPrice: "+totalPrice);
    priceElement.innerText = "$ "+totalPrice.toFixed(2);

}

// store glazingPrice and packPrice as global variable
let glazingPrice = getGlazingPrice();
let packPrice = getPackPrice();