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
function inetGet(fileName, filePath) {
	const blob = new Blob([content], { type: 'text/plain' });
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = fileName;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}
function checkInput() {
	const userInput = document.getElementById('userInput').value;
	const output = document.getElementById('outputText');
	if (userInput === 'Help') {
		output.textContent = 'About - Get Info. About Some[One/Thing] (Example - About Terminal); InetGet - Get File From Archive (Example - InetGet File.txt)';
	}
	else if (userInput === 'About') {
		output.textContent = 'About [NAMEHERE]';
	}
	else if (userInput === 'About Terminal') {
		output.textContent = 'Terminal Ver. 0.0.5; WritTen With CSS/HTML/JS';
	}
	else if (userInput === 'InetGet') {
		output.textContent = 'InetGet [FILENAMEHERE]';
	}
	else if (userInput === 'InetGet procedural_generator_test.bsp') {
		inetGet('procedural_generator_test.bsp', '/subpages/archive/content/bsp/procedural_generator_test.bsp');
	}
	else {
		output.textContent = 'Bash: Command Not Found';
	}
}
