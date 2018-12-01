// from data.js
var UFOData = data;

// Create a table row and for each of the objects, filter and accept 
var oneRow = {
  datetime: "1/9/2010",
  city: "woodbridge",
  state: "nj",
  country: "us",
  shape: "light",
  durationMinutes: "9 mins.",
  comments: "Saw two lights that were not planes."
}


function buildUFOTable() {
  d3.event.preventDefault()
  var ufobody = d3.select("tbody")
  ufobody.html('')



  UFOdate = d3.select("#datetime").property("value")
  dataFilter = UFOData.filter(dataPoint => dataPoint.datetime == UFOdate)
  dataFilter.forEach(function (oneRow) {
    var UFOrow = ufobody.append('tr')
    UFOrow.html(
      `<td>${oneRow['datetime']}<td>
    <td>${oneRow['city']}</td>
    <td>${oneRow['state']}</td>
    <td>${oneRow['country']}</td>
    <td>${oneRow['shape']}</td>
    <td>${oneRow['durationMinutes']}</td>
    <td>${oneRow['comments']}</td>`)
  })
}

//event listener
d3.select("#filter-btn").on("click", buildUFOTable)




