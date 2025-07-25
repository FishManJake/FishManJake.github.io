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
function openFile(filePath) {
    window.open(filePath, '_blank');
}
const fileMap = {
    'Attack.wav': '/subpages/archive/content/audio/Attack.wav',
    'adminroom.bsp': '/subpages/archive/content/bsp/adminroom.bsp',
    'dataGLDS.wav': '/subpages/archive/content/audio/dataGLDS.wav',
    'dataGLDS0.png': '/subpages/archive/content/img/dataGLDS0.png',
    'dataGLDS1.png': '/subpages/archive/content/img/dataGLDS1.png',
    'dataRadio0.wav': '/subpages/archive/content/audio/dataRadio0.wav',
    'dataRadio1.wav': '/subpages/archive/content/audio/dataRadio1.wav',
    'finis.png': '/subpages/archive/content/img/finis.png',
    'goodbye.png': '/subpages/archive/content/img/goodbye.png',
    'g0.jpg': '/subpages/archive/content/img/g0.jpg',
    'hn31.jpg': '/subpages/archive/content/img/hn31.jpg',
    'imsorry.png': '/subpages/archive/content/img/imsorry.png',
    'lobby.bsp': '/subpages/archive/content/bsp/lobby.bsp',
    'procedural_generator_test.bsp': '/subpages/archive/content/bsp/procedural_generator_test.bsp',
    'procedural_generator_test.txt': '/subpages/archive/content/txt/procedural_generator_test.txt',
    'testchmb_a_one.bsp': '/subpages/archive/content/bsp/testchmb_a_one.bsp',
    'weapon_rocketgun.bsp': '/subpages/archive/content/bsp/weapon_rocketgun.bsp',
};
function checkInput() {
    const userInput = document.getElementById('userInput').value;
    const output = document.getElementById('outputText');
    if (userInput === 'Help') {
        output.innerHTML = 'About (Example: About Terminal); InetGet (Example: InetGet dataGLDS.wav); Open (Example: Open dataGLDS.wav); ShowContent';
    } else if (userInput === 'About Terminal') {
        output.innerHTML = 'Terminal Ver. 0.0.5; WritTen With CSS/HTML/JS';
    } else if (userInput.startsWith('InetGet ')) {
        const fileName = userInput.split(' ')[1];
        const filePath = fileMap[fileName];
        if (filePath) {
            inetGet(fileName, filePath);
        } else {
            output.innerHTML = 'Bash: File Not Found';
        }
    } else if (userInput.startsWith('Open ')) {
        const fileName = userInput.split(' ')[1];
        const filePath = fileMap[fileName];
        if (filePath) {
            openFile(filePath);
        } else {
            output.innerHTML = 'Bash: File Not Found';
        }
    } else if (userInput === 'ShowContent') {
        let content = '';
        for (const [fileName, filePath] of Object.entries(fileMap)) {
            content += `${fileName} - path:[${filePath}]<br>`;
        }
        output.innerHTML = content;
    } else {
        output.innerHTML = 'Bash: Command Not Found';
    }
}
