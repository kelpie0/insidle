const quotesPool = [
    { id: 1, quote: "Was that your check?", author: "Luke" },
    { id: 2, quote: "C?", author: "Gurshaan" },
    { id: 3, quote: "I'm 6 foot 2!", author: "Riley" },
    { id: 4, quote: "That's ball knowledge.", author: "Mason" },
    { id: 5, quote: "Ba is minton about Y", author: "Gurshaan" },
    { id: 6, quote: "Wait, is that the linux penguin?", author: "Mrs. Knibbs" },
    { id: 7, quote: "Yo can we get “losed” as a qoute", author: "Damien" },
    { id: 8, quote: "The divorce isn't going well", author: "Harrison" },
    { id: 9, quote: "Mitosis. a̶̋̈̈́̌u̴̞̥̓̓ä̶̒̕͝u̸̾̄̽̀ȕ̷̓̓̔û̷͌̑̓ǟ̸̋̓u̴̒̊͊͠ a̶̋̈̈́̌u̴̞̥̓̓ä̶̒̕͝u̸̾̄̽̀ȕ̷̓̓̔û̷͌̑̓ǟ̸̋̓u", author: "Damien" }
];

const wordlePool = [
    { id: 1, word: "SPOOM" },
    { id: 2, word: "MINTON" },
    { id: 3, word: "PYTHON" },
    { id: 4, word: "ISRAEL" },
    { id: 5, word: "PIKEY" },
    { id: 6, word: "DAMIEN" },
    { id: 7, word: "CALLUM" }
];

const screenshotPool = [
    { id: 1, image: "images/itsdamo.png", author: "Damien" },
    { id: 2, image: "images/jpeg1.png", author: "Gurshaan" },
    { id: 3, image: "images/matthew.png", author: "Matthew" },
    { id: 4, image: "images/chuddy.png", author: "Chuddy" },
    { id: 5, image: "images/harrison.png", author: "Harrison" },
    { id: 6, image: "images/jpeg2.png", author: "Gurshaan" }
];

const MAX_GUESSES = 6;
let currentMode = 'daily-quote'; 
let currentAnswer = ""; 
let currentClueData = null; 
let currentWordleGuess = "";
let playedQuotes = [];
let playedScreenshots = [];

let gameState = {
    guesses: [],
    gameOver: false,
    won: false
};

function getEditDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

function checkCloseness(guess, target) {
    const g = guess.toLowerCase().trim();
    const t = target.toLowerCase().trim();
    if (g === t) return 'correct';
    if (getEditDistance(g, t) <= 2) return 'close';
    return 'incorrect';
}

function handleExhaustion() {
    const messageContainer = document.getElementById('quote-display');
    messageContainer.innerText = "No more left, wait for next update.";
    messageContainer.classList.add('system-message');
    messageContainer.style.display = 'block';
    
    document.getElementById('image-display').style.display = 'none';
    document.getElementById('guess-form').style.display = 'none';
    document.getElementById('keyboard').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('guess-grid').innerHTML = '';
    document.getElementById('result-modal').style.display = 'none';
}

