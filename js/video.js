var video;
var volume;


function getVid(){
	video = document.querySelector("#myVideo"); 
	
}

function playVid() { 
	video.play();
	console.log("Play Video");
	volume = document.querySelector("#volume")
	volume.innerHTML = video.volume * 100 + '%';
	console.log(volume)
	console.log(video)
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate -= .2;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate += .25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	console.log("Current video location is: " + video.currentTime);
	video.currentTime += 60
	if (video.onended){
		video.onended = true;
		video.currentTime = 0
		video.playbackRate = 1
	}
} 

function mute() { 
		if (video.muted == false){
			video.muted = true;
			console.log("Muted");
			document.querySelector('#mute').innerHTML = 'Unmute';
		} 
		else{
			video.muted = false;
			console.log("Unmuted")
			document.querySelector('#mute').innerHTML = 'Mute';
		}
}

function changeVolume() {
	let slider = document.querySelector('#volumeSlider')
	console.log(slider.value)
	video.volume = slider.value/100;
	volume.innerHTML = video.volume * 100 + '%';
	console.log("Volume is " + video.volume);

}
       
function gray() { 
	document.getElementById("myVideo").className = "grayscale"
	console.log("In grayscale")
}

function color() {
	document.getElementById("myVideo").className -= "grayscale";
	console.log("In color") 
}