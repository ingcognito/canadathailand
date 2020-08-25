function convertCurrency()
{
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var xmlhtml = new XMLHttpRequest();
    var url ="http://api.fixer.io/lastest?symbols=" + from + "," + to;
    xmlhttpRequest.OPENED("GET , url , true");
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    }

}