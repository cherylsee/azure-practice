// keep track of haro's status
let isRolled = false;
// not currently used, but could do a message
const text_node = document.getElementById("textbox");

// Rolls - only happens when clicked
function roll() {
	const drawing = document.getElementById("haro-body");
	let animationTime = 90;

	// default state to rolled state
	if (!isRolled) {
		// if using style.marginLeft etc it only reads what is applied here
		// and not what is applied via style sheet (breaking js)
		// initializing these here
		drawing.style.marginLeft = "150px";
		drawing.style.transform = "rotate(0deg)";

		// Rolling clockwise animation
		for (let i = 0; i < animationTime; i++) {
			setTimeout(doRotate, i * 30, i);
		}
		// this pauses the bouncing animation after rolls to a stop
		setTimeout(function () {
			drawing.style.animationPlayState = "paused";
		}, animationTime * 31);
	}
	// rolled state to default state
	else {
		// Rolling counter-clockwise animation
		for (let i = 0; i < animationTime; i++) {
			setTimeout(doRotateBack, i * 30, i);
		}
		drawing.style.animationPlayState = "running";
	}
	isRolled = !isRolled;
}

// Rotate drawing and animate moving clockwise and right
// i is the # of degrees
function doRotate(i) {
	const drawing = document.getElementById("haro-body");
	let currentMargin = parseInt(drawing.style.marginLeft.slice(0, -2));
	drawing.style.marginLeft = currentMargin + 7 + "px";
	let currentRotation = parseInt(drawing.style.transform.slice(7, -4));
	drawing.style.transform = "rotate(" + (currentRotation + 10) + "deg)";
}

// Rotate counter-clockwise and left (resetting position)
function doRotateBack(i) {
	const drawing = document.getElementById("haro-body");
	let currentMargin = parseInt(drawing.style.marginLeft.slice(0, -2));
	drawing.style.marginLeft = currentMargin - 7 + "px";
	let currentRotation = parseInt(drawing.style.transform.slice(7, -4));
	drawing.style.transform = "rotate(" + (currentRotation - 10) + "deg)";
}
