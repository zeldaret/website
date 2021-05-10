$(document).ready(function(){
	$('#slidebox1').animate({ height: 'hide' }, 0);
	$('#slidebox2').animate({ height: 'hide' }, 0);
	$('#slidebox3').animate({ height: 'hide' }, 0);

	$('#slidebox1').animate({ height: 'show' }, 500);

	$("#file1Header").click(function () {
		$('#slidebox3').animate({ height: 'hide' }, 500);
		$('#slidebox2').animate({ height: 'hide' }, 500);
		$('#slidebox1').animate({ height: 'toggle' }, 500);
	});

	$("#file2Header").click(function () {
		$('#slidebox3').animate({ height: 'hide' }, 500);
		$('#slidebox2').animate({ height: 'toggle' }, 500);
		$('#slidebox1').animate({ height: 'hide' }, 500);
	});

	$("#file3Header").click(function () {
		$('#slidebox3').animate({ height: 'toggle' }, 500);
		$('#slidebox2').animate({ height: 'hide' }, 500);
		$('#slidebox1').animate({ height: 'hide' }, 500);
	});
});

function formatPercent(num, decimals = 3) {
	let percent = num * 100;
	return percent.toFixed(decimals) +'%';
};

function ProgressChart(chartElementId, matchingToggleElementId, title, subtitle, nonMatchingUrl, matchingUrl, seriesConfiguration, csvMapping, postProcessFunction, tooltipFormatter) {
	this.matching = false;
	this.chartElementId = chartElementId;
	this.matchingToggleElementId = matchingToggleElementId;
	this.nonMatchingUrl = nonMatchingUrl;
	this.matchingUrl = matchingUrl;
	this.title = title;
	this.subtitle = subtitle;
	this.csvMapping = csvMapping;
	this.postProcessFunction = postProcessFunction;
	this.tooltipFormatter = tooltipFormatter;
	this.seriesConfiguration = seriesConfiguration;
	this.seriesCsvMapping = new Array();
	
	for (i = 0; i < seriesConfiguration.length; i++) {
		this.seriesCsvMapping.push(this.csvMapping);
	}
	
	this.toggleMatching = function() {
		this.matching = !this.matching;
		document.getElementById(this.matchingToggleElementId).innerHTML = 'Matching: <span style="color:' + (this.matching? "green" : "red") + '">' + (this.matching ? "Yes" : "No") + "</span>";
		this.update();
	};
									   
	this.getDecompAdjective = function() {
		return this.matching ? 'matched' : 'decompiled';
	};
	
	this.getDataUrl = function() {
		return this.matching ? this.matchingUrl : this.nonMatchingUrl;
	};
	
	this.update = function() {
		this.chart.update({
			data: {
				csvURL: this.getDataUrl(),
			},
		});
		this.chart.redraw();
	},
	
	this.chartOptions = {
		chart: {
			type: 'spline',
		},
		
		title: {
			text: this.title,
		},

		subtitle: {
			text: this.subtitle,
		},
		
		series: this.seriesConfiguration,

		tooltip: {
			formatter: this.tooltipFormatter,
			shared: true,
			crosshairs: true
		},

		xAxis: {
			title: {
				text: 'Date',
			},
			type: 'datetime',
		},

		yAxis: {
			title: {
				text: 'Completion (%)',
			},
			labels: {
				formatter: function() {
					return formatPercent(this.value);
				}
			},
		},

		legend: {
			enabled: this.seriesConfiguration.length > 1,
		},
		
		data: {
			csvURL: this.getDataUrl(),
			seriesMapping: this.seriesCsvMapping,
			complete: this.postProcessFunction,
			enablePolling: true,
			firstRowAsNames: false,
			dataRefreshRate: 60,
		},
	};
		
	this.chart = Highcharts.chart(this.chartElementId, this.chartOptions);
	this.chart.owner = this;
	
	let progressChart = this;
	document.getElementById(this.matchingToggleElementId).onclick = function () { progressChart.toggleMatching(); };
	
	// var element= document.getElementsByTagName('label');
	// for(var i=0; i<element.length; i++){
    // 	element[i].addEventListener('click', () => { progressChart.chart.reflow(); } );
	// }; 

// 	var boxes = document.querySelectorAll('input[type=checkbox]');

// for (var box of boxes) {
//   if (box.checked === true) { // checked?
//     progressChart.chart.reflow();
//   }
// }

// window.onload = progressChart.chart.reflow();
// document.addEventListener("DOMContentLoaded", () => { progressChart.chart.reflow(); });

// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });

// addEvent(window, 'load', function(){ progressChart.chart.reflow(); });
// // addEvent(window, 'load', function(){ some_methods_2() });

// function addEvent(element, eventName, fn) {
//     if (element.addEventListener)
//         element.addEventListener(eventName, fn, false);
//     else if (element.attachEvent)
//         element.attachEvent('on' + eventName, fn);
// }
 	
}
