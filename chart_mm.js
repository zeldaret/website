let mmNumMasks = 24
let mmNumRupees = 500

window.addEventListener('load', (event) => {
	mmChart = new ProgressChart(
		// Chart Element ID
		'mmProgressChart',
		// Matching Toggle Button Element ID
		'mmToggleMatching',
		// Chart Title
		'Majora\'s Mask Decompilation Progress History',
		// Chart Subtitle
		'MM USA',
		// Non-matching CSV URL
		'https://zelda64.dev/reports/progress_mm.us.rev1.csv',
		// Matching CSV URL
		'https://zelda64.dev/reports/progress_matching_mm.us.rev1.csv',
		// CSV To Chart Row Mapping
		[{
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
			audio: 12,
			audioSize: 13,
			misc: 14,
			miscSize: 15,
			object: 16,
			objectSize: 17,
			scene: 18,
			sceneSize: 19,
			texture: 20,
			textureSize: 21
		}],
		// Chart Post-process Function
		function(e) {
			// Post-process loaded data from CSV
			let allSeries = e.series;
			allSeries.forEach(function(series, seriesIndex) {
				let rows = series.data;
				rows.forEach(function(row, rowIndex) {
					// JS timestamps are in milliseconds, but are provided in seconds from csv.
					row.timestamp *= 1000
					
					// Decompilable bytes
					row.total = row.asm + row.src;
					row.totalPercent = row.src / row.total;
					row.asmPercent = row.asm / row.total;
					row.codePercent = row.code / row.codeSize;
					row.bootPercent = row.boot / row.bootSize;
					row.ovlPercent = row.ovl / row.ovlSize;
					
					// Non-decompilable bytes
					row.audioPercent = row.audio / row.audioSize;
					row.miscPercent = row.misc / row.miscSize;
					row.objectPercent = row.object / row.objectSize;
					row.scenePercent = row.scene / row.sceneSize;
					row.texturePercent = row.texture / row.textureSize;

					let bytesPerMask = row.total / mmNumMasks;
					row.masks = Math.floor(row.src / bytesPerMask);
					row.rupees = Math.floor((row.src % bytesPerMask) * mmNumRupees / bytesPerMask);

					row.x = row.timestamp;
					row.y = row.totalPercent;
					//console.log(row);
						
					// Update the page progress UI
					var date = new Date(row.timestamp);
					document.getElementById("mmLastChange").innerText = date.toLocaleDateString() + " " + date.toLocaleTimeString();
					document.getElementById("mmTotalPercent").innerText = formatPercent(row.totalPercent);
					document.getElementById("mmBootPercent").innerText = formatPercent(row.bootPercent);
					document.getElementById("mmCodePercent").innerText = formatPercent(row.codePercent);
					document.getElementById("mmOverlayPercent").innerText = formatPercent(row.ovlPercent);
				});
			});
		},
		// Chart Tooltip Formatter Function
		function(tooltip) {
			let point = this.point;
			let totalPercent = formatPercent(point.totalPercent);
			let asmPercent = formatPercent(point.asmPercent);
			let codePercent = formatPercent(point.codePercent);
			let bootPercent = formatPercent(point.bootPercent);
			let ovlPercent = formatPercent(point.ovlPercent);
			let audioPercent = formatPercent(point.audioPercent);
			let miscPercent = formatPercent(point.miscPercent);
			let objectPercent = formatPercent(point.objectPercent);
			let scenePercent = formatPercent(point.scenePercent);
			let texturePercent = formatPercent(point.texturePercent);
			let date = new Date(point.timestamp).toLocaleString("en-US");
			let adjective = tooltip.chart.owner.getDecompAdjective();
			
			return `Total Completion: ${totalPercent}<br />
					Date: ${date}<br />
					Commit: ${point.commit}<br />
					------------------------------------<br />
					${point.src}/${point.total} total bytes of decompilable code ${totalPercent}<br />
					${point.boot}/${point.bootSize} bytes ${adjective} in boot ${bootPercent}<br />
					${point.code}/${point.codeSize} bytes ${adjective} in code ${codePercent}<br />
					${point.ovl}/${point.ovlSize} bytes ${adjective} in overlays ${ovlPercent}<br />
					${point.audio}/${point.audioSize} bytes reconstructed in audio ${audioPercent}<br />
					${point.misc}/${point.miscSize} bytes reconstructed in misc ${miscPercent}<br />
					${point.object}/${point.objectSize} bytes reconstructed in object ${objectPercent}<br />
					${point.scene}/${point.sceneSize} bytes reconstructed in scene ${scenePercent}<br />
					${point.texture}/${point.textureSize} bytes reconstructed in texture ${texturePercent}<br />
					------------------------------------<br />
					You have ${point.masks}/${mmNumMasks} mask(s) and ${point.rupees}/${mmNumRupees} rupee(s).`;
		}
	);
});