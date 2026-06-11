/**
 * TEG (Tests, Exercises & Games) Main Logic
 */

let currentLevel = 'A1';
let currentTab = 'word_formation';
let activeStudent = 'student1';
let timerInterval = null;
let timeLeft = 180; // 3 minutes in seconds
let isTimerActive = false;
let shuffledIndices = {}; // Stores shuffled order of questions

// Default student profiles
let students = {
    student1: { name: "Student 1", scores: {} },
    student2: { name: "Student 2", scores: {} }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadStudents();
    setLevel('A1');
});


// Load student profile data from localStorage
function loadStudents() {
    const saved = localStorage.getItem('teg_students');
    if (saved) {
        try {
            students = JSON.parse(saved);
        } catch (e) {
            console.error("Failed to parse saved students", e);
        }
    }
    updateStudentUI();
}

function saveStudents() {
    localStorage.setItem('teg_students', JSON.stringify(students));
}

function updateStudentUI() {
    document.getElementById('student1-btn').textContent = students.student1.name;
    document.getElementById('student2-btn').textContent = students.student2.name;
    
    document.getElementById('student1-btn').className = `student-slot ${activeStudent === 'student1' ? 'active' : ''}`;
    document.getElementById('student2-btn').className = `student-slot ${activeStudent === 'student2' ? 'active' : ''}`;
    
    document.getElementById('student-name-input').value = students[activeStudent].name;
    
    // Refresh level mini progress bars
    ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].forEach(lvl => {
        updateLevelProgress(lvl);
    });
}

function switchStudent(slot) {
    activeStudent = slot;
    updateStudentUI();
    loadActiveExercise();
}

function renameStudent(newName) {
    newName = newName.trim();
    if (newName) {
        students[activeStudent].name = newName;
        saveStudents();
        updateStudentUI();
    }
}

// Level navigation
function setLevel(level) {
    currentLevel = level;
    
    // Update level cards UI
    document.querySelectorAll('.level-card').forEach(card => {
        card.classList.remove('active');
    });
    const activeCard = document.getElementById(`level-card-${level.toLowerCase()}`);
    if (activeCard) {
        activeCard.classList.add('active');
    }
    
    // Get accent color for level
    const colors = { A1: '#22c55e', A2: '#3b82f6', B1: '#eab308', B2: '#f97316', C1: '#a855f7', C2: '#ef4444' };
    document.documentElement.style.setProperty('--level-color', colors[level]);
    
    // Reset timer
    stopTimer();
    
    // Load default tab
    setTab(currentTab);
}

function setTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeTabBtn = document.getElementById(`tab-btn-${tab}`);
    if (activeTabBtn) {
        activeTabBtn.classList.add('active');
    }
    
    // Auto-select first grammar topic if none is selected
    if (tab === 'grammar_topics' && typeof currentGrammarTopic === 'undefined') {
        currentGrammarTopic = 'comparatives';
    }
    
    loadActiveExercise();
}

let currentGrammarTopic = 'comparatives';

function setGrammarTopic(topic) {
    currentGrammarTopic = topic;
    
    // Update active state on sidebar buttons
    document.querySelectorAll('#grammar-sidebar-container .option-btn').forEach(btn => {
        btn.classList.remove('selected');
        btn.style.borderColor = 'var(--border-color)';
    });
    
    const activeBtn = document.getElementById(`gt-btn-${topic}`);
    if (activeBtn) {
        activeBtn.classList.add('selected');
        activeBtn.style.borderColor = 'var(--level-color, var(--accent-electric))';
    }
    
    loadActiveExercise();
}

// Get the current level data from global window variables loaded from data files
function getLevelData() {
    if (['A1', 'A2'].includes(currentLevel)) {
        return tegDataA1A2[currentLevel];
    } else if (['B1', 'B2'].includes(currentLevel)) {
        return tegDataB1B2[currentLevel];
    } else {
        return tegDataC1C2[currentLevel];
    }
}

