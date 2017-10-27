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
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/it.1.clubs.json",
    function (data) {
        tableData = data.clubs;
        fillTable(tableData);
    }
);

function fillTable(rows) {
    var table = document.querySelector("table");
    var content = "";
    for (var i = 0; i < rows.length; i++) {
        var tr = "<tr>";
        tr += "<td>" + (i + 1) + "</td>";
        tr += "<td>" + rows[i].key + "</td>";
        tr += "<td>" + rows[i].name + "</td>";
        tr += "<td>" + rows[i].code + "</td>";
        tr += '<td><a class="btn btn-primary" href="match.html?code=' + rows[i].code + '">match</a></td>';
        tr += "</tr>";
        content += tr;
    }

    table.querySelector("tbody").innerHTML = content;
}