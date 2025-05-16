/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */ let localGrafico = "";
    let dados = [['oi',"ola"],
                   ["texto",12]];

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      
      
      function configGrafico(local, matriz){
          localGrafico = local;
          dados = matriz;
          
          drawChart();         
      }

      function drawChart() {

        var data = google.visualization.arrayToDataTable(dados);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(localGrafico);

        chart.draw(data, options);
      }
      
    
