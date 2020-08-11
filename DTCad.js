<script>  
function calcTime(city, offset) {
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000*offset));
    document.getElementById("showDateCanada").innerHTML = "The local time in " + city + " is " + nd.toLocaleString();
}
</script> 
<body>
<button type="button" onclick="calcTime('Canada','-4')">Show Date</button>
<p id="showDateCanada"></p>