function initGame() {
    document.getElementById('result-modal').style.display = 'none';
    document.getElementById('guess-form').style.display = 'flex';
    document.getElementById('guess-input').value = '';
    document.getElementById('guess-input').disabled = false;
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('keyboard').style.display = 'none';

    const quoteDisplay = document.getElementById('quote-display');
    quoteDisplay.style.display = 'none';
    quoteDisplay.classList.remove('system-message');
    document.getElementById('image-display').style.display = 'none';

    const today = new Date();
    const dateKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    currentWordleGuess = "";

    if (currentMode === 'daily-quote') {
        currentClueData = getDailyItem(quotesPool, dateKey);
        currentAnswer = currentClueData.author;
        quoteDisplay.innerText = currentClueData.quote;
        quoteDisplay.style.display = 'block';
        loadSavedState(`insidle_daily_quote_${dateKey}`);

    } else if (currentMode === 'infinite-quote') {
        const availableQuotes = quotesPool.filter(q => !playedQuotes.includes(q.id));
        if (availableQuotes.length === 0) {
            handleExhaustion();
            return;
        }
        currentClueData = availableQuotes[Math.floor(Math.random() * availableQuotes.length)];
        currentAnswer = currentClueData.author;
        quoteDisplay.innerText = currentClueData.quote;
        quoteDisplay.style.display = 'block';
        document.getElementById('next-btn').style.display = 'block';
        resetState();

    } else if (currentMode === 'wordle') {
        currentClueData = getDailyItem(wordlePool, dateKey);
        currentAnswer = currentClueData.word.toUpperCase();
        quoteDisplay.innerText = "Wordle Mode";
        quoteDisplay.style.display = 'block';
        document.getElementById('guess-form').style.display = 'none';
        document.getElementById('keyboard').style.display = 'flex';
        loadSavedState(`insidle_daily_wordle_${dateKey}`);
        setupKeyboard();

    } else if (currentMode === 'screenshot') {
        const availableScreenshots = screenshotPool.filter(s => !playedScreenshots.includes(s.id));
        if (availableScreenshots.length === 0) {
            handleExhaustion();
            return;
        }
        currentClueData = availableScreenshots[Math.floor(Math.random() * availableScreenshots.length)];
        currentAnswer = currentClueData.author;
        document.getElementById('image-display').src = currentClueData.image;
        document.getElementById('image-display').style.display = 'block';
        document.getElementById('next-btn').style.display = 'block';
        resetState();
    }

    setupGrid();
    updateGridDisplay();
    if (gameState.gameOver) endGame();
}

function getDailyItem(pool, dateString) {
    let hash = 0;
    for (let i = 0; i < dateString.length; i++) {
        hash = dateString.charCodeAt(i) + ((hash << 5) - hash);
    }
    return pool[Math.abs(hash) % pool.length];
}

function loadSavedState(storageKey) {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
        gameState = JSON.parse(saved);
    } else {
        resetState();
    }
}

function resetState() {
    gameState = { guesses: [], gameOver: false, won: false };
}

function setupGrid() {
    const grid = document.getElementById('guess-grid');
    grid.innerHTML = '';
    
    const columnsCount = (currentMode === 'wordle') ? currentAnswer.length : 1;

    for (let i = 0; i < MAX_GUESSES; i++) {
        const row = document.createElement('div');
        row.className = 'guess-row';
        row.id = `row-${i}`;

        for (let j = 0; j < columnsCount; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile empty';
            tile.id = `row-${i}-tile-${j}`;
            row.appendChild(tile);
        }
        grid.appendChild(row);
    }
}

function setMode(mode) {
    if (currentMode === mode) return;
    currentMode = mode;
    
    const formats = ['daily-quote', 'infinite-quote', 'wordle', 'screenshot'];
    formats.forEach(f => document.getElementById(`mode-${f}`).classList.toggle('active', f === mode));
    
    initGame();
}

function handleGuess(event) {
    event.preventDefault();
    if (gameState.gameOver) return;

    const input = document.getElementById('guess-input');
    let userGuess = input.value.trim().toUpperCase();
    if (!userGuess) return;

    if (gameState.guesses.length === 0) {
        if (currentMode === 'infinite-quote' && !playedQuotes.includes(currentClueData.id)) {
            playedQuotes.push(currentClueData.id);
        } else if (currentMode === 'screenshot' && !playedScreenshots.includes(currentClueData.id)) {
            playedScreenshots.push(currentClueData.id);
        }
    }

    gameState.guesses.push(userGuess);

    const result = checkCloseness(userGuess, currentAnswer);
    if (result === 'correct') {
        gameState.won = true;
        gameState.gameOver = true;
    } else if (gameState.guesses.length >= MAX_GUESSES) {
        gameState.gameOver = true;
    }

    if (currentMode !== 'infinite-quote' && currentMode !== 'screenshot') {
        const today = new Date();
        const dateKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        const modeKeys = { 'daily-quote': 'quote', 'wordle': 'wordle' };
        localStorage.setItem(`insidle_daily_${modeKeys[currentMode]}_${dateKey}`, JSON.stringify(gameState));
    }

    updateGridDisplay();
    input.value = '';

    if (gameState.gameOver) endGame();
}

