// while LOOP
var even = 2;
while (even <= 60 ){
	document.getElementById('even').innerHTML = document.getElementById('even').innerHTML + " " + even;
	even = even +2;
}

//do-while LOOP

var three = 3;
do {
	document.getElementById('three').innerHTML = document.getElementById('three').innerHTML + " " + three;
	three = three + 3;
} while (three <= 60)

// for LOOP
  for (var five = 5; five <= 50; five = five + 5){
  	document.getElementById('five').innerHTML = document.getElementById('five').innerHTML + " " + five;
  }