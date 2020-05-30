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
    var elem = document.getElementsByClassName(classname);
    if (elem.length == 1)
    {
        console.log(value);
        elem[0].innerText = value;
    }
}

window.onload = function() {

    getJSON(url, function(text) {
        var progress = JSON.parse(text);
        var timestamp = Object.keys(progress.reports)[0];
        var date = new Date(timestamp.split(".")[0] *1000);
        setText("last_change", date);

        var keys = Object.keys(progress.reports[timestamp]);
        keys.forEach(e => {
            setText(e, progress.reports[timestamp][e] + "%");
        });
    });
};
