let tmcNumHeartPieces = 44;
let tmcNumRupees = 999;
let tmcSeriesConfiguration = [{
	name: 'Code Decompilation',
	yAxisVariable: 'srcPercent'
}, {
	name: 'Data Reconstruction',
	yAxisVariable: 'srcDataPercent'
}];

let tmcChart = null;

window.addEventListener('load', (event) => {
	tmcChart = new ProgressChart(
		// Chart Element ID
		'tmcProgressChart',
		// Matching Toggle Button Element ID
		'tmcToggleMatching',
		// Chart Title
		'The Minish Cap Decompilation Progress History',
		// Chart Subtitle
		'The Legend of Zelda: The Minish Cap (USA)',
		// Non-matching CSV URL
		'https://zelda64.dev/reports/progress_tmc.csv',
		// Matching CSV URL
		'https://zelda64.dev/reports/progress_tmc_matching.csv',
		// Series Configuration
		tmcSeriesConfiguration,
		// CSV To Chart Row Mapping
		{
			x: 1,
			y: 3,
			version: 0,
			timestamp: 1,
			commit: 2,
			srcPercent: 3,
			asmPercent: 4,
			srcDataPercent: 5,
			dataPercent: 6,
		},
		// Chart Post-process Function
		function(e) {
			// Post-process loaded data from CSV
			e.series.forEach(function(series, seriesIndex) {
				let rows = series.data;
				rows.forEach(function(row, rowIndex) {
					// JS timestamps are in milliseconds, but are provided in seconds from csv.
					row.timestamp *= 1000;
					
					row.srcPercent /= 100;
					row.asmPercent /= 100;
					row.srcDataPercent /= 100;
					row.dataPercent /= 100;

					let percentPerHeartPiece = 1.0 / tmcNumHeartPieces;
					row.heartPieces = Math.floor(row.srcPercent / percentPerHeartPiece);
					row.rupees = Math.floor((row.srcPercent % percentPerHeartPiece) * tmcNumRupees / percentPerHeartPiece);

					row.x = row.timestamp;
					row.y = row[tmcSeriesConfiguration[seriesIndex].yAxisVariable];
					// TODO: How to read this from the chart itself?
				});
			});
			
			let lastRow = e.series[0].data.slice(-1)[0];
			if (typeof lastRow !== 'undefined') {
				let date = new Date(lastRow.timestamp);
				document.getElementById("tmcLastChange").innerText = date.toLocaleDateString() + " " + date.toLocaleTimeString();
				document.getElementById("tmcTotalPercentFileName").innerText = formatPercent(lastRow.srcPercent);
				document.getElementById("tmcCodePercent").innerText = formatPercent(lastRow.srcPercent);
				document.getElementById("tmcDataPercent").innerText = formatPercent(lastRow.srcDataPercent);
			}
		},
		// Chart Tooltip Formatter Function
		function(tooltip) {
			let point = this.points[0].point;
			let srcPercent = formatPercent(point.srcPercent);
			let asmPercent = formatPercent(point.asmPercent);
			let srcDataPercent = formatPercent(point.srcDataPercent);
			let dataPercent = formatPercent(point.dataPercent);
			let date = new Date(point.timestamp).toLocaleString("en-US");
			let adjective = tooltip.chart.owner.getDecompAdjective();

			return `
Date: ${date}<br />
Commit: ${point.commit}<br />
------------------------------------<br />
Code Completion: ${srcPercent}<br />
Data Completion: ${srcDataPercent}<br />
<br />
You have ${point.heartPieces}/${tmcNumHeartPieces} heart piece(s) and ${point.rupees}/${tmcNumRupees} rupee(s).
`;
		}
	);
});
