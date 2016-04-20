function result11 (){
	var result = document.getElementById("result");
	result.onclick = startGo ; 
	
	
};

function startGo (){
	var messageArea = document.getElementById("messageArea");
	var messageArea1 = messageArea.value.split(' ');
	var res;
     if (messageArea1[1] === '+') res =  model.sum(messageArea1);
		else if (messageArea1[1] === '-') res = model.minus (messageArea1);
			else if (messageArea1[1] === '*') res = model.mult(messageArea1);
				else if (messageArea1[1] === '/') res = model.divide (messageArea1);
	
	show.displayResult (res);
	
	 
};
var show ={
 displayResult: function (res){
	var messageArea = document.getElementById("messageArea");
	if (isNaN(res)) res = "You make a mistake!";
	messageArea.value = res;
}, 
displayNumbers: function(k){
	
	var messageArea = document.getElementById("messageArea");
	messageArea.value = messageArea.value+k;

},

displayClean: function(){
	var messageArea = document.getElementById("messageArea");
	messageArea.value = '';
}

};


var model = {
	sum: function (messageArea1){
	
		for(var i=0; i<messageArea1.length; i++)
		return	(+messageArea1[i])+(+messageArea1[2]);
	console.log ("s");
	},
	minus: function (messageArea1){
		for(var i=0; i<messageArea1.length; i++)
		return	(+messageArea1[i])-(+messageArea1[2]);
	},
	mult: function(messageArea1){
		for(var i=0; i<messageArea1.length; i++)
		return	(+messageArea1[i])*(+messageArea1[2]);
	},
	divide: function (messageArea1){
		for(var i=0; i<messageArea1.length; i++)
		return	(+messageArea1[i])/(+messageArea1[2]);
	}

 
};
 


window.onload = result11();