function handleWordleInput(key) {
    if (gameState.gameOver) return;
    if (key === 'ENTER' || key === 'Enter') {
        submitWordleGuess();
    } else if (key === 'BACKSPACE' || key === 'Backspace') {
        currentWordleGuess = currentWordleGuess.slice(0, -1);
        updateGridDisplay();
    } else if (/^[a-zA-Z]$/.test(key)) {
        if (currentWordleGuess.length < currentAnswer.length) {
            currentWordleGuess += key.toUpperCase();
            updateGridDisplay();
        }
    }
}

function submitWordleGuess() {
    if (currentWordleGuess.length !== currentAnswer.length) {
        alert(`Guess must be exactly ${currentAnswer.length} letters long.`);
        return;
    }
    
    gameState.guesses.push(currentWordleGuess);
    
    if (currentWordleGuess === currentAnswer) {
        gameState.won = true;
        gameState.gameOver = true;
    } else if (gameState.guesses.length >= MAX_GUESSES) {
        gameState.gameOver = true;
    }
    
    currentWordleGuess = "";
    
    const today = new Date();
    const dateKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    localStorage.setItem(`insidle_daily_wordle_${dateKey}`, JSON.stringify(gameState));
    
    updateGridDisplay();
    updateKeyboardKeyStatuses();
    
    if (gameState.gameOver) endGame();
}

function setupKeyboard() {
    const keyboardContainer = document.getElementById('keyboard');
    keyboardContainer.innerHTML = '';
    
    const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
    ];
    
    rows.forEach(row => {
        const rowElement = document.createElement('div');
        rowElement.className = 'keyboard-row';
        
        row.forEach(key => {
            const keyElement = document.createElement('button');
            keyElement.innerText = key;
            keyElement.setAttribute('data-key', key);
            keyElement.className = 'key';
            if (key === 'ENTER' || key === 'BACKSPACE') {
                keyElement.classList.add('wide');
            }
            
            keyElement.addEventListener('click', () => {
                handleWordleInput(key);
            });
            
            rowElement.appendChild(keyElement);
        });
        
        keyboardContainer.appendChild(rowElement);
    });
    
    updateKeyboardKeyStatuses();
}

function updateKeyboardKeyStatuses() {
    const statuses = {};
    for (let i = 0; i < gameState.guesses.length; i++) {
        const guess = gameState.guesses[i];
        for (let j = 0; j < guess.length; j++) {
            const char = guess[j];
            if (currentAnswer[j] === char) {
                statuses[char] = 'correct';
            } else if (currentAnswer.includes(char)) {
                if (statuses[char] !== 'correct') {
                    statuses[char] = 'close';
                }
            } else {
                if (!statuses[char]) {
                    statuses[char] = 'incorrect';
                }
            }
        }
    }
    
    const keys = document.querySelectorAll('.key');
    keys.forEach(keyElement => {
        const keyText = keyElement.getAttribute('data-key');
        if (keyText && statuses[keyText]) {
            keyElement.className = `key ${statuses[keyText]}`;
            if (keyText === 'ENTER' || keyText === 'BACKSPACE') {
                keyElement.classList.add('wide');
            }
        } else if (keyText) {
            keyElement.className = 'key';
            if (keyText === 'ENTER' || keyText === 'BACKSPACE') {
                keyElement.classList.add('wide');
            }
        }
    });
}

