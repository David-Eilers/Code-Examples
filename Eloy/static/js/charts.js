window.onload = function () {
	var data = [];

	function getDataPoints(){
		var xPos = 0;
		for(i = 0; i<30;i++){
			var dataPoint = Math.random()*100;
			data[i] = {x: xPos,y: dataPoint};
			xPos++;
		}
		return data;
	}

	function newDataPoint(){
		return Math.random()*100;
	}

	var barChart = new CanvasJS.Chart("barChart", {
		animationEnabled: false,
		theme: "light2",
		title:{
			text: "Temperature Atlantic"
		},
		axisX:{
			includeZero: false,
			title: "Station id"
		},
		axisY:{
			includeZero: true,
			maximum: 70,
			title: "Temperature (F)"
		},
		data: [{        
			type: "bar",       
			dataPoints: data
		}]
	});
	
	var xArr = [12345, 55866, 77524, 13674, 25874, 13697, 11478, 46216, 78659, 16479];
	var i = 0;
	var xVal = xArr[0];
	var yVal = 0; 
	var updateInterval = 1000;
	var dataLength = 10; // number of dataPoints visible at any point
	
	

	var updateBarChart = function (count) {

		count = count || 1;

		for (var j = 0; j < count; j++) {
			//yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
			yVal = (Math.random()*10)+50;
			data[i]={
				label: xVal,
				y: yVal
			};
			if(i<dataLength){
				xVal = xArr[i];
				i++;
			} else{
				i = 0;
				xVal=xArr[i];
			}
		}

		
		barChart.render();
	};

	updateBarChart(dataLength);
	setInterval(function(){updateBarChart()}, updateInterval);
	
	var lineChart = new CanvasJS.Chart("lineChart", {
		theme: "light2",
		title: {
			text: "Rainfall Europe"
		},
		axisX: {
			valueFormatString: "MMM YYYY",
			title: "Time"
		},
		axisY2: {
			title: "Rainfall (mm)"
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
			verticalAlign: "top",
			horizontalAlign: "center",
			dockInsidePlotArea: true,
			itemclick: toogleDataSeries
		},
		data: [{
			type:"line",
			axisYType: "secondary",
			name: "Station: 45968",
			showInLegend: true,
			markerSize: 0,
			yValueFormatString: "###mm",
			dataPoints: [		
				{ x: new Date(2014, 00, 01), y: 5 },
				{ x: new Date(2014, 01, 01), y: 6 },
				{ x: new Date(2014, 02, 01), y: 2 },
				{ x: new Date(2014, 03, 01), y: 8 },
				{ x: new Date(2014, 04, 01), y: 6 },
				{ x: new Date(2014, 05, 01), y: 4 },
				{ x: new Date(2014, 06, 01), y: 6 },
				{ x: new Date(2014, 07, 01), y: 5 },
				{ x: new Date(2014, 08, 01), y: 8 },
				{ x: new Date(2014, 09, 01), y: 10 },
				{ x: new Date(2014, 10, 01), y: 4 },
				{ x: new Date(2014, 11, 01), y: 5 },
				{ x: new Date(2015, 00, 01), y: 5 },
				{ x: new Date(2015, 01, 01), y: 5 },
				{ x: new Date(2015, 02, 01), y: 4 },
				{ x: new Date(2015, 03, 01), y: 0 },
				{ x: new Date(2015, 04, 01), y: 0 },
				{ x: new Date(2015, 05, 01), y: 0 },
				{ x: new Date(2015, 06, 01), y: 0 },
				{ x: new Date(2015, 07, 01), y: 0 },
				{ x: new Date(2015, 08, 01), y: 0 },
				{ x: new Date(2015, 09, 01), y: 0 },
				{ x: new Date(2015, 10, 01), y: 0 },
				{ x: new Date(2015, 11, 01), y: 0 },
				{ x: new Date(2016, 00, 01), y: 0 },
				{ x: new Date(2016, 01, 01), y: 7 },
				{ x: new Date(2016, 02, 01), y: 5 },
				{ x: new Date(2016, 03, 01), y: 5 },
				{ x: new Date(2016, 04, 01), y: 4 },
				{ x: new Date(2016, 05, 01), y: 5 },
				{ x: new Date(2016, 06, 01), y: 4 },
				{ x: new Date(2016, 07, 01), y: 6 },
				{ x: new Date(2016, 08, 01), y: 8 },
				{ x: new Date(2016, 09, 01), y: 4 },
				{ x: new Date(2016, 10, 01), y: 2 },
				{ x: new Date(2016, 11, 01), y: 4 },
				{ x: new Date(2017, 00, 01), y: 7 },
				{ x: new Date(2017, 01, 01), y: 7 },
				{ x: new Date(2017, 02, 01), y: 7 },
				{ x: new Date(2017, 03, 01), y: 8 },
				{ x: new Date(2017, 04, 01), y: 5 },
				{ x: new Date(2017, 05, 01), y: 6 }
			]
		},
		{
			type: "line",
			axisYType: "secondary",
			name: "Station: 58934",
			showInLegend: true,
			markerSize: 0,
			yValueFormatString: "###mm",
			dataPoints: [
				{ x: new Date(2014, 00, 01), y: 12 },
				{ x: new Date(2014, 01, 01), y: 12 },
				{ x: new Date(2014, 02, 01), y: 11 },
				{ x: new Date(2014, 03, 01), y: 11 },
				{ x: new Date(2014, 04, 01), y: 12 },
				{ x: new Date(2014, 05, 01), y: 12 },
				{ x: new Date(2014, 06, 01), y: 13 },
				{ x: new Date(2014, 07, 01), y: 13 },
				{ x: new Date(2014, 08, 01), y: 13 },
				{ x: new Date(2014, 09, 01), y: 14 },
				{ x: new Date(2014, 10, 01), y: 14 },
				{ x: new Date(2014, 11, 01), y: 15 },
				{ x: new Date(2015, 00, 01), y: 15 },
				{ x: new Date(2015, 01, 01), y: 10 },
				{ x: new Date(2015, 02, 01), y: 15 },
				{ x: new Date(2015, 03, 01), y: 15 },
				{ x: new Date(2015, 04, 01), y: 16 },
				{ x: new Date(2015, 05, 01), y: 15 },
				{ x: new Date(2015, 06, 01), y: 15 },
				{ x: new Date(2015, 07, 01), y: 16 },
				{ x: new Date(2015, 08, 01), y: 16 },
				{ x: new Date(2015, 09, 01), y: 17 },
				{ x: new Date(2015, 10, 01), y: 17 },
				{ x: new Date(2015, 11, 01), y: 18 },
				{ x: new Date(2016, 00, 01), y: 20 },
				{ x: new Date(2016, 01, 01), y: 19 },
				{ x: new Date(2016, 02, 01), y: 17 },
				{ x: new Date(2016, 03, 01), y: 18 },
				{ x: new Date(2016, 04, 01), y: 17 },
				{ x: new Date(2016, 05, 01), y: 17 },
				{ x: new Date(2016, 06, 01), y: 17 },
				{ x: new Date(2016, 07, 01), y: 17 },
				{ x: new Date(2016, 08, 01), y: 17 },
				{ x: new Date(2016, 09, 01), y: 17 },
				{ x: new Date(2016, 10, 01), y: 17 },
				{ x: new Date(2016, 11, 01), y: 17 },
				{ x: new Date(2017, 00, 01), y: 17 },
				{ x: new Date(2017, 01, 01), y: 17 },
				{ x: new Date(2017, 02, 01), y: 17 },
				{ x: new Date(2017, 03, 01), y: 17 },
				{ x: new Date(2017, 04, 01), y: 17 },
				{ x: new Date(2017, 05, 01), y: 17 }
			]
		},
		{
			type: "line",
			axisYType: "secondary",
			name: "Station: 83045",
			showInLegend: true,
			markerSize: 0,
			yValueFormatString: "###mm",
			dataPoints: [
				{ x: new Date(2014, 00, 01), y: 40 },
				{ x: new Date(2014, 01, 01), y: 41 },
				{ x: new Date(2014, 02, 01), y: 41 },
				{ x: new Date(2014, 03, 01), y: 42 },
				{ x: new Date(2014, 04, 01), y: 42 },
				{ x: new Date(2014, 05, 01), y: 45 },
				{ x: new Date(2014, 06, 01), y: 45 },
				{ x: new Date(2014, 07, 01), y: 44 },
				{ x: new Date(2014, 08, 01), y: 45 },
				{ x: new Date(2014, 09, 01), y: 45 },
				{ x: new Date(2014, 10, 01), y: 44 },
				{ x: new Date(2014, 11, 01), y: 42 },
				{ x: new Date(2015, 00, 01), y: 43 },
				{ x: new Date(2015, 01, 01), y: 45 },
				{ x: new Date(2015, 02, 01), y: 47 },
				{ x: new Date(2015, 03, 01), y: 47 },
				{ x: new Date(2015, 04, 01), y: 47 },
				{ x: new Date(2015, 05, 01), y: 48 },
				{ x: new Date(2015, 06, 01), y: 45 },
				{ x: new Date(2015, 07, 01), y: 49 },
				{ x: new Date(2015, 08, 01), y: 50 },
				{ x: new Date(2015, 09, 01), y: 50 },
				{ x: new Date(2015, 10, 01), y: 52 },
				{ x: new Date(2015, 11, 01), y: 52 },
				{ x: new Date(2016, 00, 01), y: 52 },
				{ x: new Date(2016, 01, 01), y: 52 },
				{ x: new Date(2016, 02, 01), y: 54 },
				{ x: new Date(2016, 03, 01), y: 55 },
				{ x: new Date(2016, 04, 01), y: 56 },
				{ x: new Date(2016, 05, 01), y: 57 },
				{ x: new Date(2016, 06, 01), y: 57 },
				{ x: new Date(2016, 07, 01), y: 57 },
				{ x: new Date(2016, 08, 01), y: 58 },
				{ x: new Date(2016, 09, 01), y: 58 },
				{ x: new Date(2016, 10, 01), y: 59 },
				{ x: new Date(2016, 11, 01), y: 59 },
				{ x: new Date(2017, 00, 01), y: 59 },
				{ x: new Date(2017, 01, 01), y: 60 },
				{ x: new Date(2017, 02, 01), y: 62 },
				{ x: new Date(2017, 03, 01), y: 63 },
				{ x: new Date(2017, 04, 01), y: 65 },
				{ x: new Date(2017, 05, 01), y: 67 }
			]
		}]
	});
	lineChart.render();

	function toogleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		} else{
			e.dataSeries.visible = true;
		}
		lineChart.render();
	}
}