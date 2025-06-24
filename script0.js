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
const fileMap = {
    'dataGLDS.wav': '/subpages/archive/content/audio/dataGLDS.wav',
    'dataGLDS0.png': '/subpages/archive/content/img/dataGLDS0.png',
    'dataGLDS1.png': '/subpages/archive/content/img/dataGLDS1.png',
    'finis.png': '/subpages/archive/content/img/finis.png',
    'goodbye.png': '/subpages/archive/content/img/goodbye.png',
    'g0.jpg': '/subpages/archive/content/img/g0.jpg',
    'hn31.jpg': '/subpages/archive/content/img/hn31.jpg',
    'imsorry.png": "/subpages/archive/content/img/imsorry.png',
    'procedural_generator_test.bsp': '/subpages/archive/content/bsp/procedural_generator_test.bsp',
    'procedural_generator_test.txt': '/subpages/archive/content/txt/procedural_generator_test.txt'
};
function checkInput() {
    const userInput = document.getElementById('userInput').value;
    const output = document.getElementById('outputText');
    if (userInput === 'Help') {
        output.textContent = 'About - Get Info. About Some[One/Thing] (Example - About Terminal); InetGet - Get File From Archive (Example - InetGet File.txt)';
    } else if (userInput === 'About Terminal') {
        output.textContent = 'Terminal Ver. 0.0.5; WritTen With CSS/HTML/JS';
    } else if (userInput.startsWith('InetGet ')) {
        const fileName = userInput.split(' ')[1];
        const filePath = fileMap[fileName];
        if (filePath) {
            inetGet(fileName, filePath);
        } else {
            output.textContent = 'Bash: File Not Found';
        }
    } else {
        output.textContent = 'Bash: Command Not Found';
    }
}
