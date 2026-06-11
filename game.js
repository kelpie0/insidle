const quotesPool = [
    { id: 1, quote: "Was that your check?", author: "Luke" },
    { id: 2, quote: "C?", author: "Gurshaan" },
    { id: 3, quote: "I'm 6 foot 2!", author: "Riley" },
    { id: 4, quote: "That's ball knowledge.", author: "Mason" },
    { id: 5, quote: "Ba is minton about Y", author: "Gurshaan" },
    { id: 6, quote: "Wait, is that the linux penguin?", author: "Mrs. Knibbs" },
    { id: 7, quote: "Yo can we get “losed” as a qoute?", author: "Damien" },
    { id: 8, quote: "The divorce isn't going well", author: "Harrison" },
    { id: 9, quote: "Mitosis, a̶̋̈̈́̌u̴̞̥̓̓ä̶̒̕͝u̸̾̄̽̀ȕ̷̓̓̔û̷͌̑̓ǟ̸̋̓u̴̒̊͊͠ a̶̋̈̈́̌u̴̞̥̓̓ä̶̒̕͝u̸̾̄̽̀ȕ̷̓̓̔û̷͌̑̓ǟ̸̋̓u", author: "Damien" },
    { id: 10, quote: "Hi", author: "Gurshaan" },
    { id: 11, quote: "c.img", author: "Chuddy" },
    { id: 12, quote: "Young man, what the frick is this?!", author: "3FS" },
    { id: 13, quote: "Usually the first night isn't that bad..", author: "Markiplier" },
    { id: 14, quote: "Top of the morning to ya, laddies! My name is...", author: "Jacksepticeye" },
    { id: 15, quote: "Was that tuff?", author: "Billy" },
    { id: 16, quote: "You did not order a 60cm x 165cm Cabinet.", author: "Gurshaan" },
    { id: 17, quote: "*turns body 90°*", author: "Gurshaan" },
    { id: 18, quote: "Do you think I can touch the rim?", author: "Callum" },
    { id: 19, quote: "I'm so fucking confused..", author: "Damien" },
    { id: 20, quote: "You are SKILL-LESS.", author: "Mrs. Knibbs" },
    { id: 21, quote: "You said I could use the peanut butter.", author: "Jschlatt" },
    { id: 22, quote: ".edit deer", author: "NotSoBot" },
    { id: 23, quote: "Even using scientific notation wouldn't do it justice because the exponent itself would be a number that requires its own scientific notation.", author: "BoltBot" },
    { id: 24, quote: "bogo bogo bogo bogo bogo bogo bogo bogo bogo bogo bogo bogo", author: "bogo" },
    { id: 25, quote: "bogovirus bogovirus bogovirus bogovirus bogovirus bogovirus bogovirus ", author: "bogo" },
];

const wordlePool = [
    { id: 1, word: "SPOOM" },
    { id: 2, word: "MINTON" },
    { id: 3, word: "PYTHON" },
    { id: 4, word: "ISRAEL" },
    { id: 5, word: "PIKEY" },
    { id: 6, word: "DAMIEN" },
    { id: 7, word: "CALLUM" },
    { id: 8, word: "HARRISON" },
    { id: 9, word: "CHUDDY" },
    { id: 10, word: "MATTHEW" },
    { id: 11, word: "GURSHAAN" },
    { id: 12, word: "RILEY" },
    { id: 13, word: "MASON" },
    { id: 14, word: "TRACKMANIA" },
    { id: 15, word: "LUKE" },
    { id: 16, word: "GRACE"},
    { id: 17, word: "MAX" },
    { id: 18, word: "C" },
    { id: 19, word: "BA" },
    { id: 20, word: "PERCHANCE" },
    { id: 21, word: "JPEG" },
    { id: 22, word: "MITOSIS" },
    { id: 23, word: "MACOS" },
    { id: 24, word: "LINUX" },
    { id: 25, word: "ARCH" },
    { id: 26, word: "GITHUB" },
    { id: 27, word: "INSIDLE" },
    { id: 28, word: "WORDLE" },
    { id: 29, word: "QUOTE" },
    { id: 30, word: "RNGDLE" },
    { id: 31, word: "DBD" },
    { id: 32, word: "ROBLOX" },
    { id: 33, word: "SALMON" },
    { id: 34, word: "MARCUS" },
    { id: 35, word: "ZARA" },
    { id: 36, word: "BENTLEY" },
    { id: 37, word: "AARON" },
    { id: 38, word: "MARGIE" },
    { id: 39, word: "JAX" },
    { id: 40, word: "JACK" },
    { id: 41, word: "SENZ" },
    { id: 42, word: "GILL" },
    { id: 43, word: "HAY" },
    { id: 44, word: "HORSE" },
    { id: 45, word: "LARP" },
    { id: 46, word: "HOLLY" },
    { id: 47, word: "PIGEON" },
    { id: 48, word: "DEER" },
    { id: 49, word: "GORLOD" },
    { id: 50, word: "BOLTBOT" },
    { id: 51, word: "NOTSOBOT" },
    { id: 52, word: "KELPIE" },
    { id: 53, word: "BILLY" },
    { id: 54, word: "SIXSEVEN" },
    
];

