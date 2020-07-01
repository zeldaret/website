var matching = false;
var url = "reports/progress.csv";
var urlMatching = "reports/progress_matching.csv";
var currentVersion = 1;
var decimalPlaces = 4;

function toggleMatching()
{
    matching = !matching;
    var html = '<span style="color:' + (matching? "green" : "red") + '">' + (matching? "Yes" : "No") + "</span>";
    document.getElementById("toggle_matching").innerHTML = "Match: " + html;
    updateProgress();
}

function getResponse(file, callback) {
    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open("GET", file, true);
    req.onreadystatechange = function() {
        if (req.readyState === 4 && req.status == "200") {
            callback(req.responseText);
        }
    }
    req.send(null);
}

function setText(classname, value)
{
    var elem = document.getElementById(classname);
    console.log(value);
    elem.innerText = value;
}

function parseCsv(csv)
{
    var csvObj = {
        version: 1,
        timestamp: 0,
        commit: 0,
        code: 0,
        codeSize: 0,
        boot: 0,
        bootSize: 0,
        ovl: 0,
        ovlSize: 0,
        src: 0,
        asm: 0,
        nonMatchingCount: 0,
    };
    
    var lines = csv.split("\r\n");
    var objs = [[]]
    for (var i = 0; i < lines.length; i++)
    {
        var values = lines[i].split(",");

        if (values[0] != currentVersion)
        {
            alert("Invalid CSV");
            return null;
        }
        
        objs[i] = new Object();
        for (var j = 0; j < values.length; j++){
            objs[i][Object.keys(csvObj)[j]] = values[j];
        }

    }

    return objs;
}

function getPercent(progress, total)
{
    return ((progress / total) * 100).toFixed(decimalPlaces) + "%";
}

function updateProgress()
{
    getResponse(matching? urlMatching : url, function(text) {
        var progress = parseCsv(text)[0];

        var date = new Date(progress.timestamp *1000);
        setText("last_change", date.toLocaleDateString() + " " + date.toLocaleTimeString());

        setText("total_percent", getPercent(progress.src, progress.asm - - progress.src));
        setText("boot_percent", getPercent(progress.boot, progress.bootSize));
        setText("code_percent", getPercent(progress.code, progress.codeSize));
        setText("overlay_percent", getPercent(progress.ovl, progress.ovlSize));

        var keys = Object.keys(progress.reports[timestamp]);
        keys.forEach(e => {
            setText(e, progress.reports[timestamp][e] + "%");
        });
    });
}

window.onload = function() {
    updateProgress();
};
