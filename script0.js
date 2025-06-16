const inputField = document.getElementById('userInput');
inputField.focus();
inputField.addEventListener('blur', function() {
    setTimeout(() => {
        inputField.focus();
    }, 0);
});
document.getElementById('userInput').addEventListener('keypress', function(event) {
	if (event.key === 'Enter') {
		checkInput();
	}
});
function checkInput() {
	const userInput = document.getElementById('userInput').value;
	const output = document.getElementById('outputText');
	if (userInput === 'help') {
		output.textContent = 'About - Get Info. About Some[One/Thing] (Example - About Terminal); InetGet - Get File From Archive (Example - InetGet File.txt)';
	}
	else if (userInput === 'About') {
		output.textContent = 'About [NAMEHERE]';
	}
	else if (userInput === 'About Terminal') {
		output.textContent = 'Terminal Ver. 0.0.5; WritTen With HTML/CSS/JS';
	}
	else if (userInput === 'InetGet') {
		output.textContent = 'InetGet [FILENAMEHERE]';
	}
	else {
		output.textContent = 'bash: command not found';
	}	
}