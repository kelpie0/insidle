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
    { id: 25, quote: "bogovirus bogovirus bogovirus bogovirus bogovirus bogovirus ", author: "bogo" },
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

// --- SLOTDLE PRIZE REGISTRY MATRIX ---
const slotsPool = [
    { name: "Luke's Check", rarity: "common", color: "#a4b0be", value: 15 },
    { name: "Linux Penguin", rarity: "uncommon", color: "#2ed573", value: 40 },
    { name: "Cabinet (60x165cm)", rarity: "rare", color: "#1e90ff", value: 120 },
    { name: "Peanut Butter Jar", rarity: "epic", color: "#9b59b6", value: 350 },
    { name: "Golden Bogo Token", rarity: "legendary", color: "#ffa502", value: 1000 }
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

// Slotdle State Persistence
let slotCurrency = parseInt(localStorage.getItem('insidle_slot_cash') || '0', 10);
let slotInventory = JSON.parse(localStorage.getItem('insidle_slot_inv') || '[]');
let isSlotSpinning = false;

let gameState = {
    guesses: [],
    gameOver: false,
    won: false
};

// --- KINETIC PHYSICS ENGINE MATRIX ---
let bogoPhysicsObjects = [];
let physicsLoopActive = false;

function spawnPhysicsBogo() {
    const img = document.createElement('img');
    img.src = 'images/bogo.png';
    img.className = 'bogo-physics-sprite';
    img.style.position = 'fixed';
    img.style.width = '85px';
    img.style.height = '85px';
    img.style.cursor = 'grab';
    img.style.zIndex = '100001';
    
    const startX = window.innerWidth / 2 - 42;
    const startY = 80;
    img.style.left = `${startX}px`;
    img.style.top = `${startY}px`;
    
    document.body.appendChild(img);
    
    const bogoObj = {
        element: img,
        x: startX,
        y: startY,
        vx: (Math.random() - 0.5) * 14,
        vy: 2,
        width: 85,
        height: 85,
        isDragging: false,
        dragOffsetX: 0,
        dragOffsetY: 0,
        lastX: startX,
        lastY: startY
    };
    
    img.addEventListener('mousedown', (e) => {
        e.preventDefault();
        bogoObj.isDragging = true;
        img.style.cursor = 'grabbing';
        bogoObj.dragOffsetX = e.clientX - bogoObj.x;
        bogoObj.dragOffsetY = e.clientY - bogoObj.y;
        bogoObj.vx = 0;
        bogoObj.vy = 0;
    });

    img.addEventListener('touchstart', (e) => {
        bogoObj.isDragging = true;
        const touch = e.touches[0];
        bogoObj.dragOffsetX = touch.clientX - bogoObj.x;
        bogoObj.dragOffsetY = touch.clientY - bogoObj.y;
        bogoObj.vx = 0;
        bogoObj.vy = 0;
    }, { passive: true });
    
    bogoPhysicsObjects.push(bogoObj);
    
    if (!physicsLoopActive) {
        physicsLoopActive = true;
        requestAnimationFrame(physicsLoop);
    }
}

window.addEventListener('mousemove', (e) => {
    bogoPhysicsObjects.forEach(bogo => {
        if (bogo.isDragging) {
            bogo.x = e.clientX - bogo.dragOffsetX;
            bogo.y = e.clientY - bogo.dragOffsetY;
            bogo.vx = bogo.x - bogo.lastX;
            bogo.vy = bogo.y - bogo.lastY;
        }
    });
});

window.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    bogoPhysicsObjects.forEach(bogo => {
        if (bogo.isDragging) {
            bogo.x = touch.clientX - bogo.dragOffsetX;
            bogo.y = touch.clientY - bogo.dragOffsetY;
            bogo.vx = bogo.x - bogo.lastX;
            bogo.vy = bogo.y - bogo.lastY;
        }
    });
}, { passive: true });

window.addEventListener('mouseup', () => {
    bogoPhysicsObjects.forEach(bogo => {
        if (bogo.isDragging) {
            bogo.isDragging = false;
            bogo.element.style.cursor = 'grab';
        }
    });
});

window.addEventListener('touchend', () => {
    bogoPhysicsObjects.forEach(bogo => {
        if (bogo.isDragging) {
            bogo.isDragging = false;
        }
    });
});

