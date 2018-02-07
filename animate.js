var canv = document.getElementById("slate");
var ctx = canv.getContext("2d");
var requestID;
var stopB = document.getElementById("stop");

var animate = function(){
	var grow = true;
	var r = 0;
	window.cancelAnimationFrame(requestID);
	
	var draw = function() {
		clear();
		ctx.beginPath();
		ctx.arc(canv.width/2, canv.height/2, r, 0, 2 * Math.PI);
		ctx.stokeStyle = "#800000";
   		ctx.stroke();
   	 	ctx.fillStyle = "#800000";
		ctx.fill();
		
		if (grow){
			r++;
			if (r >= canv.height/2){
				grow = false;
			}
		}
		else{
			r--;
			if (r <=1){
				grow = true;
			}
		}
		
		requestID = window.requestAnimationFrame( draw );
		console.log(requestID);
	}
	draw();
};


var clear = function() {
    ctx.clearRect(0, 0, 500, 500);
};

var pause = function(){
	window.cancelAnimationFrame(requestID);
}

stopB.addEventListener('click', pause)

canv.addEventListener('click', animate);