// Load question layout
function loadActiveExercise() {
    let exercise;
    let key;
    const lexicalDropdown = document.getElementById('lexical-dropdown-container');
    const grammarSidebar = document.getElementById('grammar-sidebar-container');
    
    // Hide specialized containers by default
    if (lexicalDropdown) lexicalDropdown.style.display = 'none';
    if (grammarSidebar) grammarSidebar.style.display = 'none';
    
    if (currentTab === 'lexical_fields') {
        if (lexicalDropdown) lexicalDropdown.style.display = 'block';
        const field = document.getElementById('lexical-field-select') ? document.getElementById('lexical-field-select').value : 'programming';
        
        if (!tegLexicalData || !tegLexicalData[currentLevel] || !tegLexicalData[currentLevel][field]) {
            console.error("Lexical data not found for", currentLevel, field);
            return;
        }
        exercise = tegLexicalData[currentLevel][field];
        key = `${currentLevel}_lexical_fields_${field}`;
        
    } else if (currentTab === 'grammar_topics') {
        if (grammarSidebar) {
            grammarSidebar.style.display = 'flex';
            // Ensure the correct button is highlighted initially
            document.querySelectorAll('#grammar-sidebar-container .option-btn').forEach(btn => btn.classList.remove('selected'));
            const activeBtn = document.getElementById(`gt-btn-${currentGrammarTopic}`);
            if (activeBtn) activeBtn.classList.add('selected');
        }
        
        if (typeof tegGrammarData === 'undefined' || !tegGrammarData[currentLevel] || !tegGrammarData[currentLevel][currentGrammarTopic]) {
            console.error("Grammar data not found for", currentLevel, currentGrammarTopic);
            // Fallback empty exercise if data file isn't loaded yet
            exercise = { title: "Coming Soon", description: "This topic is currently being added.", items: [] };
        } else {
            exercise = tegGrammarData[currentLevel][currentGrammarTopic];
        }
        key = `${currentLevel}_grammar_topics_${currentGrammarTopic}`;
        
    } else {
        const levelData = getLevelData();
        if (!levelData || !levelData.exercises[currentTab]) {
            console.error("Data not found for", currentLevel, currentTab);
            return;
        }
        exercise = levelData.exercises[currentTab];
        key = `${currentLevel}_${currentTab}`;
    }
    
    
    
    // Header details
    document.getElementById('exercise-title').innerHTML = `${exercise.title} <button class="speaker-btn" onclick="speakPhrase('${exercise.title.replace(/'/g, "\\'")}')">🔊</button>`;
    document.getElementById('exercise-description').textContent = exercise.description;
    
    // Reset container
    const container = document.getElementById('exercise-container');
    container.innerHTML = '';
    
    // Initialize shuffled indices if not already present
    const itemsCount = exercise.items ? exercise.items.length : (exercise.pairs ? exercise.pairs.length : 0);
    
    if (!shuffledIndices[key] || shuffledIndices[key].length !== itemsCount) {
        resetIndices(key, itemsCount);
    }
    
    const indices = shuffledIndices[key];
    
    // Load student saved responses
    const studentSaved = students[activeStudent].scores[key] || {};
    
    // Render Grammar Theory box if present
    renderGrammarTheory(exercise, container);
    
    if (currentTab === 'vocab_matching') {
        renderVocabularyMatching(exercise, container, studentSaved, key);
    } else {
        renderStandardQuestions(exercise, container, studentSaved, indices, key);
    }
    
    // Update badge display for this level
    renderBadgeDisplay();
}

function resetIndices(key, count) {
    shuffledIndices[key] = Array.from({ length: count }, (_, i) => i);
}

// Render Grammar Theory tip box
function renderGrammarTheory(exercise, container) {
    // Remove any existing theory box first
    const old = container.querySelector('.grammar-theory-box');
    if (old) old.remove();
    
    if (!exercise.grammarTheory) return;
    
    const box = document.createElement('div');
    box.className = 'grammar-theory-box';
    
    box.innerHTML = `
        <div class="grammar-theory-header" onclick="this.parentElement.classList.toggle('open')">
            <span class="grammar-theory-icon">📖</span>
            <span class="grammar-theory-label">Grammar Tip &amp; Strategy</span>
            <span class="grammar-theory-chevron">▸</span>
        </div>
        <div class="grammar-theory-body">
            <p>${exercise.grammarTheory}</p>
            <button class="speaker-btn grammar-theory-speak" onclick="speakPhrase(this.closest('.grammar-theory-box').querySelector('p').textContent)" title="Listen to the tip">
                🔊 Listen
            </button>
        </div>
    `;
    
    container.appendChild(box);
}

