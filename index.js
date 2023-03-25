console.log("Script loaded")

/*
querySelector
5 important methods:
.style
.textContent
.setAttribute()
.append()
.remove()
Event listener
Variables, objects, arrays
Conditional statements
for loops
DOM manipulation
*/

//get my button element from the DOM
let pinkButton = document.querySelector("#pink-butto")
console.log("my pink button",pinkButton)

//recipe to do something
function sellCar(event, carContainer){
    //this method creates an h3 tag
    let soldText = document.createElement("h3")
    //add some text to it
    soldText.textContent = "Sold"
    //updated the style property
    soldText.style.color = "red"

    //now display it at in the pink car div
    let thisCarContainer = document.querySelector(carContainer)
    thisCarContainer.append(soldText)
    //sold text will be red
    //remove the buy button, so no one else can buy it
    //event.target - the thing i interacted with
    console.log("event target",event.target)
    event.target.remove()
}

//when the user clicks our button
    //when buy button is clicked put the word sold under the car name
//listen for clicks on this pink button then call this function when it is clicked
pinkButton.addEventListener("click", function(event){
    console.log("Pink button clicked")    
    sellCar(event, "#pink-car")
})

let yellowButton = document.querySelector("#yellow-butto")
console.log(yellowButton)
yellowButton.addEventListener('click',function(event){
    console.log("yellow button clicked")    
    sellCar(event, "#yellow-car")
})

let blueButton = document.querySelector("#blue-butto")
console.log(blueButton)
blueButton.addEventListener('click',function(event){
    console.log("Pink button clicked")    
    sellCar(event,"#blue-car")
})