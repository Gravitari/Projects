let currentBidder = 1
let currentPrice = 0
let highestBidder = 1
let passOne = false
let passTwo = false
let passThree = false
const mainBid = document.getElementById("current-bid")


const inputElone = document.getElementById("input-el-one")
const bidOneBtn = document.getElementById("bid-one")
const passOnebtn = document.getElementById("pass-one")
bidOneBtn.addEventListener("click", function() {
    if (currentBidder == 1){
        passOne = false
        if (inputElone.value > currentPrice){
            currentPrice =  inputElone.value 
            mainBid.textContent =  "$ " + currentPrice + " by Bidder 1"
            highestBidder = 1
        } else {
            alert("You must make a bigger offer. Your turn past")
        }
        currentPrice = Number(inputElone.value)
        currentBidder = 2
        alert("Bidder 2 must play")
        inputElone.value = ''
    } else {
        alert("It is not Bidder's 1 turn.")
        inputElthree.value = ''
    }
})  

passOnebtn.addEventListener("click",function() {
    if (currentBidder==1){
        currentBidder = 2
        passOne = true
        alert("Bider 2 must play " + currentBidder)
    } else {
        alert("It is not Bidder's 1 turn")
        inputElthree.value = ''
    }
    sold()
})


const inputEltwo = document.getElementById("input-el-two")
const bidTwoBtn = document.getElementById("bid-two")
const passTwobtn = document.getElementById("pass-two")
bidTwoBtn.addEventListener("click", function(){
    if (currentBidder == 2){
        passTwo = false
        if (inputEltwo.value> currentPrice){
            currentPrice = inputEltwo.value
            mainBid.textContent = "$ " + currentPrice + " by Bidder 2"
            highestBidder = 2
        } else {
            alert("You must make a bigger offer. Your turn past")
        }
        currentPrice = Number(inputEltwo.value) 
        currentBidder = 3
        alert("Bider 3 must play.")
        inputEltwo.value = ''
    } else {
        alert("It is not Bidder's 2 turn")
        inputElthree.value = ''
    }

})

passTwobtn.addEventListener("click", function(){
    if (currentBidder==2){
        currentBidder = 3 
        passTwo = true
        alert("Bider 3 must play")
    } else {
        alert("It is not Bidder's 2 turn")
        inputElthree.value = ''
    }
    sold()
})


const inputElthree = document.getElementById("input-el-three")
const bidThreeBtn = document.getElementById("bid-three")
const passThreebtn = document.getElementById("pass-three")
bidThreeBtn.addEventListener("click", function(){
    if (currentBidder == 3){
        passThree = false
        if (inputElthree.value > currentPrice){
            currentPrice = inputElthree.value
            mainBid.textContent =  "$ " + currentPrice  + " by Bidder 2"
            highestBidder = 3
        } else {
            alert("You must make a bigger offer. Your turn past")
        }
        currentPrice = Number(inputElthree.value)
        currentBidder = 1
        alert("Bider 1 must play.")
        inputElthree.value = ''
    } else {
        alert("It is not Bidder's 3 turn")
        inputElthree.value = ''
    }
})

passThreebtn.addEventListener("click", function(){
    if (currentBidder==3){
        currentBidder = 1
        passThree = true
        alert("Bider 1 must play")
    } else {
        alert("It is not Bidder's 3 turn")
        inputElthree.value = ''
    }
    sold()
}
)



function sold(){
    if (passTwo==true && passThree==true){
        alert("Sold to Bidder 1")
    } else if(passOne==true && passThree==true){
        alert("Sold to Bidder 2")
    } else if (passOne==true && passTwo==true) {
        alert("Sold to Bidder 3")
    } else {
        pass
    }
}

