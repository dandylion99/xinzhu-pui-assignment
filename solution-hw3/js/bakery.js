function glazingChange(element){
    const glazingChange = element.value;
    const glazingList = {
        "Keep Original": 0,
        "Sugar milk": 0,
        "Vanilla milk": 0.5,
        "Double chocolate": 1.5 
    };
    glazingPrice = glazingList[glazingChange];
    // check current price change
    // console.log("glazingprice: "+glazingPrice+", packPrice "+packPrice);
    updatePrice();
}

function packChange(element){
    const packChange = element.value;
    const packList = {
        "1": 1,
        "3": 3,
        "6": 5,
        "12": 10
    };
    packPrice = packList[packChange];
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
let glazingPrice = 0; //the default value from detail.html
let packPrice = 1;