function shuffleCurrent() {
    let key = `${currentLevel}_${currentTab}`;
    if (currentTab === 'lexical_fields') {
        const field = document.getElementById('lexical-field-select') ? document.getElementById('lexical-field-select').value : 'programming';
        key = `${currentLevel}_lexical_fields_${field}`;
    }
    const indices = shuffledIndices[key];
    if (indices && indices.length > 1) {
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        loadActiveExercise();
    }
}

// Google Neural TTS Audio Engine
let ttsAudioElement = new Audio();
let ttsTextChunks = [];
let currentTtsChunkIndex = 0;
let isTtsPlayingState = false;

function splitTextForGoogleTTS(text, maxLen = 180) {
    const chunks = [];
    let rem = text;
    while (rem.length > 0) {
        if (rem.length <= maxLen) {
            chunks.push(rem);
            break;
        }
        let idx = rem.lastIndexOf('. ', maxLen);
        if (idx === -1) idx = rem.lastIndexOf('? ', maxLen);
        if (idx === -1) idx = rem.lastIndexOf('! ', maxLen);
        if (idx === -1) idx = rem.lastIndexOf(', ', maxLen);
        if (idx === -1) idx = rem.lastIndexOf(' ', maxLen);
        if (idx === -1) idx = maxLen;
        
        chunks.push(rem.substring(0, idx + 1).trim());
        rem = rem.substring(idx + 1).trim();
    }
    return chunks.filter(c => c.length > 0);
}