function physicsLoop() {
    const gravity = 0.6;
    const bounce = -0.72; 
    const friction = 0.99; 
    
    bogoPhysicsObjects.forEach(bogo => {
        const maxX = window.innerWidth - bogo.width;
        const maxY = window.innerHeight - bogo.height;
        
        if (bogo.isDragging) {
            bogo.lastX = bogo.x;
            bogo.lastY = bogo.y;
            bogo.element.style.left = `${bogo.x}px`;
            bogo.element.style.top = `${bogo.y}px`;
        } else {
            bogo.vy += gravity;
            bogo.x += bogo.vx;
            bogo.y += bogo.vy;
            
            bogo.vx *= friction;
            bogo.vy *= friction;
            
            if (bogo.y >= maxY) {
                bogo.y = maxY;
                bogo.vy *= bounce;
                bogo.vx *= 0.88; 
            }
            if (bogo.y <= 0) {
                bogo.y = 0;
                bogo.vy *= bounce;
            }
            if (bogo.x >= maxX) {
                bogo.x = maxX;
                bogo.vx *= bounce;
            }
            if (bogo.x <= 0) {
                bogo.x = 0;
                bogo.vx *= bounce;
            }
            
            bogo.element.style.left = `${bogo.x}px`;
            bogo.element.style.top = `${bogo.y}px`;
            
            bogo.lastX = bogo.x;
            bogo.lastY = bogo.y;
        }
    });
    
    requestAnimationFrame(physicsLoop);
}

// --- SYNTHETIC AUDIO CONFIGURATION ENGINE ---
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playTypeSound() {
    initAudio();
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(550 + Math.random() * 150, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.04);
}

function playClickSound() {
    initAudio();
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(850, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.03);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.03);
}

function playFailSound() {
    initAudio();
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(170, audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(110, audioCtx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.22);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.22);
}

function playWinSound() {
    initAudio();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    const notes = [293.66, 349.23, 440.00, 587.33];
    notes.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + index * 0.07);
        gain.gain.setValueAtTime(0.12, now + index * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.07 + 0.35);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + index * 0.07);
        osc.stop(now + index * 0.07 + 0.35);
    });
}

function playMeowSound() {
    initAudio();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(380, now);
    osc.frequency.exponentialRampToValueAtTime(820, now + 0.12);
    osc.frequency.linearRampToValueAtTime(680, now + 0.42);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.15, now + 0.08);
    gain.gain.linearRampToValueAtTime(0.10, now + 0.28);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.45);
}

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
    const skipOverlays = ['DAMIEN', 'MRS. KNIBBS', 'RILEY', 'CALLUM', 'BOGO', 'MARKIPLIER', '3FS'];
    if (skipOverlays.includes(currentAnswer.toUpperCase())) return;
    
    const overlay = document.createElement('div');
    overlay.className = 'celebration-overlay';
    const textContainer = document.createElement('div');
    textContainer.className = 'celebration-text';
    textContainer.innerHTML = `${modeName} IN <span>${attempts}</span>!`;
    overlay.appendChild(textContainer);
    document.body.appendChild(overlay);
    setTimeout(() => { overlay.remove(); }, 2000);
}

// --- EXTENDED EASTER EGG MATRIX ---
function handleGameWinEasterEggs() {
    const answerClean = currentAnswer.toUpperCase();
    if (answerClean === 'CALLUM') playMeowSound();
    else playWinSound();

    if (answerClean === 'GURSHAAN') {
        const titleElement = document.querySelector('h1') || document.querySelector('.header h1') || document.getElementById('logo');
        if (titleElement) {
            const originalContent = titleElement.innerHTML;
            titleElement.innerHTML = `<span class="gurshaan-egg-c">C</span>`;
            setTimeout(() => { titleElement.innerHTML = originalContent; }, 2200);
        }
    }

    if (answerClean === 'DAMIEN') {
        const overlay = document.createElement('div');
        overlay.className = 'celebration-overlay damien-egg-overlay';
        const textContainer = document.createElement('div');
        textContainer.className = 'damien-egg-text';
        const phrase = "UMAZING!";
        for (let i = 0; i < phrase.length; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.innerText = phrase[i];
            letterSpan.className = 'damien-egg-letter';
            letterSpan.style.animationDelay = `${i * 0.08}s`;
            textContainer.appendChild(letterSpan);
        }
        overlay.appendChild(textContainer);
        document.body.appendChild(overlay);
        setTimeout(() => { overlay.remove(); }, 3200);
    }

    if (answerClean === 'CALLUM') {
        const overlay = document.createElement('div');
        overlay.className = 'celebration-overlay callum-egg-overlay';
        const gifImg = document.createElement('img');
        gifImg.src = 'images/callumeasteregg.gif';
        gifImg.className = 'callum-egg-gif';
        overlay.appendChild(gifImg);
        document.body.appendChild(overlay);
        setTimeout(() => { overlay.remove(); }, 2000);
    }

    if (answerClean === 'MRS. KNIBBS') {
        const overlay = document.createElement('div');
        overlay.className = 'celebration-overlay knibbs-egg-overlay';
        const textContainer = document.createElement('div');
        textContainer.className = 'knibbs-egg-text';
        const phrase = "⚠️ LARP ALERT ⚠️";
        for (let i = 0; i < phrase.length; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.innerText = phrase[i] === ' ' ? '\u00A0' : phrase[i];
            letterSpan.className = 'knibbs-egg-letter';
            letterSpan.style.animationDelay = `${i * 0.06}s`;
            textContainer.appendChild(letterSpan);
        }
        overlay.appendChild(textContainer);
        document.body.appendChild(overlay);
        setTimeout(() => { overlay.remove(); }, 3200);
    }

    if (answerClean === 'RILEY') {
        const overlay = document.createElement('div');
        overlay.className = 'celebration-overlay riley-egg-overlay';
        const textContainer = document.createElement('div');
        textContainer.className = 'riley-egg-text';
        const digits = ['6', '7'];
        digits.forEach((digit, i) => {
            const digitSpan = document.createElement('span');
            digitSpan.innerText = digit;
            digitSpan.className = `riley-egg-digit digit-${digit}`;
            digitSpan.style.animationDelay = `${i * 0.3}s`;
            textContainer.appendChild(digitSpan);
        });
        overlay.appendChild(textContainer);
        document.body.appendChild(overlay);
        setTimeout(() => { overlay.remove(); }, 3000);
    }

    if (answerClean === 'BOGO') {
        const targetRowIndex = gameState.guesses.length - 1;
        const winRow = document.getElementById(`row-${targetRowIndex}`);
        if (winRow) {
            const bogoSprite = document.createElement('img');
            bogoSprite.src = 'images/bogo.png';
            bogoSprite.className = 'bogo-egg-sprite';
            document.body.appendChild(bogoSprite);
            winRow.classList.add('bogo-row-dragged');
            setTimeout(() => {
                winRow.classList.remove('bogo-row-dragged');
                bogoSprite.remove();
            }, 2500);
        }
    }

    if (answerClean === 'MARKIPLIER') {
        const markImg = document.createElement('img');
        markImg.src = 'images/markiplier.gif';
        markImg.className = 'markiplier-egg-gif';
        document.body.appendChild(markImg);
        setTimeout(() => { markImg.remove(); }, 3000);
    }

    if (answerClean === '3FS') {
        const tfsImg = document.createElement('img');
        tfsImg.src = 'images/3fs.gif';
        tfsImg.className = 'tfs-egg-gif';
        document.body.appendChild(tfsImg);
        setTimeout(() => { tfsImg.remove(); }, 3000);
    }

    if (currentClueData && (currentClueData.id === 24 || currentClueData.id === 25)) {
        spawnPhysicsBogo();
    }
}

