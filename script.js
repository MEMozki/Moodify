document.getElementById('shortenBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value.trim();

    if (inputText.length === 0) {
        alert('Text needed!');
        return;
    }

    let shortenedText = shortenText(inputText);
    
    let outputDiv = document.getElementById('outputText');
    outputDiv.textContent = shortenedText;
    outputDiv.style.display = 'block';
});

function shortenText(text) {
    let words = text.split(' ');
    if (words.length <= 10) return text; 

    let importantWords = words.filter((word, index) => index % 2 === 0);
    return importantWords.join(' ') + '...';
}
