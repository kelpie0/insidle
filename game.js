// ==========================================================================
// DATA POOLS (Edit these with your inside jokes!)
// ==========================================================================
const quotesPool = [
    { id: 1, quote: "Was that your check?", author: "Luke" },
    { id: 2, quote: "C?", author: "Gurshaan" },
    { id: 3, quote: "I'm 6 foot 2!", author: "Riley" },
    { id: 4, quote: "That's ball knowledge.", author: "Mason" },
    { id: 5, quote: "Ba is minton about Y", author: "Gurshaan" },
    { id: 6, quote: "Wait, is that the linux penguin?", author: "Mrs. Knibbs" }
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
    { id: 4, image: "images/chuddy.png", author: "Chuddy" }
];

const MAX_GUESSES = 6;
let currentMode = 'daily-quote'; 
let currentAnswer = ""; 
let currentClueData = null; 

let gameState = {
    guesses: [],
    gameOver: false,
    won: false
};

// ==========================================================================
// STRING CLOSENESS ALGORITHM (Levenshtein)
// ==========================================================================
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

// ==========================================================================
// ENGINE LOOP INITIALIZATION
// ==========================================================================
function initGame() {
    document.getElementById('result-modal').style.display = 'none';
    document.getElementById('guess-form').style.display = 'flex';
    document.getElementById('guess-input').value = '';
    document.getElementById('guess-input').disabled = false;
    document.getElementById('next-btn').style.display = 'none';

    // UI View Configuration Switches
    document.getElementById('quote-display').style.display = 'none';
    document.getElementById('image-display').style.display = 'none';

    const today = new Date();
    const dateKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    if (currentMode === 'daily-quote') {
        currentClueData = getDailyItem(quotesPool, dateKey);
        currentAnswer = currentClueData.author;
        document.getElementById('quote-display').innerText = currentClueData.quote;
        document.getElementById('quote-display').style.display = 'block';
        loadSavedState(`insidle_daily_quote_${dateKey}`);

    } else if (currentMode === 'infinite-quote') {
        currentClueData = quotesPool[Math.floor(Math.random() * quotesPool.length)];
        currentAnswer = currentClueData.author;
        document.getElementById('quote-display').innerText = currentClueData.quote;
        document.getElementById('quote-display').style.display = 'block';
        document.getElementById('next-btn').style.display = 'block';
        resetState();

    } else if (currentMode === 'wordle') {
        currentClueData = getDailyItem(wordlePool, dateKey);
        currentAnswer = currentClueData.word.toUpperCase();
        document.getElementById('quote-display').innerText = "Wordle Mode";
        document.getElementById('quote-display').style.display = 'block';
        loadSavedState(`insidle_daily_wordle_${dateKey}`);

    } else if (currentMode === 'screenshot') {
        // Randomized Infinite Setup
        currentClueData = screenshotPool[Math.floor(Math.random() * screenshotPool.length)];
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

// ==========================================================================
// GAMEPLAY INPUT & EVALUATION ENGINE
// ==========================================================================
function handleGuess(event) {
    event.preventDefault();
    if (gameState.gameOver) return;

    const input = document.getElementById('guess-input');
    let userGuess = input.value.trim().toUpperCase();
    if (!userGuess) return;

    if (currentMode === 'wordle' && userGuess.length !== currentAnswer.length) {
        alert(`Guess must be exactly ${currentAnswer.length} letters long.`);
        return;
    }

    gameState.guesses.push(userGuess);

    if (currentMode === 'wordle') {
        if (userGuess === currentAnswer) {
            gameState.won = true;
            gameState.gameOver = true;
        } else if (gameState.guesses.length >= MAX_GUESSES) {
            gameState.gameOver = true;
        }
    } else {
        const result = checkCloseness(userGuess, currentAnswer);
        if (result === 'correct') {
            gameState.won = true;
            gameState.gameOver = true;
        } else if (gameState.guesses.length >= MAX_GUESSES) {
            gameState.gameOver = true;
        }
    }

    // Save progression only if it's a daily mode pipeline
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
    if (currentMode === 'infinite-quote' || currentMode === 'screenshot') {
        initGame();
    }
}

// ==========================================================================
// RENDERING SHARE MATRICES
// ==========================================================================
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

window.onload = initGame;