// --- CORE UI SETUP ENGINE ---
function setupTopRightMenu() {
    if (document.getElementById('sleek-menu-wrapper')) return;

    // Suppress legacy mode buttons if present in DOM layout
    const oldContainer = document.getElementById('mode-selector') || document.querySelector('.mode-buttons');
    if (oldContainer) oldContainer.style.display = 'none';

    const menuWrapper = document.createElement('div');
    menuWrapper.id = 'sleek-menu-wrapper';

    const menuBtn = document.createElement('button');
    menuBtn.id = 'sleek-menu-toggle';
    menuBtn.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    `;

    const menuDropdown = document.createElement('div');
    menuDropdown.id = 'sleek-menu-dropdown';

    const configurations = [
        { id: 'daily-quote', label: 'Daily Quote' },
        { id: 'infinite-quote', label: 'Infinite Quote' },
        { id: 'wordle', label: 'Wordle' },
        { id: 'infinite-wordle', label: 'Infinite Wordle' },
        { id: 'screenshot', label: 'Screenshot' },
        { id: 'slotdle', label: 'Slotdle Machine' }
    ];

    configurations.forEach(config => {
        const opt = document.createElement('div');
        opt.className = 'menu-item';
        if (config.id === currentMode) opt.classList.add('active');
        opt.innerText = config.label;
        opt.addEventListener('click', () => {
            setMode(config.id);
            menuDropdown.classList.remove('open');
        });
        menuDropdown.appendChild(opt);
    });

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        menuDropdown.classList.toggle('open');
    });

    document.addEventListener('click', () => {
        menuDropdown.classList.remove('open');
    });

    menuWrapper.appendChild(menuBtn);
    menuWrapper.appendChild(menuDropdown);
    document.body.appendChild(menuWrapper);
}

function setupSlotdleDOM() {
    if (document.getElementById('slotdle-view-container')) return;

    const slotContainer = document.createElement('div');
    slotContainer.id = 'slotdle-view-container';
    slotContainer.style.display = 'none';

    slotContainer.innerHTML = `
        <div id="slotdle-header-block">
            <div id="slotdle-title-label">SLOTDLE</div>
            <div id="slotdle-cash-counter">$0</div>
        </div>
        
        <div id="slotdle-machine-wrapper">
            <div id="slotdle-viewport">
                <div id="slotdle-horizontal-bar"></div>
                <div id="slotdle-reel-strip"></div>
            </div>
            <button id="slotdle-spin-trigger">SPIN</button>
        </div>

        <div id="slotdle-inventory-title">INVENTORY</div>
        <div id="slotdle-inventory-grid"></div>
    `;

    const grid = document.getElementById('guess-grid');
    if (grid && grid.parentNode) {
        grid.parentNode.insertBefore(slotContainer, grid);
    } else {
        document.body.appendChild(slotContainer);
    }

    document.getElementById('slotdle-spin-trigger').addEventListener('click', runSlotdleSpinEngine);
}

function syncMenuUISelection() {
    const items = document.querySelectorAll('.menu-item');
    const configurations = ['daily-quote', 'infinite-quote', 'wordle', 'infinite-wordle', 'screenshot', 'slotdle'];
    items.forEach((item, index) => {
        if (configurations[index]) {
            item.classList.toggle('active', configurations[index] === currentMode);
        }
    });
}

function initGame() {
    setupTopRightMenu();
    setupSlotdleDOM();
    syncMenuUISelection();

    document.getElementById('result-modal').style.display = 'none';
    document.getElementById('guess-form').style.display = 'flex';
    document.getElementById('guess-input').value = '';
    document.getElementById('guess-input').disabled = false;
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('keyboard').style.display = 'none';
    document.getElementById('slotdle-view-container').style.display = 'none';
    document.getElementById('guess-grid').style.display = 'flex';

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
        let availableQuotes = quotesPool.filter(q => !playedQuotes.includes(q.id));
        // FIX: Instead of running out, recycle pool instantly
        if (availableQuotes.length === 0) {
            playedQuotes = [];
            availableQuotes = quotesPool;
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
        let availableWordles = wordlePool.filter(w => !playedWordles.includes(w.id));
        if (availableWordles.length === 0) {
            playedWordles = [];
            availableWordles = wordlePool;
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
        let availableScreenshots = screenshotPool.filter(s => !playedScreenshots.includes(s.id));
        if (availableScreenshots.length === 0) {
            playedScreenshots = [];
            availableScreenshots = screenshotPool;
        }
        let freshScreenshots = availableScreenshots.filter(s => !recentScreenshots.includes(s.id));
        if (freshScreenshots.length === 0) {
            freshScreenshots = availableScreenshots;
        }
        currentClueData = freshScreenshots[Math.floor(Math.random() * freshScreenshots.length)];
        currentAnswer = currentClueData.author;
        recentScreenshots.push(currentClueData.id);
        if (recentScreenshots.length > 3) recentScreenshots.shift();

        document.getElementById('image-display').src = currentClueData.image;
        document.getElementById('image-display').style.display = 'block';
        document.getElementById('next-btn').style.display = 'block';
        resetState();

    } else if (currentMode === 'slotdle') {
        document.getElementById('guess-grid').style.display = 'none';
        document.getElementById('guess-form').style.display = 'none';
        document.getElementById('slotdle-view-container').style.display = 'block';
        renderSlotdleInventoryView();
        document.getElementById('slotdle-cash-counter').innerText = `$${slotCurrency}`;
        buildSlotdleReelItems(slotsPool[0]); // Initial safe placeholder node
    }

    if (currentMode !== 'slotdle') {
        setupGrid();
        updateGridDisplay();
        if (gameState.gameOver) endGame();
    }
}

// --- SLOTDLE SYSTEM CORE LOGIC ---
function buildSlotdleReelItems(targetWinner) {
    const strip = document.getElementById('slotdle-reel-strip');
    strip.innerHTML = '';
    
    // Generate a long linear row list array to scroll through (45 items total)
    for (let i = 0; i < 42; i++) {
        const placeholder = slotsPool[Math.floor(Math.random() * slotsPool.length)];
        const node = createReelNode(placeholder);
        strip.appendChild(node);
    }
    
    // Exact targeted terminal node sequence
    const winningNode = createReelNode(targetWinner);
    strip.appendChild(winningNode);

    // Padding safety nodes past target boundary
    strip.appendChild(createReelNode(slotsPool[1 % slotsPool.length]));
    strip.appendChild(createReelNode(slotsPool[2 % slotsPool.length]));
}

function createReelNode(itemData) {
    const node = document.createElement('div');
    node.className = 'slot-reel-cell';
    node.innerText = itemData.name;
    node.style.color = itemData.color;
    node.style.borderLeft = `5px solid ${itemData.color}`;
    return node;
}

function runSlotdleSpinEngine() {
    if (isSlotSpinning) return;
    isSlotSpinning = true;

    const triggerBtn = document.getElementById('slotdle-spin-trigger');
    const viewport = document.getElementById('slotdle-viewport');
    const strip = document.getElementById('slotdle-reel-strip');
    
    triggerBtn.disabled = true;
    viewport.className = ""; // Wipe former glowing profiles
    
    // Choose winning object by rolling weights or uniform distributions
    const wonItem = slotsPool[Math.floor(Math.random() * slotsPool.length)];
    buildSlotdleReelItems(wonItem);
    
    // Absolute CSS Position resets
    strip.style.transition = 'none';
    strip.style.transform = 'translateY(0px)';
    
    // Force DOM Reflow to re-trigger transition matrices
    strip.offsetHeight;
    
    // 42 cells * 70px height = 2940px total scrolling travel offset distance
    strip.style.transition = 'transform 3.8s cubic-bezier(0.12, 0.88, 0.33, 1)';
    strip.style.transform = 'translateY(-2940px)';

    // Play ticking simulation sequence natively
    let tickCount = 0;
    const tickerInterval = setInterval(() => {
        if (tickCount < 30) playTypeSound();
        tickCount++;
    }, 110);

    setTimeout(() => {
        clearInterval(tickerInterval);
        playWinSound();
        
        // Inject Glow Matrix profile
        viewport.className = `glow-${wonItem.rarity}`;
        
        // Update Local Registry Data Sets
        slotCurrency += wonItem.value;
        localStorage.setItem('insidle_slot_cash', slotCurrency);
        document.getElementById('slotdle-cash-counter').innerText = `$${slotCurrency}`;
        
        // Inventory update and append tracking matrix
        slotInventory.unshift({ ...wonItem, timestamp: Date.now() });
        localStorage.setItem('insidle_slot_inv', JSON.stringify(slotInventory));
        
        renderSlotdleInventoryView();
        
        isSlotSpinning = false;
        triggerBtn.disabled = false;
    }, 3850);
}

function renderSlotdleInventoryView() {
    const grid = document.getElementById('slotdle-inventory-grid');
    grid.innerHTML = '';
    
    slotInventory.forEach(item => {
        const box = document.createElement('div');
        box.className = 'inventory-card';
        box.style.borderColor = item.color;
        box.innerHTML = `
            <div class="inv-name">${item.name}</div>
            <div class="inv-rarity" style="color: ${item.color}">${item.rarity.toUpperCase()}</div>
            <div class="inv-value">+$${item.value}</div>
        `;
        grid.appendChild(box);
    });
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
    if (saved) gameState = JSON.parse(saved);
    else resetState();
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
        handleGameWinEasterEggs();
        if (currentMode === 'daily-quote' && (gameState.guesses.length === 1 || gameState.guesses.length === 2)) {
            triggerDailyCelebration('QUOTE', gameState.guesses.length);
        }
    } else {
        playFailSound();
        if (gameState.guesses.length >= MAX_GUESSES) gameState.gameOver = true;
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
    } else if (key === 'BACKSPACE' || key === 'Backspace' || key === '⌫') {
        currentWordleGuess = currentWordleGuess.slice(0, -1);
        playTypeSound();
        updateGridDisplay();
    } else if (/^[a-zA-Z]$/.test(key)) {
        if (currentWordleGuess.length < currentAnswer.length) {
            currentWordleGuess += key.toUpperCase();
            playTypeSound();
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
        handleGameWinEasterEggs();
        if (currentMode === 'wordle' && (gameState.guesses.length === 1 || gameState.guesses.length === 2)) {
            triggerDailyCelebration('WORDLE', gameState.guesses.length);
        }
    } else {
        playFailSound();
        if (gameState.guesses.length >= MAX_GUESSES) gameState.gameOver = true;
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
            if (key === 'ENTER' || key === 'BACKSPACE' || key === '⌫') keyElement.classList.add('wide');
            keyElement.addEventListener('click', () => { handleWordleInput(key); });
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
            if (currentAnswer[j] === char) statuses[char] = 'correct';
            else if (currentAnswer.includes(char)) {
                if (statuses[char] !== 'correct') statuses[char] = 'close';
            } else {
                if (!statuses[char]) statuses[char] = 'incorrect';
            }
        }
    }
    
    const isMasonTheme = currentAnswer.toUpperCase() === 'MASON';
    const keys = document.querySelectorAll('.key');
    keys.forEach(keyElement => {
        const keyText = keyElement.getAttribute('data-key');
        if (keyText && statuses[keyText]) {
            let statusClass = statuses[keyText];
            if (isMasonTheme && statusClass === 'correct') statusClass = 'correct mason-mode';
            keyElement.className = `key ${statusClass}`;
            if (keyText === 'ENTER' || keyText === 'BACKSPACE' || keyText === '⌫') keyElement.classList.add('wide');
        } else if (keyText) {
            keyElement.className = 'key';
            if (keyText === 'ENTER' || keyText === 'BACKSPACE' || keyText === '0') keyElement.classList.add('wide');
        }
    });
}

function updateGridDisplay() {
    const isMasonTheme = currentAnswer.toUpperCase() === 'MASON';
    for (let i = 0; i < MAX_GUESSES; i++) {
        const currentGuessStr = gameState.guesses[i];
        
        if (currentMode === 'wordle' || currentMode === 'infinite-wordle') {
            let targetLetterCounts = {};
            for (let char of currentAnswer) targetLetterCounts[char] = (targetLetterCounts[char] || 0) + 1;
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
                    let targetStatus = tileStatuses[j];
                    if (isMasonTheme && targetStatus === 'correct') targetStatus = 'correct mason-mode';
                    tile.className = `tile ${targetStatus}`;
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
                let matchResult = checkCloseness(currentGuessStr, currentAnswer);
                if (isMasonTheme && matchResult === 'correct') matchResult = 'correct mason-mode';
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
            infBtn.onclick = () => { setMode('infinite-wordle'); };
            modalContent.appendChild(infBtn);
        }
    }
}

function handleNextRound() {
    if (currentMode === 'infinite-quote' && currentClueData) {
        if (!playedQuotes.includes(currentClueData.id)) playedQuotes.push(currentClueData.id);
    } else if (currentMode === 'infinite-wordle' && currentClueData) {
        if (!playedWordles.includes(currentClueData.id)) playedWordles.push(currentClueData.id);
    } else if (currentMode === 'screenshot' && currentClueData) {
        if (!playedScreenshots.includes(currentClueData.id)) playedScreenshots.push(currentClueData.id);
    }
    if (currentMode === 'infinite-quote' || currentMode === 'infinite-wordle' || currentMode === 'screenshot') {
        initGame();
    }
}

function shareResult() {
    let shareText = `Insidle - Mode: ${currentMode.toUpperCase()}\n`;
    const isMasonTheme = currentAnswer.toUpperCase() === 'MASON';
    const checkIcon = isMasonTheme ? '🟧' : '🟩';
    
    for (let i = 0; i < gameState.guesses.length; i++) {
        const guess = gameState.guesses[i];
        if (currentMode === 'wordle' || currentMode === 'infinite-wordle') {
            let targetLetterCounts = {};
            for (let char of currentAnswer) targetLetterCounts[char] = (targetLetterCounts[char] || 0) + 1;
            let rowIcons = Array(currentAnswer.length).fill('🟥');
            for (let j = 0; j < currentAnswer.length; j++) {
                if (guess[j] === currentAnswer[j]) { rowIcons[j] = checkIcon; targetLetterCounts[guess[j]]--; }
            }
            for (let j = 0; j < currentAnswer.length; j++) {
                if (rowIcons[j] !== '🟩' && rowIcons[j] !== '🟧' && targetLetterCounts[guess[j]] > 0) { rowIcons[j] = '🟨'; targetLetterCounts[guess[j]]--; }
            }
            shareText += rowIcons.join('') + '\n';
        } else {
            const status = checkCloseness(guess, currentAnswer);
            shareText += (status === 'correct') ? `${checkIcon}\n` : (status === 'close') ? '🟨\n' : '🟥\n';
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

// --- ENGINE STYLE SHEET REGISTRY ---
const customStyles = document.createElement('style');
customStyles.innerHTML = `
    /* SLEEK DROP-DOWN MENU STYLES */
    #sleek-menu-wrapper {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 200000;
        font-family: 'Inter', sans-serif;
    }
    #sleek-menu-toggle {
        width: 46px;
        height: 46px;
        background-color: #2f3542;
        border: 2px solid #57606f;
        border-radius: 14px;
        color: #ffffff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }
    #sleek-menu-toggle:hover {
        background-color: #57606f;
        transform: scale(1.05);
    }
    #sleek-menu-dropdown {
        position: absolute;
        top: 56px;
        right: 0;
        background-color: #1e222b;
        border: 1px solid #2f3542;
        border-radius: 14px;
        width: 210px;
        overflow: hidden;
        display: none;
        box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        transform-origin: top right;
    }
    #sleek-menu-dropdown.open {
        display: block;
        animation: menuGrownIn 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    @keyframes menuGrownIn {
        from { opacity: 0; transform: scale(0.92); }
        to { opacity: 1; transform: scale(1); }
    }
    .menu-item {
        padding: 12px 16px;
        color: #a4b0be;
        font-size: 0.95rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.15s ease;
        border-bottom: 1px solid #252a34;
    }
    .menu-item:last-child { border-bottom: none; }
    .menu-item:hover {
        background-color: #2f3542;
        color: #ffffff;
        padding-left: 20px;
    }
    .menu-item.active {
        background-color: #2ed573;
        color: #ffffff;
    }

    /* SLOTDLE ARCHITECTURE GRAPHICS STYLE SHEETS */
    #slotdle-view-container {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        font-family: 'Inter', sans-serif;
    }
    #slotdle-header-block {
        text-align: center;
        margin-bottom: 25px;
    }
    #slotdle-title-label {
        font-size: 2.2rem;
        font-weight: 900;
        letter-spacing: 5px;
        color: #ffa502;
        text-shadow: 0 0 15px rgba(255, 165, 2, 0.4);
    }
    #slotdle-cash-counter {
        font-size: 1.6rem;
        font-weight: 800;
        color: #2ed573;
        margin-top: 5px;
    }
    #slotdle-machine-wrapper {
        background: #1e222b;
        border: 4px solid #2f3542;
        border-radius: 20px;
        padding: 25px;
        box-shadow: inset 0 4px 20px rgba(0,0,0,0.6);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    #slotdle-viewport {
        position: relative;
        width: 100%;
        height: 70px;
        background: #0f1115;
        border-radius: 12px;
        overflow: hidden;
        border: 2px solid #252a34;
        transition: all 0.4s ease;
    }
    #slotdle-horizontal-bar {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        border-top: 33px solid rgba(0,0,0,0);
        border-bottom: 33px solid rgba(0,0,0,0);
        box-sizing: border-box;
        pointer-events: none;
        z-index: 10;
    }
    #slotdle-horizontal-bar::after {
        content: '';
        display: block;
        width: 100%;
        height: 4px;
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
    }
    #slotdle-reel-strip {
        display: flex;
        flex-direction: column;
        transform: translateY(0px);
    }
    .slot-reel-cell {
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        font-weight: 800;
        letter-spacing: 1px;
        background: #0f1115;
        box-sizing: border-box;
        text-transform: uppercase;
    }
    #slotdle-spin-trigger {
        width: 100%;
        padding: 15px;
        background: #ff4757;
        border: none;
        border-radius: 12px;
        color: #ffffff;
        font-size: 1.2rem;
        font-weight: 900;
        letter-spacing: 2px;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 5px 15px rgba(255, 71, 87, 0.4);
    }
    #slotdle-spin-trigger:hover:not(:disabled) {
        background: #ff6b81;
        transform: translateY(-2px);
    }
    #slotdle-spin-trigger:disabled {
        background: #57606f;
        box-shadow: none;
        cursor: not-allowed;
    }
    
    /* RARITY NEON ILLUMINATION GLOW MATRICES */
    .glow-common { border-color: #a4b0be !important; box-shadow: 0 0 20px rgba(164, 176, 190, 0.6); }
    .glow-uncommon { border-color: #2ed573 !important; box-shadow: 0 0 20px rgba(46, 213, 115, 0.6); }
    .glow-rare { border-color: #1e90ff !important; box-shadow: 0 0 20px rgba(30, 144, 255, 0.6); }
    .glow-epic { border-color: #9b59b6 !important; box-shadow: 0 0 20px rgba(155, 89, 182, 0.6); }
    .glow-legendary { border-color: #ffa502 !important; box-shadow: 0 0 20px rgba(255, 165, 2, 0.6); }

    /* INVENTORY SYSTEM TILES SHEETS WITH REFLOW LAYOUTS */
    #slotdle-inventory-title {
        margin-top: 35px;
        font-size: 1.1rem;
        font-weight: 800;
        letter-spacing: 2px;
        color: #747d8c;
        border-bottom: 2px solid #2f3542;
        padding-bottom: 8px;
        margin-bottom: 15px;
    }
    #slotdle-inventory-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        width: 100%;
        padding-bottom: 40px;
    }
    .inventory-card {
        flex: 0 0 calc(33.33% - 8px);
        background: #1e222b;
        border: 2px solid #2f3542;
        border-radius: 12px;
        padding: 12px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 6px;
        animation: invCardSpawn 0.45s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    @keyframes invCardSpawn {
        from { opacity: 0; transform: scale(0.6) translateX(-20px); }
        to { opacity: 1; transform: scale(1) translateX(0); }
    }
    .inv-name { font-size: 0.85rem; font-weight: 800; color: #ffffff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}
    .inv-rarity { font-size: 0.7rem; font-weight: 900; letter-spacing: 1px; }
    .inv-value { font-size: 0.85rem; font-weight: 700; color: #2ed573; }

    /* FORMER LEGACY ASSETS */
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
    .wordle-mode-header::before, .wordle-mode-header::after { display: none !important; }
    .celebration-overlay {
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background-color: rgba(0, 0, 0, 0.6); display: flex;
        justify-content: center; align-items: center; z-index: 99999;
        animation: celebrationAnim 2s ease-in-out forwards; 
    }
    .celebration-text { color: #ffffff; font-family: 'Inter', sans-serif; font-size: 2.8rem; font-weight: 900; text-align: center; text-transform: uppercase; letter-spacing: 2px; }
    .celebration-text span { color: #2ed573; }
    .tile.correct.mason-mode, .key.correct.mason-mode { background-color: #ff9f43 !important; border-color: #ff9f43 !important; color: #ffffff !important; }
    .gurshaan-egg-c { color: #00a8ff !important; display: inline-block; font-size: 3.5rem; font-weight: 900; transform-origin: bottom center; animation: gurshaanFluidBounce 2.0s cubic-bezier(0.28, 0.84, 0.42, 1) forwards; }
    @keyframes gurshaanFluidBounce { 0% { transform: scale(1, 1) translateY(0); } 10% { transform: scale(1.2, 0.8) translateY(0); } 25% { transform: scale(0.9, 1.15) translateY(-50px); } 40% { transform: scale(1.05, 0.9) translateY(0); } 55% { transform: scale(0.97, 1.02) translateY(-15px); } 70% { transform: scale(1.02, 0.98) translateY(0); } 85% { transform: scale(1, 1) translateY(-3px); } 100% { transform: scale(1, 1) translateY(0); } }
    .damien-egg-overlay { animation: celebrationAnim 3.2s ease-in-out forwards !important; }
    .damien-egg-text { display: flex; gap: 6px; justify-content: center; align-items: center; }
    .damien-egg-letter { display: inline-block; color: #9b59b6; font-family: 'Inter', sans-serif; font-size: 4rem; font-weight: 900; animation: damienWaveAnim 1.1s ease-in-out infinite; }
    @keyframes damienWaveAnim { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-35px); } }
    .callum-egg-overlay { animation: fadeInOut 2.0s ease-in-out forwards !important; }
    .callum-egg-gif { max-width: 80vw; max-height: 70vh; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.6); animation: scaleFluidInOut 2.0s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
    @keyframes fadeInOut { 0%, 100% { opacity: 0; } 15%, 85% { opacity: 1; } }
    @keyframes scaleFluidInOut { 0% { transform: scale(0.4); } 15%, 85% { transform: scale(1); } 100% { transform: scale(0.85); } }
    .knibbs-egg-overlay { animation: celebrationAnim 3.2s ease-in-out forwards !important; }
    .knibbs-egg-text { display: flex; gap: 4px; justify-content: center; align-items: center; }
    .knibbs-egg-letter { display: inline-block; color: #ff3838; font-family: 'Inter', sans-serif; font-size: 3.6rem; font-weight: 900; text-shadow: 0 0 12px #ff3838, 0 0 30px rgba(255, 56, 56, 0.7); animation: knibbsWaveAnim 1.2s ease-in-out infinite; }
    @keyframes knibbsWaveAnim { 0%, 100% { transform: translateY(0); filter: drop-shadow(0 0 2px red); } 50% { transform: translateY(-30px); filter: drop-shadow(0 0 8px red); } }
    .riley-egg-overlay { animation: celebrationAnim 3.0s ease-in-out forwards !important; }
    .riley-egg-text { display: flex; gap: 20px; }
    .riley-egg-digit { display: inline-block; font-size: 7rem; font-weight: 950; background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-size: 300% 300%; animation: rileyBounce 0.7s ease-in-out infinite alternate, rainbowSpectrum 4s linear infinite; }
    @keyframes rileyBounce { 0% { transform: translateY(0); } 100% { transform: translateY(-50px); } }
    @keyframes rainbowSpectrum { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
    .bogo-row-dragged { animation: bogoRowTimeline 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
    .bogo-egg-sprite { position: fixed; top: 50%; right: -200px; width: 140px; height: auto; transform: translateY(-50%); z-index: 100000; pointer-events: none; animation: bogoSpriteTimeline 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
    @keyframes bogoRowTimeline { 0% { transform: translateX(0); } 22% { transform: translateX(30px); } 38%, 68% { transform: translateX(-130vw); } 76% { transform: translateX(45px); } 86% { transform: translateX(-15px); } 100% { transform: translateX(0); } }
    @keyframes bogoSpriteTimeline { 0% { right: -200px; transform: translateY(-50%) scaleX(1); } 22% { right: 12%; transform: translateY(-50%) scaleX(1); } 38%, 68% { right: calc(12% + 130vw); transform: translateY(-50%) scaleX(1); } 69% { right: calc(12% + 130vw); transform: translateY(-50%) scaleX(-1); } 82% { right: -200px; transform: translateY(-50%) scaleX(-1); } 100% { right: -200px; } }
    .bogo-physics-sprite { user-select: none; -webkit-user-drag: none; touch-action: none; }
    .markiplier-egg-gif { position: fixed; top: 20px; left: 20px; max-width: 240px; height: auto; z-index: 100000; border-radius: 12px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); pointer-events: none; animation: markiplierTimeline 3.0s ease-in-out forwards; }
    @keyframes markiplierTimeline { 0% { opacity: 0; transform: scale(0.8) translateY(-10px); } 12% { opacity: 1; transform: scale(1) translateY(0); } 88% { opacity: 1; transform: scale(1) translateY(0); } 100% { opacity: 0; transform: scale(0.8) translateY(-10px); } }
    .tfs-egg-gif { position: fixed; bottom: 20px; left: 20px; max-width: 240px; height: auto; z-index: 100000; border-radius: 12px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); pointer-events: none; animation: tfsTimeline 3.0s ease-in-out forwards; }
    @keyframes tfsTimeline { 0% { opacity: 0; transform: scale(0.8) translateY(10px); } 12% { opacity: 1; transform: scale(1) translateY(0); } 88% { opacity: 1; transform: scale(1) translateY(0); } 100% { opacity: 0; transform: scale(0.8) translateY(10px); } }
    @keyframes celebrationAnim { 0% { opacity: 0; transform: scale(0.75); } 10% { opacity: 1; transform: scale(1); } 88% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(0.85); } }
`;
document.head.appendChild(customStyles);

function attachGlobalListeners() {
    const textInput = document.getElementById('guess-input');
    if (textInput) {
        textInput.addEventListener('input', () => { playTypeSound(); });
    }
    document.removeEventListener('click', handleGlobalUiClicks);
    document.addEventListener('click', handleGlobalUiClicks);
}

function handleGlobalUiClicks(e) {
    if (e.target.tagName === 'BUTTON' && !e.target.classList.contains('key') && e.target.id !== 'slotdle-spin-trigger') {
        playClickSound();
    }
}

window.onload = () => {
    initGame();
    attachGlobalListeners();
};