$(document).ready(function(){
	$('#slidebox2').animate({ height: 'toggle' }, 0);

	$("#file1Header").click(function () {
		$('#slidebox2').animate({ height: 'toggle' }, 500);
		$('#slidebox1').animate({ height: 'toggle' }, 500);
	});
	
	$("#file2Header").click(function () {
		$('#slidebox2').animate({ height: 'toggle' }, 500);
		$('#slidebox1').animate({ height: 'toggle' }, 500);
	});
});

function formatPercent(num, decimals = 3) {
	let percent = num * 100;
	return percent.toFixed(decimals) +'%';
};

function ProgressChart(chartElementId, matchingToggleElementId, title, subtitle, nonMatchingUrl, matchingUrl, csvMapping, postProcessFunction, tooltipFormatter) {
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
	
	this.toggleMatching = function() {
		this.matching = !this.matching;
		document.getElementById(this.matchingToggleElementId).innerHTML = "Matching: " + '<span style="color:' + (this.matching? "green" : "red") + '">' + (this.matching ? "Yes" : "No") + "</span>";
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

		tooltip: {
			formatter: this.tooltipFormatter,
		},

		xAxis: {
			title: {
				text: 'Date',
			},
			type: 'datetime',
		},

		yAxis: {
			title: {
				text: 'Total Completion (%)',
			},
			labels: {
				formatter: function() {
					return formatPercent(this.value);
				}
			},
		},

		legend: {
			enabled: false,
		},
		
		data: {
			csvURL: this.getDataUrl(),
			enablePolling: true,
			firstRowAsNames: false,
			dataRefreshRate: 60,
			seriesMapping: this.csvMapping,
			complete: this.postProcessFunction,
		},
	};
		
	this.chart = Highcharts.chart(this.chartElementId, this.chartOptions);
	this.chart.owner = this;
	
	let progressChart = this;
	document.getElementById(this.matchingToggleElementId).onclick = function () { progressChart.toggleMatching(); };
}
