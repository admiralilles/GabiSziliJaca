//json data 
function getJson(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url);

    xhr.onload = function (ev) {
        var footballData = JSON.parse(ev.target.response);
        callback(footballData);
    };
    xhr.send();
}

getJson(
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/it.1.json",
    function (data) {
        tableData = data.matches;
        fillTable(tableData);
    }
);

//táblázat kitöltés
function fillTable(rows) {
    var table = document.querySelector("table");
    var content = "";
    for (var i = 0; i < rows.length; i++) {
        var tr = "<tr>";
        tr += "<td>" + (i + 1) + "</td>";
        tr += "<td>" + rows[i].date + "</td>";
        tr += "<td>" + rows[i].matches + "</td>";
        tr += "<td>" + rows[i].team2 + "</td>";
        tr += "<td>" + rows[i].score1 + "</td>";
        tr += "<td>" + rows[i].score2 + "</td>";
        tr += "</tr>";
        content += tr;
    }

    table.querySelector("tbody").innerHTML = content;
}

var tableData = [];



//document.querySelector("#sort-key").addEventListener("click", nameKeySort);
//document.querySelector("#sort-name").addEventListener("click", nameKeySort);
//document.querySelector("#sort-code").addEventListener("click", codeSort);