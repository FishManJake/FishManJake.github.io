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
		output.textContent = 'about - get info about something (example: about Terminal), open - open file';
	}
	else if (userInput === 'about') {
		output.textContent = 'about [NAMEHERE]';
	}
	else if (userInput === 'about Terminal') {
		output.textContent = 'Terminal Ver. = 0.0.4 (Stable)';
	}
	else if (userInput === 'open') {
		output.textContent = 'open [FILENAMEHERE]';
	}
	else {
		output.textContent = 'bash: command not found';
	}	
}