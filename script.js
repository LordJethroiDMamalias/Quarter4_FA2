function mTable() {
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    
    if(isNaN(n1) || isNaN(n2) || !(2 <= n1 && 2 <= n2 && n1 <= 10 && n2 <= 10)) {
        alert("Please enter numbers between 2 and 10");
        return;
    }
    
    var table = "<table>";
    for (i = 1; i <= n1; i++) {
        table += "<tr>";
        for (c = 1; c <= n2; c++) {
            table += "<td>";
            table += (i*c);
            table += "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("mTable").innerHTML = table;
}


