const bgChannel = new BroadcastChannel("bg_color");

bgChannel.onmessage = function(message) {
	let color = message.data.padEnd(9, "FF");
	if(color.substr(-2) === "00") {
		color = "transparent";
	}

	document.querySelector("body").style.background = color;
	document.querySelector("body").style.backgroundColor = color;
}