function speakPhrase(text) {
    window.stopAudio();
    if (!text) return;

    // Convert HH:MM time formats to Military Time to be read correctly
    let processedText = text.replace(/\b([0-9]|0[0-9]|1[0-9]|2[0-3]):00\b/g, '$1 hundred hours');
    processedText = processedText.replace(/\b([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])\b/g, '$1 $2 hours');

    const cleaned = processedText
        .replace(/<[^>]+>/g, ' ')
        .replace(/\([^)]*\)/g, '')
        .replace(/\[[^\]]*\]/g, '')
        .replace(/_+/g, ', ') // Just a pause, no words spoken
        .replace(/[\/\(\)\[\]]/g, ' ')
        .replace(/&amp;/g, 'and')
        .replace(/&quot;/g, '')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .replace(/[^\w\s\.,\?!'-]/g, '') // Strip out weird characters
        .replace(/\s+/g, ' ')
        .trim();

    if (!cleaned) return;

    ttsTextChunks = splitTextForGoogleTTS(cleaned, 180);
    currentTtsChunkIndex = 0;
    isTtsPlayingState = true;
    
    if (ttsTextChunks.length > 0) {
        playNextTtsChunk();
    }
}

function playNextTtsChunk() {
    if (currentTtsChunkIndex >= ttsTextChunks.length) {
        isTtsPlayingState = false;
        return;
    }
    
    const chunk = ttsTextChunks[currentTtsChunkIndex];
    // Use Google Translate TTS API for natural American English voice, bypassing device limitations
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=en-US&client=tw-ob&q=${encodeURIComponent(chunk)}`;
    
    ttsAudioElement.src = url;
    ttsAudioElement.play().catch(err => {
        console.error("Error playing TTS chunk:", err);
        currentTtsChunkIndex++;
        playNextTtsChunk();
    });
}

ttsAudioElement.onended = () => {
    if (isTtsPlayingState) {
        currentTtsChunkIndex++;
        setTimeout(() => {
            if (isTtsPlayingState) {
                playNextTtsChunk();
            }
        }, 400); // Natural pause between sentences
    }
};

window.stopAudio = function () {
    ttsAudioElement.pause();
    ttsTextChunks = [];
    currentTtsChunkIndex = 0;
    isTtsPlayingState = false;
};

// Standard Questions Render (Cloze, Word Formation, Transformation, Error, Collocation Option Challenge)
function renderStandardQuestions(exercise, container, savedAnswers, indices, key) {
    indices.forEach((originalIndex, displayIndex) => {
        const item = exercise.items[originalIndex];
        const savedAnswer = savedAnswers[originalIndex] || '';
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'question-item animate__animated animate__fadeIn';
        itemDiv.id = `q-item-${originalIndex}`;
        
        // Text display
        const textWrapper = document.createElement('div');
        textWrapper.className = 'question-text';
        
        // Clean line breaks
        const cleanQ = item.q.replace(/\n/g, '<br>');
        textWrapper.innerHTML = `<strong>${displayIndex + 1}.</strong> ${cleanQ} `;
        
        // Speaker icon for the question (DO NOT read sentences with mistakes)
        if (currentTab !== 'error_correction') {
            const speaker = document.createElement('button');
            speaker.className = 'speaker-btn';
            speaker.innerHTML = '🔊';
            speaker.onclick = () => speakPhrase(item.q);
            textWrapper.appendChild(speaker);
        }
        
        itemDiv.appendChild(textWrapper);
        
        // Form inputs/options
        const inputContainer = document.createElement('div');
        inputContainer.className = 'input-container';
        
        if ((exercise.title.toLowerCase().includes('collocation') || exercise.title.toLowerCase().includes('tenses')) && item.options) {
            // Multiple Choice options
            const optionsGrid = document.createElement('div');
            optionsGrid.className = 'options-grid';
            
            item.options.forEach((opt, optIdx) => {
                const optBtn = document.createElement('button');
                optBtn.className = `option-btn ${savedAnswer === opt ? 'selected' : ''}`;
                optBtn.textContent = opt;
                optBtn.onclick = () => {
                    if (isTimerActive && timeLeft <= 0) return; // Locked
                    
                    // Clear other selections
                    optionsGrid.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                    optBtn.classList.add('selected');
                    saveResponse(originalIndex, opt);
                };
                optionsGrid.appendChild(optBtn);
            });
            inputContainer.appendChild(optionsGrid);
        } else {
            // Text Input field
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'teg-input';
            input.placeholder = "Type your answer...";
            input.value = savedAnswer;
            input.oninput = (e) => {
                saveResponse(originalIndex, e.target.value);
            };
            inputContainer.appendChild(input);
            
            const checkSpan = document.createElement('span');
            checkSpan.className = 'check-indicator';
            checkSpan.id = `indicator-${originalIndex}`;
            inputContainer.appendChild(checkSpan);
        }
        
        itemDiv.appendChild(inputContainer);
        
        // Explanation box
        const explanation = document.createElement('div');
        explanation.className = 'explanation-box';
        explanation.id = `explanation-${originalIndex}`;
        explanation.innerHTML = `<strong>Correct answer:</strong> ${item.correct || (item.options ? item.options[item.correct] : '')}<br><em>${item.explanation}</em>`;
        
        // Add speech play button to explanation
        const speakCorrect = document.createElement('button');
        speakCorrect.className = 'speaker-btn';
        speakCorrect.style.marginLeft = '8px';
        speakCorrect.style.fontSize = '0.9rem';
        speakCorrect.innerHTML = '🔊 Hear';
        speakCorrect.onclick = () => speakPhrase(item.correct || item.options[item.correct]);
        explanation.appendChild(speakCorrect);
        
        itemDiv.appendChild(explanation);
        
        container.appendChild(itemDiv);
    });
}

// Vocabulary Matching Memory Card Flip Game
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function renderVocabularyMatching(exercise, container, savedMatches, key) {
    const pairs = exercise.pairs;
    
    // Create the memory grid container
    const memoryGrid = document.createElement('div');
    memoryGrid.className = 'memory-grid';
    
    // Create card objects
    let cards = [];
    pairs.forEach((p, idx) => {
        // Word Card
        cards.push({
            id: `word-${idx}`,
            matchId: idx,
            text: p.word,
            type: 'word'
        });
        // Definition Card
        cards.push({
            id: `def-${idx}`,
            matchId: idx,
            text: p.def,
            type: 'def'
        });
    });
    
    // Shuffle cards
    cards.sort(() => Math.random() - 0.5);
    
    // Render cards
    cards.forEach(cardData => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.matchId = cardData.matchId;
        card.dataset.id = cardData.id;
        card.dataset.type = cardData.type;
        card.dataset.text = cardData.text;
        
        // Inner structure for flip effect
        const back = document.createElement('div');
        back.className = 'memory-card-back';
        back.textContent = '❓';
        
        const front = document.createElement('div');
        front.className = 'memory-card-front';
        front.textContent = cardData.text;
        // Make font size smaller for long texts
        if (cardData.text.length > 50) {
            front.style.fontSize = '0.75rem';
        } else if (cardData.text.length > 25) {
            front.style.fontSize = '0.85rem';
        }
        
        card.appendChild(back);
        card.appendChild(front);
        
        // Check if already matched
        if (savedMatches[cardData.matchId] === true) {
            card.classList.add('flipped', 'matched');
        } else {
            card.onclick = () => flipCard(card);
        }
        
        memoryGrid.appendChild(card);
    });
    
    container.appendChild(memoryGrid);
}

function flipCard(card) {
    if (lockBoard) return;
    if (card === firstCard) return;
    if (card.classList.contains('matched')) return;
    
    card.classList.add('flipped');
    
    if (!firstCard) {
        firstCard = card;
        return;
    }
    
    secondCard = card;
    checkForMatch();
}

function checkForMatch() {
    // If cards match by matchId and they are different types (word vs def)
    const isMatch = firstCard.dataset.matchId === secondCard.dataset.matchId && 
                    firstCard.dataset.type !== secondCard.dataset.type;
                    
    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    
    // Play sound of the word
    const wordText = firstCard.dataset.type === 'word' ? firstCard.dataset.text : secondCard.dataset.text;
    speakPhrase(wordText);
    
    // Save to profile
    const matchId = firstCard.dataset.matchId;
    let key = `${currentLevel}_${currentTab}`;
    if (currentTab === 'lexical_fields') {
        const field = document.getElementById('lexical-field-select').value;
        key = `${currentLevel}_lexical_fields_${field}`;
    }
    if (!students[activeStudent].scores[key]) {
        students[activeStudent].scores[key] = {};
    }
    students[activeStudent].scores[key][matchId] = true;
    saveStudents();
    
    updateLevelProgress(currentLevel);
    
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    
    // Shake effect
    firstCard.classList.add('animate__animated', 'animate__shakeX');
    secondCard.classList.add('animate__animated', 'animate__shakeX');
    
    setTimeout(() => {
        firstCard.classList.remove('flipped', 'animate__animated', 'animate__shakeX');
        secondCard.classList.remove('flipped', 'animate__animated', 'animate__shakeX');
        resetBoard();
    }, 1200);
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

// Save inputs to profile
function saveResponse(index, value) {
    let key = `${currentLevel}_${currentTab}`;
    if (currentTab === 'lexical_fields') {
        const field = document.getElementById('lexical-field-select').value;
        key = `${currentLevel}_lexical_fields_${field}`;
    }
    if (!students[activeStudent].scores[key]) {
        students[activeStudent].scores[key] = {};
    }
    students[activeStudent].scores[key][index] = value;
    saveStudents();
}

// Check Responses
function checkAll() {
    let exercise;
    let key;
    if (currentTab === 'lexical_fields') {
        const field = document.getElementById('lexical-field-select').value;
        exercise = tegLexicalData[currentLevel][field];
        key = `${currentLevel}_lexical_fields_${field}`;
    } else {
        const levelData = getLevelData();
        exercise = levelData.exercises[currentTab];
        key = `${currentLevel}_${currentTab}`;
    }
    const studentSaved = students[activeStudent].scores[key] || {};
    
    let correctCount = 0;
    let totalCount = 0;
    
    if (currentTab === 'vocab_matching') {
        // Special logic for matching
        totalCount = exercise.pairs.length;
        for (let i = 0; i < totalCount; i++) {
            if (studentSaved[i] === true) {
                correctCount++;
            }
        }
    } else {
        totalCount = exercise.items.length;
        
        exercise.items.forEach((item, originalIndex) => {
            const savedAns = (studentSaved[originalIndex] || '').trim().toLowerCase();
            const correctAns = (item.correct || '').trim().toLowerCase();
            
            const element = document.getElementById(`q-item-${originalIndex}`);
            const indicator = document.getElementById(`indicator-${originalIndex}`);
            
            if (element) {
                element.classList.remove('correct', 'incorrect');
                
                let isCorrect = false;
                
                if (item.options) {
                    // Option check
                    const selectedBtn = element.querySelector('.option-btn.selected');
                    if (selectedBtn) {
                        const optVal = selectedBtn.textContent.trim().toLowerCase();
                        const rightOptVal = item.options[item.correct].trim().toLowerCase();
                        
                        if (optVal === rightOptVal) {
                            isCorrect = true;
                            selectedBtn.classList.add('correct');
                        } else {
                            selectedBtn.classList.add('incorrect');
                        }
                    }
                } else {
                    // Input text check
                    if (savedAns === correctAns) {
                        isCorrect = true;
                    }
                }
                
                if (isCorrect) {
                    element.classList.add('correct');
                    if (indicator) indicator.textContent = '✅';
                    correctCount++;
                } else {
                    element.classList.add('incorrect');
                    if (indicator) indicator.textContent = '❌';
                }
            }
        });
    }
    
    // Save section check stats
    const percentage = Math.round((correctCount / totalCount) * 100) || 0;
    
    // Update level progress bar
    updateLevelProgress(currentLevel);
    
    // Open Modal
    showResultsModal(correctCount, totalCount, percentage);
}

function showResultsModal(correct, total, percentage) {
    const modal = document.getElementById('results-modal');
    document.getElementById('modal-score-text').textContent = `${correct} / ${total}`;
    document.getElementById('modal-percent-text').textContent = `${percentage}%`;
    
    let badgeText = "Keep trying! 🥉";
    let rewardText = "Complete at least 60% of the answers to earn a badge.";
    
    if (percentage >= 95) {
        badgeText = "Gold Badge! 🥇";
        rewardText = "Outstanding performance! You have fully mastered this section.";
    } else if (percentage >= 80) {
        badgeText = "Silver Badge! 🥈";
        rewardText = "Excellent work! Almost perfect.";
    } else if (percentage >= 60) {
        badgeText = "Bronze Badge! 🥉";
        rewardText = "Good job! You earned your passing badge.";
    }
    
    document.getElementById('modal-badge-title').textContent = badgeText;
    document.getElementById('modal-badge-desc').textContent = rewardText;
    
    modal.classList.add('active');
    
    // Auto-save highest score for the active level section
    let key = `${currentLevel}_${currentTab}_percentage`;
    if (currentTab === 'lexical_fields') {
        const field = document.getElementById('lexical-field-select').value;
        key = `${currentLevel}_lexical_fields_${field}_percentage`;
    }
    const prevMax = students[activeStudent].scores[key] || 0;
    if (percentage > prevMax) {
        students[activeStudent].scores[key] = percentage;
        saveStudents();
    }
    
    // Render the rewards and progress immediately
    renderBadgeDisplay();
    updateLevelProgress(currentLevel);
}

function closeModal() {
    document.getElementById('results-modal').classList.remove('active');
}

function continueToNextExercise() {
    closeModal();
    const tabs = ['idiom_challenge', 'error_correction', 'grammar_topics', 'lexical_fields', 'vocab_matching', 'open_cloze', 'phrasal_verbs', 'sentence_transformation', 'tenses_cloze', 'word_formation'];
    const currentIndex = tabs.indexOf(currentTab);
    
    if (currentIndex !== -1 && currentIndex < tabs.length - 1) {
        // Go to next tab
        setTab(tabs[currentIndex + 1]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentIndex === tabs.length - 1) {
        // Reached the end of the tabs, go to next level if possible
        const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        const lvlIdx = levels.indexOf(currentLevel);
        if (lvlIdx !== -1 && lvlIdx < levels.length - 1) {
            setLevel(levels[lvlIdx + 1]);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            alert("Congratulations! You have completed all categories in C2.");
        }
    }
}

// Calculate level progress (average of highest percentages of all exercises except lexical fields)
function updateLevelProgress(level) {
    let totalScore = 0;
    const tabs = ['idiom_challenge', 'error_correction', 'vocab_matching', 'open_cloze', 'phrasal_verbs', 'sentence_transformation', 'tenses_cloze', 'word_formation'];
    
    tabs.forEach(tab => {
        const key = `${level}_${tab}_percentage`;
        totalScore += students[activeStudent].scores[key] || 0;
    });
    
    const average = Math.round(totalScore / tabs.length);
    
    // Update active level progress
    const miniBar = document.getElementById(`level-progress-${level.toLowerCase()}`);
    if (miniBar) {
        miniBar.style.width = `${average}%`;
    }
}

// Render Badge rewards list
function renderBadgeDisplay() {
    const badgeContainer = document.getElementById('badge-display-container');
    if (!badgeContainer) return;
    
    const tabs = ['word_formation', 'open_cloze', 'tenses_cloze', 'sentence_transformation', 'error_correction', 'vocab_matching', 'idiom_challenge', 'phrasal_verbs'];
    let bronze = 0, silver = 0, gold = 0;
    
    tabs.forEach(tab => {
        const key = `${currentLevel}_${tab}_percentage`;
        const score = students[activeStudent].scores[key] || 0;
        if (score >= 95) gold++;
        else if (score >= 80) silver++;
        else if (score >= 60) bronze++;
    });
    
    let html = '';
    if (gold > 0 || silver > 0 || bronze > 0) {
        html = `
            <div class="badge-display animate__animated animate__fadeIn">
                <div class="badge-art">🏆</div>
                <div style="flex-grow: 1;">
                    <h3 style="font-family: var(--font-heading); margin-bottom: 5px;">Earned Badges (${currentLevel})</h3>
                    <div style="display: flex; gap: 15px;">
                        <span>🥇 Gold: <strong>${gold}</strong></span>
                        <span>🥈 Silver: <strong>${silver}</strong></span>
                        <span>🥉 Bronze: <strong>${bronze}</strong></span>
                    </div>
                </div>
            </div>
        `;
    }
    badgeContainer.innerHTML = html;
}

// Reset responses
function resetLevel() {
    if (confirm("Are you sure you want to reset all answers in this category?")) {
        let key = `${currentLevel}_${currentTab}`;
        let pctKey = `${currentLevel}_${currentTab}_percentage`;
        
        if (currentTab === 'lexical_fields') {
            const field = document.getElementById('lexical-field-select').value;
            key = `${currentLevel}_lexical_fields_${field}`;
            pctKey = `${currentLevel}_lexical_fields_${field}_percentage`;
        } else if (currentTab === 'grammar_topics') {
            key = `${currentLevel}_grammar_topics_${currentGrammarTopic}`;
            pctKey = `${currentLevel}_grammar_topics_${currentGrammarTopic}_percentage`;
        }
        
        students[activeStudent].scores[key] = {};
        students[activeStudent].scores[pctKey] = 0;
        saveStudents();
        updateLevelProgress(currentLevel);
        
        // Shuffle the items for variety
        const indices = shuffledIndices[key];
        if (indices && indices.length > 1) {
            for (let i = indices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [indices[i], indices[j]] = [indices[j], indices[i]];
            }
        }
        
        loadActiveExercise();
    }
}

// Timer functionality
function toggleTimer() {
    isTimerActive = !isTimerActive;
    const timerBtn = document.getElementById('timer-btn');
    const timerWidget = document.getElementById('timer-widget');
    
    if (isTimerActive) {
        timerBtn.textContent = "⏱️ Disable Timer";
        timerWidget.style.display = 'flex';
        startTimer();
    } else {
        timerBtn.textContent = "⏱️ Enable Timer";
        timerWidget.style.display = 'none';
        stopTimer();
    }
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 180;
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Checking answers now.");
            checkAll();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timeLeft = 180;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    document.getElementById('timer-val').textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
