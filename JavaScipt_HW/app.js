// from data.js
var tableData = data;

// Create a table row and for each of the objects, filter and accept 
var oneRow = {
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  }

var tbody =  d3.select("tbody")
var trow = tbody.append('tr')


// option 1:

var td = trow.append('td')
td.html(`${oneRow['datetime']}`)

for tblData.forEach(function(oneRow){
    trow.html(`<td>${oneRow['datetime']}<td>
    <td>${oneRow['city']}</td>
    <td>${oneRow['state']}</td>
    <td>${oneRow['country']}</td>
    <td>${oneRow['shape']}</td>
    <td>${oneRow['durationMinutes']}</td>
    <td>${oneRow['comments']}</td>
})