const screenshotPool = [
    { id: 1, image: "images/itsdamo.png", author: "Damien" },
    { id: 2, image: "images/jpeg1.png", author: "Gurshaan" },
    { id: 3, image: "images/matthew.png", author: "Matthew" },
    { id: 4, image: "images/chuddy.png", author: "Chuddy" },
    { id: 5, image: "images/harrison.png", author: "Harrison" },
    { id: 6, image: "images/bogo.png", author: "Bogo" },
    { id: 7, image: "images/doorless.png", author: "Gurshaan" },
    { id: 8, image: "images/callum.gif", author: "Callum" },
    { id: 9, image: "images/crack.png", author: "Callum" },
];


const MAX_GUESSES = 6;
let currentMode = 'daily-quote'; 
let currentAnswer = ""; 
let currentClueData = null; 
let currentWordleGuess = "";
let playedQuotes = [];
let playedScreenshots = [];
let playedWordles = [];
let recentScreenshots = [];

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

function triggerDailyCelebration(modeName, attempts) {
    const overlay = document.createElement('div');
    overlay.className = 'celebration-overlay'; // Let CSS handle the styles

    const textContainer = document.createElement('div');
    textContainer.className = 'celebration-text';
    textContainer.innerHTML = `${modeName} IN <span>${attempts}</span>!`;
    
    overlay.appendChild(textContainer);
    document.body.appendChild(overlay);

    // The CSS animation lasts 2 seconds, so we safely destroy the element right after it finishes
    setTimeout(() => {
        overlay.remove();
    }, 2000);
}

function initGame() {
    document.getElementById('result-modal').style.display = 'none';
    document.getElementById('guess-form').style.display = 'flex';
    document.getElementById('guess-input').value = '';
    document.getElementById('guess-input').disabled = false;
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('keyboard').style.display = 'none';

    const oldInfBtn = document.getElementById('modal-infinite-wordle-btn');
    if (oldInfBtn) oldInfBtn.remove();

    const quoteDisplay = document.getElementById('quote-display');
    quoteDisplay.style.display = 'none';
    quoteDisplay.classList.remove('system-message', 'wordle-mode-header');
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
        quoteDisplay.innerText = "WORDLE";
        quoteDisplay.classList.add('wordle-mode-header');
        quoteDisplay.style.display = 'block';
        document.getElementById('guess-form').style.display = 'none';
        document.getElementById('keyboard').style.display = 'flex';
        loadSavedState(`insidle_daily_wordle_${dateKey}`);
        setupKeyboard();

    } else if (currentMode === 'infinite-wordle') {
        const availableWordles = wordlePool.filter(w => !playedWordles.includes(w.id));
        if (availableWordles.length === 0) {
            handleExhaustion();
            return;
        }
        currentClueData = availableWordles[Math.floor(Math.random() * availableWordles.length)];
        currentAnswer = currentClueData.word.toUpperCase();
        quoteDisplay.innerText = "WORDLE";
        quoteDisplay.classList.add('wordle-mode-header');
        quoteDisplay.style.display = 'block';
        document.getElementById('guess-form').style.display = 'none';
        document.getElementById('keyboard').style.display = 'flex';
        document.getElementById('next-btn').style.display = 'block';
        resetState();
        setupKeyboard();

    } else if (currentMode === 'screenshot') {
        const availableScreenshots = screenshotPool.filter(s => !playedScreenshots.includes(s.id));
        if (availableScreenshots.length === 0) {
            handleExhaustion();
            return;
        }
        
        let freshScreenshots = availableScreenshots.filter(s => !recentScreenshots.includes(s.id));
        if (freshScreenshots.length === 0) {
            freshScreenshots = availableScreenshots;
        }
        
        currentClueData = freshScreenshots[Math.floor(Math.random() * freshScreenshots.length)];
        currentAnswer = currentClueData.author;
        
        recentScreenshots.push(currentClueData.id);
        if (recentScreenshots.length > 3) {
            recentScreenshots.shift();
        }

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
    
    const columnsCount = (currentMode === 'wordle' || currentMode === 'infinite-wordle') ? currentAnswer.length : 1;

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
    
    const formats = ['daily-quote', 'infinite-quote', 'wordle', 'infinite-wordle', 'screenshot'];
    formats.forEach(f => {
        const btn = document.getElementById(`mode-${f}`);
        if (btn) btn.classList.toggle('active', f === mode);
    });
    
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
        if (currentMode === 'daily-quote' && (gameState.guesses.length === 1 || gameState.guesses.length === 2)) {
            triggerDailyCelebration('QUOTE', gameState.guesses.length);
        }
    } else if (gameState.guesses.length >= MAX_GUESSES) {
        gameState.gameOver = true;
    }

    if (currentMode !== 'infinite-quote' && currentMode !== 'infinite-wordle' && currentMode !== 'screenshot') {
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
        if (currentMode === 'wordle' && (gameState.guesses.length === 1 || gameState.guesses.length === 2)) {
            triggerDailyCelebration('WORDLE', gameState.guesses.length);
        }
    } else if (gameState.guesses.length >= MAX_GUESSES) {
        gameState.gameOver = true;
    }
    
    currentWordleGuess = "";
    
    if (currentMode === 'wordle') {
        const today = new Date();
        const dateKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        localStorage.setItem(`insidle_daily_wordle_${dateKey}`, JSON.stringify(gameState));
    }
    
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
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
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
        
        if (currentMode === 'wordle' || currentMode === 'infinite-wordle') {
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

    if (currentMode === 'wordle') {
        const modalContent = meta.parentNode;
        if (modalContent && !document.getElementById('modal-infinite-wordle-btn')) {
            const infBtn = document.createElement('button');
            infBtn.id = 'modal-infinite-wordle-btn';
            infBtn.innerText = "Play Infinite Wordle";
            infBtn.style.marginTop = "18px";
            infBtn.style.padding = "10px 20px";
            infBtn.style.backgroundColor = "#2ed573";
            infBtn.style.color = "#ffffff";
            infBtn.style.border = "none";
            infBtn.style.borderRadius = "5px";
            infBtn.style.cursor = "pointer";
            infBtn.style.fontFamily = "'Inter', sans-serif";
            infBtn.style.fontWeight = "bold";
            infBtn.onclick = () => {
                setMode('infinite-wordle');
            };
            modalContent.appendChild(infBtn);
        }
    }
}

