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
    // check current price change
    // console.log("glazingprice: "+glazingPrice+", packPrice "+packPrice);
    updatePrice();
}

function packChange(element){
    const packChange = element.value;
    packPrice = packList[packChange].price;
    // check current price change
    //console.log("glazingprice: "+glazingPrice+", packPrice "+packPrice);
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
let glazingPrice = glazingList[0].price; //the default value from detail.html
let packPrice = packList[0].price;

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