document.getElementById('shortenBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value.trim();

    if (inputText.length === 0) {
        alert('Please enter some text to shorten!');
        return;
    }

    let shortenedText = shortenText(inputText);
    
    let outputDiv = document.getElementById('outputText');
    outputDiv.textContent = shortenedText;
    outputDiv.style.display = 'block';

    animateText(outputDiv);
});

function shortenText(text) {
    let words = text.split(' ');
    if (words.length <= 8) return text;

    let importantWords = words.filter((word, index) => index % 2 === 0);
    return importantWords.join(' ') + '...';
}

function animateText(element) {
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = 'textFadeIn 0.5s ease-in-out';
    }, 10);
}
