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

// Select the form - gives it the option to creat a button below
var form = d3.select("#form");

// // Create event handlers 
button.on("click", aliens);
form.on("submit", aliens);

// function to filter table
function aliens() {

    // keep the page from refreshing when hitting the filter button 
    d3.event.preventDefault();

    //select input from html file 
    var inputElement1 = d3.select("#datetime");
    var inputElement2 = d3.select("#city");
    // var inputElement3 = d3.select("#state");
    // var inputElement4 = d3.select("#country");
    // var inputElement5 = d3.select("#shape");

    //retrieve value from input box on webpage  
    var inputValue1 = inputElement1.property("value");
    var inputValue2 = inputElement2.property("value");
    // var inputValue3 = inputElement3.property("value");
    // var inputValue4 = inputElement4.property("value");
    // var inputValue5 = inputElement5.property("value");

    //taking data from input box and input date and filtering the table 
    var filteredData1 = tableData.filter(data => data.datetime === inputValue1);
    var filteredData2 = tableData.filter(data => data.city === inputValue2);
    // var filteredData3 = tableData.filter(data => data.state === inputValue3);
    // var filteredData4 = tableData.filter(data => data.country === inputValue4);
    // var filteredData5 = tableData.filter(data => data.shape === inputValue5);

    //keeps the non filtered data from showing up on the page
    tbody.html("");

    //restart the filter
    filteredData1.forEach(function(aliens)  {
        var row = tbody.append("tr");
        Object.entries(aliens).forEach(function([key, value]) {
          var cell = row.append("td");
          cell.text(value);
        });
    });
    filteredData2.forEach(function(aliens)  {
      var row = tbody.append("tr");
      Object.entries(aliens).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
        });
    });
    console.log();
};















