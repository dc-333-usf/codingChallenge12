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

