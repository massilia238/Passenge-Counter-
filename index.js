

let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    console.log("The button was clicked")
     count = count + 1
     console.log(count )
     countEl.innerText = count 
}
 
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countDash = count  + " _ "
    // 3. Render the variable in the saveEl using innerText
    saveEl .innerText += countDash
    // NB: Make sure to not delete the existing content of the paragraph
    // 4. Reset the count to 0
     count = 0
     countEl.innerText = count
    console.log(count)
}

// //STRING 
// let name = "massilia"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name + "!"
// console.log(myGreeting)