function updateGridDisplay() {
    for (let i = 0; i < MAX_GUESSES; i++) {
        const currentGuessStr = gameState.guesses[i];
        
        if (currentMode === 'wordle') {
            let targetLetterCounts = {};
            for (let char of currentAnswer) {
                targetLetterCounts[char] = (targetLetterCounts[char] || 0) + 1;
            }

            let tileStatuses = Array(currentAnswer.length).fill('incorrect');

            if (currentGuessStr) {
                for (let j = 0; j < currentAnswer.length; j++) {
                    if (currentGuessStr[j] === currentAnswer[j]) {
                        tileStatuses[j] = 'correct';
                        targetLetterCounts[currentGuessStr[j]]--;
                    }
                }
                for (let j = 0; j < currentAnswer.length; j++) {
                    if (tileStatuses[j] !== 'correct' && targetLetterCounts[currentGuessStr[j]] > 0) {
                        tileStatuses[j] = 'close';
                        targetLetterCounts[currentGuessStr[j]]--;
                    }
                }
            }

            for (let j = 0; j < currentAnswer.length; j++) {
                const tile = document.getElementById(`row-${i}-tile-${j}`);
                if (currentGuessStr) {
                    tile.innerText = currentGuessStr[j] || '';
                    tile.className = `tile ${tileStatuses[j]}`;
                } else if (i === gameState.guesses.length) {
                    tile.innerText = currentWordleGuess[j] || '';
                    tile.className = 'tile empty';
                } else {
                    tile.innerText = '';
                    tile.className = 'tile empty';
                }
            }
        } else {
            const tile = document.getElementById(`row-${i}-tile-0`);
            if (currentGuessStr) {
                tile.innerText = currentGuessStr;
                const matchResult = checkCloseness(currentGuessStr, currentAnswer);
                tile.className = `tile ${matchResult}`;
            } else {
                tile.innerText = '';
                tile.className = 'tile empty';
            }
        }
    }
}

function endGame() {
    document.getElementById('guess-input').disabled = true;
    document.getElementById('guess-form').style.display = 'none';
    document.getElementById('keyboard').style.display = 'none';
    
    const modal = document.getElementById('result-modal');
    const title = document.getElementById('result-title');
    const meta = document.getElementById('result-meta');
    
    modal.style.display = 'flex';
    
    if (gameState.won) {
        title.innerText = "Correct";
        meta.innerText = `Solved in ${gameState.guesses.length}/${MAX_GUESSES} attempts. Answer: ${currentAnswer}`;
    } else {
        title.innerText = "Game Over";
        meta.innerText = `Out of attempts. Target answer was: ${currentAnswer}`;
    }
}

function handleNextRound() {
    if (currentMode === 'infinite-quote' && currentClueData) {
        if (!playedQuotes.includes(currentClueData.id)) {
            playedQuotes.push(currentClueData.id);
        }
    } else if (currentMode === 'screenshot' && currentClueData) {
        if (!playedScreenshots.includes(currentClueData.id)) {
            playedScreenshots.push(currentClueData.id);
        }
    }

    if (currentMode === 'infinite-quote' || currentMode === 'screenshot') {
        initGame();
    }
}

function shareResult() {
    let shareText = `Insidle - Mode: ${currentMode.toUpperCase()}\n`;
    
    for (let i = 0; i < gameState.guesses.length; i++) {
        const guess = gameState.guesses[i];
        if (currentMode === 'wordle') {
            let targetLetterCounts = {};
            for (let char of currentAnswer) targetLetterCounts[char] = (targetLetterCounts[char] || 0) + 1;
            let rowIcons = Array(currentAnswer.length).fill('🟥');

            for (let j = 0; j < currentAnswer.length; j++) {
                if (guess[j] === currentAnswer[j]) { rowIcons[j] = '🟩'; targetLetterCounts[guess[j]]--; }
            }
            for (let j = 0; j < currentAnswer.length; j++) {
                if (rowIcons[j] !== '🟩' && targetLetterCounts[guess[j]] > 0) { rowIcons[j] = '🟨'; targetLetterCounts[guess[j]]--; }
            }
            shareText += rowIcons.join('') + '\n';
        } else {
            const status = checkCloseness(guess, currentAnswer);
            shareText += (status === 'correct') ? '🟩\n' : (status === 'close') ? '🟨\n' : '🟥\n';
        }
    }
    
    shareText += `Score: ${gameState.won ? gameState.guesses.length : 'X'}/${MAX_GUESSES}\nLink: ${window.location.href}`;
    
    navigator.clipboard.writeText(shareText).then(() => {
        const toast = document.getElementById('toast');
        toast.style.display = 'block';
        setTimeout(() => { toast.style.display = 'none'; }, 2500);
    });
}

window.addEventListener('keydown', (e) => {
    if (currentMode !== 'wordle' || gameState.gameOver) return;
    handleWordleInput(e.key);
});

window.onload = initGame;