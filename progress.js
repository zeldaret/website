var url = "reports/progress.json";

function getJSON(file, callback) {
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

window.onload = function() {

    //var text = '{"reports": {"1590587451.6147666": {"total_percent": 19.058612988321162, "boot_percent": 100.0, "code_percent": 50.909445807705794, "overlay_percent": 6.997155049786628}}}';
    getJSON(url, function(text) {
        var progress = JSON.parse(text);
        var timestamp = Object.keys(progress.reports)[0];
        var date = new Date(timestamp.split(".")[0] *1000);
        setText("last_change", date.toLocaleDateString() + " " + date.toLocaleTimeString());

        var keys = Object.keys(progress.reports[timestamp]);
        keys.forEach(e => {
            setText(e, progress.reports[timestamp][e] + "%");
        });
    });
};
