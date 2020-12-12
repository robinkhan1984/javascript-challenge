// from data.js
var tableData = data;

// define tbody - get the tablet in the webpage
var tbody = d3.select("tbody");

// loop in the values in the data file 
data.forEach(function(aliens)  {
    var row = tbody.append("tr");
    Object.entries(aliens).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
});


// set up filter button 
var button = d3.select("#filter-btn")

// Select the form - gives it the option to creat a button below that works
var form = d3.select("#form");

// Create event handlers 
button.on("click", aliens);
form.on("submit", aliens);

// function to filter table
function aliens() {

    // keep the page from refreshing when hitting the filter button 
    // d3.event.preventDefault();

    //select input from html file 
    var inputElement = d3.select("#datetime")

    //retrieve value from input box on webpage  
    var inputValue = inputElement.property("value")

    //taking data from input box and input date and filtering the table 
    var filteredData = tableData.filter(data => data.datetime === inputValue);

    //keeps the non filtered data from showing up on the page
    tbody.html("");

    //restart the filter
    filteredData.forEach(function(aliens)  {
        var row = tbody.append("tr");
        Object.entries(aliens).forEach(function([key, value]) {
          var cell = row.append("td");
          cell.text(value);
        });
    });

};















