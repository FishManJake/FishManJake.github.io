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
async function inetGet(fileName, filePath, mimeType = 'application/octet-stream') {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const content = await response.blob();
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error fetching the file:', error);
    }
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
