 /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
 var dropdown = document.getElementsByClassName("dropdwn-btn");
 var i;
 
 for (i = 0; i < dropdown.length; i++) {
   dropdown[i].addEventListener("click", function() {
     this.classList.toggle("active");
     var dropdownContent = this.nextElementSibling;
     if (dropdownContent.style.display === "block") {
       dropdownContent.style.display = "none";
     } else {
       dropdownContent.style.display = "block";
     }
   });
 }

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

     var data = new google.visualization.DataTable();
     data.addColumn('number', 'Year');
     data.addColumn('number', 'GDP');

     data.addRows([
      [2016,20],[1999,16],[2020,89],[2008,98],[2001,60],[2015,28]
     ]);
     data.sort(({column: 0, desc:false}));

     var options = {
       hAxis: {
         title: 'Year'
       },
       vAxis: {
         title: 'GDP'
       }
     };

     var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

     chart.draw(data, options);
   }

const range = document.querySelectorAll(".range-slider span input");
progress = document.querySelector(".range-slider .progress");
let gap = 0.1;
const inputValue = document.querySelectorAll(".numberVal input");

range.forEach((input) => {
 input.addEventListener("input", (e) => {
   let minRange = parseInt(range[0].value);
   let maxRange = parseInt(range[1].value);

   if (maxRange - minRange < gap) {
     if (e.target.className === "range-min") {
       range[0].value = maxRange - gap;
     } else {
       range[1].value = minRange + gap;
     }
   } else {
     progress.style.left = (minRange / range[0].max) * 100 + "%";
     progress.style.right = 100 - (maxRange / range[1].max) * 100 + "%";
     inputValue[0].value = minRange;
     inputValue[1].value = maxRange;
   }
 });
});