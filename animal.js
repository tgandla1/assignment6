var index;
var check = true;
var output = document.getElementById("div4");
var result = "You Rock! Do you wanna play it again?";
var pictureArray =[];
var solved = [];
var limit;
var place;
var img = [];
var checkClick = false;
var index1;
 
function timeleft(){
	var picnum = document.getElementById("imagenum").value;
	var lefts = document.getElementById("seconds").value;
	var interval = setInterval(function() {
		document.getElementById('div1').innerHTML = --lefts;
		if (lefts <= 0)
		{		
		  for(var i = 0; i < img.length; i++){
				img[i].src = "baseimage.jpg";
			}
			if (picnum == 8){
				lefts = 120;
			}
			if (picnum == 10){
				lefts = 150;
			}
			if (picnum == 12){
				lefts = 180;
			}
			document.getElementById('div1').innerHTML = "You are Ready!";
			var interval = setInterval(function() {
				document.getElementById('div2').innerHTML = --lefts;
				if (lefts <= 0)
				{
				   document.getElementById('div2').innerHTML = "Game over";
				   clearInterval(interval);
				}
				}, 1000);
			}
			clearInterval(interval);
		}, 1000);
}
function newtable() {
	output.innerHTML = "";
	limit = document.getElementById("imagenum").value;
	var index = 0;
	for(var i=0; i < limit; i++){
		var pics = "pic-" + (i + 1) + ".jpg";
		pictureArray[index++] = pics;
		pictureArray[index++] = pics;
	}
	
	variant(); 
	
	var pair = document.getElementById("imagenum").value;
	var body = document.getElementsByTagName("body")[0];
	var raw;
	var cal;
	if(pair == 8){
		raw =4;
		cal =4;
	}
	if(pair == 10){
		raw =4;
		cal =5;
	}
	if(pair == 12){
		raw = 3;
		cal = 8;
	}
	var count = 0;				
	for (var j = 1; j <= raw; j++) {
		var row = document.createElement("tr");
		for (var i = 0; i < cal; i++) {
			place = document.createElement("td"); 
			img[count] = document.createElement('img');
			img[count].src = pictureArray[count];
			img[count].id = "" + count;
			img[count].className = "match";
			img[count].onclick = function () {imgClick(this)};
			solved[count] = false;
			place.appendChild(img[count]);
			row.appendChild(place);
			count++;
		}
		output.appendChild(row);
	}
}
function imgClick(event){
	if (check) {
		if(checkClick == false){
			index = event.id;
			checkClick = !checkClick;
			event.src = pictureArray[index];
		}else if (index != event.id){
		   check = false;
		   index1 = event.id;
		   compareStringAtIndex(index,index1);
		   checkClick = !checkClick;
		   event.src = pictureArray[index1];
		}
		if(allValuesSame() == true){
			WindoWave(2);
		}
	}
	
}
function compareStringAtIndex(){
	var str1 = pictureArray[index];
	var str2 = pictureArray[index1];
	if(str1 == str2){
		solved[index] = true;
		solved[index1] = true;
		check = true;
	}else{
		setTimeout(function () {timefunc(index, index1)}, 1000);
	}
}

function timefunc(flipIndex1, flipIndex2) {
	img[flipIndex1].src = "baseimage.jpg";
	img[flipIndex2].src = "baseimage.jpg";
	check = true;
}
function allValuesSame() {
    for(var i = 0; i < solved.length; i++)
    {
        if(solved[i] == false){
            return false;
		}
	}
	return true;
}
function variant(){
	for(var i=0; i <= 500; i++){
		var random = parseInt(Math.random() * limit * 2);
		var random2 = parseInt(Math.random() * limit * 2);
		var temp = pictureArray[random];
		pictureArray[random] = pictureArray[random2];
		pictureArray[random2] = temp;
	}
}
 function nextSize(i,incMethod,textLength) 
{ 
if (incMethod == 1) return (72*Math.abs( Math.sin(i/(textLength/3.14))) ); 
if (incMethod == 2) return (255*Math.abs( Math.cos(i/(textLength/3.14)))); 
} 

function sizeCycle(text,method,dis) 
{ 
   output = ""; 
   for (i = 0; i < text.length; i++) 
   { 
       size = parseInt(nextSize(i +dis,method,text.length)); 
       output += "<font style='font-size: "+ size +"pt'>" +text.substring(i,i+1)+ "</font>"; 
   } 
   div3.innerHTML = output; 
} 

function WindoWave(n) 
{   
   sizeCycle(result,1,n); 
   if (n > result.length) {n=0} 
   setTimeout("WindoWave(" + (n+1) + ")", 50); 
} 