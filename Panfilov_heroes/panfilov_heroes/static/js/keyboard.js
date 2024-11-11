const keyboardLayout = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace'],
    ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ'],
    ['Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '⤶'],
    ['Ё', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', ','],
    ['Space']
];

function createKeyboard() {
    const keyboardDiv = document.getElementById('keyboard');

    keyboardLayout.forEach(row => {
        row.forEach(key => {
            const button = document.createElement('button');
            button.classList.add('key');
            button.innerText = key;
            button.onclick = () => handleKeyPress(key);

            if (key === 'Backspace') button.classList.add('backspace');
            if (key === 'Enter') button.classList.add('enter');
            if (key === 'Space') button.classList.add('space');

            keyboardDiv.appendChild(button);
        });

        const lineBreak = document.createElement('br');
        keyboardDiv.appendChild(lineBreak);
    });
}

function handleKeyPress(key) {
    const inputField = document.getElementById('keyboardInput');
    
    if (key === 'Space') {
        inputField.value += ' ';
    } else if (key === 'Backspace') {
        inputField.value = inputField.value.slice(0, -1);
    } else if (key === '⤶') {
        document.querySelector('form').submit();
    } else {
        inputField.value += key;
    }
}

document.addEventListener('DOMContentLoaded', createKeyboard);
