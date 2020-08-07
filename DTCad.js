<script>
    
function calcTime(city, offset) {
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000*offset));
    return "The local time in " + city + " is " + nd.toLocaleString();
    document.getElementById("new Date").innerHTML = "(calcTime('Canada', '-4'))";
}

// get Canada
alert(calcTime('Canada', '-4'));

</script>