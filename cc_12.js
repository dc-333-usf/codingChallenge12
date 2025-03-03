//Task 1: business dashboard.
let dashboard = document.getElementById("dashboard"); //let a variable be equal to the element we select from html with the ID "dashboard"
let dashboard1 = document.querySelector("#dashboard"); //find the same div, but using the query selector method. This method is more flexible, but slower
const metricCard = document.createElement('div'); //create the constant metricCard, which will be a new div element
metricCard.setAttribute("class", "metric-card"); //set the attribute class equal to metric-card
metricCard.setAttribute("id", "revenueCard"); //set the attribute id equal to revenueCard
metricCard.innerHTML = `
    <h2>Revenue</h2>
    <p>$0</p>`; //use the innerHTML method to add content to the div element. Use innerHTML and not textContent because this method can interpret html tags
dashboard.appendChild(metricCard); //use the appendChild method to add the metricCard div element as a child of the dashboard div element

//Task 2: updating dashboard metrics.
const allMetricCards = document.querySelectorAll(".metric-card"); //search the html document for all instances of an element with the "metric-card" class and store them
const arrayMetricCards = [...allMetricCards]; //use the spread operator to create an array of all the instances and store it. The previous line of code can be used here instead of the variable
arrayMetricCards.forEach(n => { //use the forEach method on the array to modify each instance. In this case, we only have one instance of the class, so this will be the only thing it changes
    n.style.backgroundColor = "black"; //set the background color of the div element to black
    n.style.color = "blue"; //set the text color of the div element to blue
    n.innerHTML += "<h3>- Updated</h3>"; //add the word updated to the div element as a heading
});

//Task 3: dynamic inventory management.
function newItem(li, setClass = "product-item") { //create a new function to add an item, the inputs will be the list item and the class. The class is automatically set to "product-item"
    const list = document.getElementById("inventoryList"); //create a constant equal to the element with the id "inventoryList"
    const newListItem = document.createElement("li"); //create a constant equal to a new element with the li tag
    newListItem.textContent = li; //set the content of the list item to the input in the function
    newListItem.setAttribute("class", setClass); //set the attribute of class equal to the input in the function. If not specified, it will be "product-item"
    list.appendChild(newListItem); //append the created list item to the list constant (the element with id "inventoryList")
}

    
function submit(submitButton) { //create a new function for the submit button
    submitButton.preventDefault(); //do not allow the page to reload. Since this data is not truly stored, it is removed when the page reloads
    const productName = document.getElementById("productForm").value; //create a constant equal to the value inputted in the element with id "productForm"
    const productClass = document.getElementById("classForm").value; //create a constant equal to the value inputted in the element with id "classForm"
    if (productName !== "") { //check to make sure the product name (value of tag with productForm id) is not an empty string
        newItem(productName, productClass); // if it isn't, use the newItem function to add the item with productName as the li and productClass as the setClass arguments
    }
};

const form = document.getElementById("form") //create a constant equal to the element with id "form"
form.addEventListener("submit", submit); //add an event listener to the form for the submit button. When submit button is pressed, execute submit function

const list = document.getElementById("inventoryList"); //create a constant equal to the tag with id "inventoryList"
list.addEventListener("click", removeItem); //add an event listener to the list that executes the removeItem function 

function removeItem(li) { //create a new function that takes li as a parameter
    if (li.target.tagName === "LI") { //if the targeted tag has the tagname "li"
        list.removeChild(li.target); //from the list, remove the instance that is the target of the function input
    }
}

newItem("apple");
newItem("orange"); //test data
