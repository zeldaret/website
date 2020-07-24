let chartElementId = 'progressChart';
let decimalPlaces = 3;
								   
function getDecompAdjective(progress, total) {
	// Matching is a variable defined by progress.js
    return matching ? 'matched' : 'decompiled';
}

function getDataUrl() {
	// Matching is a variable defined by progress.js
	/*return matching ? 'https://zelda64.dev/reports/progress_matching.csv' :
					  'https://zelda64.dev/reports/progress.csv';*/
					  
	console.log("getDataUrl, matching: " + matching);
					  
	return matching ? 'http://localhost/reports/progress_matching.csv' :
					  'http://localhost/reports/progress.csv';
}

function formatPercent(num, decimals = 3) {
    let percent = num * 100;
    return percent.toFixed(decimals) +'%';
}

function updateChart() {
	chart.update({
		data: {
			csvURL: getDataUrl(),
		},
	});
	chart.redraw();
}

let chart = Highcharts.chart(chartElementId, {
	chart: {
		type: 'spline'
	},
	
	title: {
		text: 'OoT Progress History'
	},

	subtitle: {
		text: 'OoT Master Quest Debug GCN PAL'
	},

	data: {
		csvURL: getDataUrl(),
		enablePolling: true,
		firstRowAsNames: false,
		dataRefreshRate: 60,
		seriesMapping: [{
			x: 1,
			y: 9,
			version: 0,
			timestamp: 1,
			commit: 2,
			code: 3,
			codeSize: 4,
			boot: 5,
			bootSize: 6,
			ovl: 7,
			ovlSize: 8,
			src: 9,
			asm: 10,
			nonMatchingCount: 11,
		}],
		complete: function(e) {
			// Post-process loaded data from CSV
			let allSeries = e.series;
			allSeries.forEach(function(series, seriesIndex) {
				let rows = series.data;
				rows.forEach(function(row, rowIndex) {
					// JS timestamps are in milliseconds, but are provided in seconds from csv.
					row.timestamp *= 1000
					row.total = row.asm + row.src;
					row.totalPercent = row.src / (row.total);
					row.asmPercent = row.asm / (row.total);
					row.codePercent = row.code / row.codeSize;
					row.bootPercent = row.boot / row.bootSize;
					row.ovlPercent = row.ovl / row.ovlSize;

					let bytesPerHeartPiece = (row.total) / 80;
					row.heartPieces = Math.floor(row.src / bytesPerHeartPiece);
					row.rupees = Math.floor((row.src % bytesPerHeartPiece) * 100 / bytesPerHeartPiece);

					row.x = row.timestamp;
					row.y = row.totalPercent;
					console.log(row);
				});
			});
		}
	},

	tooltip: {
		formatter() {
			let point = this.point;
			let totalPercent = formatPercent(point.totalPercent);
			let asmPercent = formatPercent(point.asmPercent);
			let codePercent = formatPercent(point.codePercent);
			let bootPercent = formatPercent(point.bootPercent);
			let ovlPercent = formatPercent(point.ovlPercent);
			let date = new Date(point.timestamp).toLocaleString("en-US");
			let adjective = getDecompAdjective();

			return `Total Completion: ${totalPercent}<br />
					Date: ${date}<br />
					Commit: ${point.commit}<br />
					------------------------------------<br />
					${point.src}/${point.total} total bytes of decompilable code ${totalPercent}<br />
					${point.boot}/${point.bootSize} bytes ${adjective} in boot ${bootPercent}<br />
					${point.code}/${point.codeSize} bytes ${adjective} in code ${codePercent}<br />
					${point.ovl}/${point.ovlSize} bytes ${adjective} in overlays ${ovlPercent}<br />
					------------------------------------<br />
					You have ${point.heartPieces}/80 heart piece(s) and ${point.rupees} rupee(s).`;
		}
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
});