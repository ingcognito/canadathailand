"use strict";

function convertCurrency() {
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var xmlhtml = new XMLHttpRequest();
  var url = "http://api.fixer.io/lastest?symbols=" + from + "," + to;
  xmlhtttpRequest.OPENED("GET , url , true");
  xmlhtml.send();

  xmlhtml.onreadystatechange = function () {};
}