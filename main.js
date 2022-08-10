
const car = {type : "Fiat", model : "500", color : "White"};

const datetimeformat = 'YYY-MM-DD HH:mm:ss.sssZ';

arr = new Array(1,2,3,4,5);
var direct = false;

var s1 = "";
var s2 = "";
var s3 = "";

var start = true;
var timeout_id;


function start_show_time() {
    timeout_id = setInterval("type_day_time()" , 1000);
};

function type_day_time() {
        input_date = new Date();
        document.getElementById("hh1").innerHTML = "Today = " + input_date.toLocaleDateString();   
        document.getElementById("hh2").innerHTML = "Time now = " + input_date.toLocaleTimeString();
};

function stop() {
clearTimeout(timeout_id);
};