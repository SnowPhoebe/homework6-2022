var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	// console.log("The current volume is " + video.volume) 
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	// console.log("The current speed is " + video.playbackRate) 
	video.playbackRate *= 0.95
	console.log("New speed is " + video.playbackRate) 
});

document.querySelector("#faster").addEventListener("click", function() {
	// console.log("The current speed is " + video.playbackRate) 
	video.playbackRate /= 0.95
	console.log("New speed is " + video.playbackRate) 
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime) 
	if (video.currentTime + 15 > video.duration){
		console.log("Going back to beginning")
		video.currentTime = 0 
		console.log("New location 0") 
	}
	else{
		video.currentTime += 15
		console.log("New location " + video.currentTime) 
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + video.muted) 
	// video.muted = true
	if (video.muted){
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else{
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value) 
	video.volume = this.value * 0.01
	document.querySelector("#volume").innerHTML = this.value + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.getElementById("player1").classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	document.getElementById("player1").classList.remove("oldSchool");
});