function handleNextRound() {
    if (currentMode === 'infinite-quote' && currentClueData) {
        if (!playedQuotes.includes(currentClueData.id)) {
            playedQuotes.push(currentClueData.id);
        }
    } else if (currentMode === 'infinite-wordle' && currentClueData) {
        if (!playedWordles.includes(currentClueData.id)) {
            playedWordles.push(currentClueData.id);
        }
    } else if (currentMode === 'screenshot' && currentClueData) {
        if (!playedScreenshots.includes(currentClueData.id)) {
            playedScreenshots.push(currentClueData.id);
        }
    }

    if (currentMode === 'infinite-quote' || currentMode === 'infinite-wordle' || currentMode === 'screenshot') {
        initGame();
    }
}

function shareResult() {
    let shareText = `Insidle - Mode: ${currentMode.toUpperCase()}\n`;
    
    for (let i = 0; i < gameState.guesses.length; i++) {
        const guess = gameState.guesses[i];
        if (currentMode === 'wordle' || currentMode === 'infinite-wordle') {
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
    if ((currentMode !== 'wordle' && currentMode !== 'infinite-wordle') || gameState.gameOver) return;
    handleWordleInput(e.key);
});

const customStyles = document.createElement('style');
customStyles.innerHTML = `
    .wordle-mode-header {
        font-family: 'Inter', sans-serif !important;
        font-style: normal !important;
        font-size: 1.7rem !important;
        font-weight: 800 !important;
        text-transform: uppercase;
        letter-spacing: 3px;
        text-align: center;
        background: none !important;
        border: none !important;
        box-shadow: none !important;
        padding: 10px 0 !important;
        margin: 5px 0 15px 0 !important;
    }
    .wordle-mode-header::before,
    .wordle-mode-header::after {
        display: none !important;
    }

    .celebration-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99999;
        /* Runs the keyframe loop below over 2 seconds */
        animation: celebrationAnim 2s ease-in-out forwards; 
    }

    .celebration-text {
        color: #ffffff;
        font-family: 'Inter', sans-serif;
        font-size: 2.8rem;
        font-weight: 900;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .celebration-text span {
        color: #2ed573; 
    }

    @keyframes celebrationAnim {
        0% {
            opacity: 0;
            transform: scale(0.75);
        }
        10% {
            opacity: 1;
            transform: scale(1); 
        }
        85% {
            opacity: 1;
            transform: scale(1); 
        }
        100% {
            opacity: 0;
            transform: scale(0.85); 
        }
    }
`;
document.head.appendChild(customStyles);

window.onload = initGame;