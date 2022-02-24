let itemHours = document.querySelector('.hours');
let itemMins = document.querySelector('.mins');
let itemSecs = document.querySelector('.secs');

function setdate() {
	//we get this time from our pc time not from server
	let now = new Date();

	
	//we get Second Time
	let secTime = now.getSeconds();
	//get Degree Of Second
	let secDegree = ((secTime / 60) * 360) + 90;
	//Use Degree Of Second on itemSecs
	itemSecs.style.transform = `rotate(${secDegree}deg)`;


	//we get Minutes Time
	let minTime = now.getMinutes();
	//get Degree Of Minutes
	let minDegree = ((minTime / 60) * 360) + 90;
	//Use Degree Of Minutes on itemMins
	itemMins.style.transform = `rotate(${minDegree}deg)`;

	
	//we get Hours Time
	let hourTime = now.getHours();
	//get Degree Of Hours
	let hourDegree = ((hourTime / 12) * 360) + 90;
	//Use Degree Of Hours on itemHours
	itemHours.style.transform = `rotate(${hourDegree}deg)`;
	
	
//	console.log(hourDegree + ':' + minDegree + ':' + secDegree)
}
setInterval(setdate, 1000);