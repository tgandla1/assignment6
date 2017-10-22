var otime = 1.5;
var check = true;
var loop = true;
var hours = 0.0;
var num = 1;
var tring = "";
var Harray = [];
var pay = 15;
var high = 40;

function Workhours(){
	while (loop){
		hours=prompt("Please enter no.of hours worked in a week for employee " + num + " (Enter a negative number to stop feeding the data)");
		
		if (hours < 0){
			if(check == true){
				window.alert("You should enter information about atleast one person.");
			}
			else{
				loop = false;
			}
		}
		else if (!(hours >= 0) || (hours == "")){
			window.alert("That is not the correct information.Please enter the correct information.");
		}
		else{
			Harray.push(hours);
			check = false;
			num++;
		}
	}
	Ostring();
	document.getElementById("wages").innerHTML = tring;
}

function Ostring(){
	tring = "<table border=1><th>Emp_Id</th><th>No. of hours Worked</th><th>Payment</th>";
	var eIncome = 0;
	var total = 0;
	var wHours = 0;
	var arrayLength = Harray.length;
	for (var i = 0; i < arrayLength; i++) {
		if (Harray[i] > high){
			var excess = Harray[i] - high;
			excess *= otime;
			wHours= 40 + excess;
		}
		else {
			wHours = Harray[i];
		}
		eIncome = wHours * pay;
		tring += "<tr><td>"+ (i+1) + "</td>" +
		"<td>" + Harray[i] + "</td>" + 
		"<td>" + eIncome + "</td>";
		total += eIncome;
	}
	tring += "</table>";
	tring += "<br><br> <b>Grand total Pay of all employees accumulated: $" + total + "</b>";
	
}