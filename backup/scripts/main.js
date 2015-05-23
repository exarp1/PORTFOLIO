// This is my main js test file for learning JS


// a short way to refer to H1 elements in my HTML.
var myHeading = document.querySelector('h1');

// inject text into my new H1 variable
myHeading.innerHTML = 'Hello World!';

// image changer function
var myImage = document.querySelector('img');

myImage.onclick = function() 
{
		var mySrc = myImage.getAttribute('src');
		if(mySrc === 'images/firefox-icon.png') 
		{
				myImage.setAttribute ('src','images/firefox2.png');
		}
		else
		{
				myImage.setAttribute ('src','images/firefox-icon.png');
		}
}


// change user button

//grab references to the new button and heading and stores them.
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

//function to set a personalized greeting 
function setUserName() 
{
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool. ' + myName;
}

//get name of user when page loads.
if(!localStorage.getItem('name')) /* no name in storage */
{
	setUserName();
}
else								/* grab stored name */
{
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is cool. ' + storedName;
}

myButton.onclick = function() {
	setUserName();
	}

