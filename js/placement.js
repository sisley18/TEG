/**
 * Diagnostic Placement Test Logic
 */

let timerInterval;
let timeLeft = 15 * 60; // 15 minutes
let testSubmitted = false;



document.addEventListener('DOMContentLoaded', () => {
    // Hide test initially, wait for Start button
});

function startTest() {
    const nameInput = document.getElementById('candidate-name').value.trim();
    if (!nameInput) {
        alert("Please enter your name for the certificate.");
        return;
    }

    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('test-screen').style.display = 'block';
    document.getElementById('timer-container').style.display = 'block';
    
    renderQuestions();
    startTimer();
}

function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 60) {
            document.getElementById('time-display').classList.add('timer-warning');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (!testSubmitted) {
                alert("Time is up! Your test will now be submitted automatically.");
                submitTest();
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    document.getElementById('time-display').textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function renderQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';

    placementData.forEach((item, index) => {
        if (item.sectionTitle) {
            const title = document.createElement('h2');
            title.className = 'section-title';
            title.textContent = item.sectionTitle;
            container.appendChild(title);
        }

        const qBox = document.createElement('div');
        qBox.className = 'question-box animate__animated animate__fadeInUp';
        
        // Reading Text Box
        if (item.isReading && item.readingText && (index === 0 || placementData[index-1].readingText !== item.readingText)) {
            const rBox = document.createElement('div');
            rBox.className = 'reading-text';
            rBox.innerHTML = `<strong>Text:</strong> ${item.readingText}`;
            qBox.appendChild(rBox);
        }
        
        // Listening Audio Button
        if (item.isListening && item.audioText && (index === 0 || placementData[index-1].audioText !== item.audioText)) {
            const lBox = document.createElement('div');
            lBox.className = 'reading-text';
            lBox.style.borderLeftColor = '#a855f7';
            lBox.innerHTML = `<strong>Audio Track:</strong> Listen to the dialogue and answer the questions below. `;
            
            const btn = document.createElement('button');
            btn.className = 'btn';
            btn.style.padding = '5px 15px';
            btn.style.fontSize = '0.9rem';
            btn.style.marginLeft = '10px';
            btn.innerHTML = '🔊 Play Audio';
            btn.onclick = () => speakPhrase(item.audioText);
            
            lBox.appendChild(btn);
            qBox.appendChild(lBox);
        }

        // Question Text
        const qText = document.createElement('div');
        qText.className = 'question-text';
        qText.innerHTML = `<strong>${index + 1}.</strong> ${item.q}`;
        qBox.appendChild(qText);

        // Options
        const optionsList = document.createElement('div');
        optionsList.className = 'options-list';
        
        item.options.forEach((opt, optIdx) => {
            const label = document.createElement('label');
            label.className = 'option-label';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question_${index}`;
            radio.value = optIdx;
            
            radio.onchange = () => {
                const siblings = optionsList.querySelectorAll('.option-label');
                siblings.forEach(s => s.classList.remove('selected'));
                label.classList.add('selected');
            };
            
            label.appendChild(radio);
            label.appendChild(document.createTextNode(opt));
            optionsList.appendChild(label);
        });

        qBox.appendChild(optionsList);
        container.appendChild(qBox);
    });
}

function submitTest() {
    if (testSubmitted) return;
    
    // Stop Audio if playing
    window.stopAudio();
    
    testSubmitted = true;
    clearInterval(timerInterval);
    
    let score = 0;
    
    placementData.forEach((item, index) => {
        const radios = document.getElementsByName(`question_${index}`);
        let selected = -1;
        for (let r of radios) {
            if (r.checked) {
                selected = parseInt(r.value);
                break;
            }
        }
        
        if (selected === item.correct) {
            score++;
        }
    });
    
    generateCertificate(score);
}

function generateCertificate(score) {
    const name = document.getElementById('candidate-name').value || "Candidate";
    let cefrLevel = "";
    let certTitle = "";
    let desc = "";

    if (score <= 5) {
        cefrLevel = "A1";
        certTitle = "Beginner";
        desc = "Demonstrates basic ability to understand simple sentences and everyday expressions. Requires foundational vocabulary and grammar development.";
    } else if (score <= 12) {
        cefrLevel = "A2";
        certTitle = "Elementary";
        desc = "Can communicate in simple and routine tasks requiring a simple and direct exchange of information. Shows emerging grasp of core tenses.";
    } else if (score <= 20) {
        cefrLevel = "B1";
        certTitle = "Intermediate";
        desc = "Can understand the main points of clear standard input on familiar matters regularly encountered in work, school, and leisure.";
    } else if (score <= 27) {
        cefrLevel = "B2";
        certTitle = "Upper-Intermediate";
        desc = "Can understand the main ideas of complex text on both concrete and abstract topics. Interacts with a degree of fluency and spontaneity.";
    } else if (score <= 32) {
        cefrLevel = "C1";
        certTitle = "Advanced";
        desc = "Can express ideas fluently and spontaneously without much obvious searching for expressions. Uses language flexibly for professional purposes.";
    } else {
        cefrLevel = "C2";
        certTitle = "Mastery";
        desc = "Shows exceptional linguistic precision. Can summarize information from different spoken and written sources, reconstructing arguments coherently.";
    }

    const timeSpent = (15 * 60) - timeLeft;
    const mins = Math.floor(timeSpent / 60);
    const secs = timeSpent % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    document.getElementById('cert-level-display').textContent = cefrLevel;
    document.getElementById('cert-title-display').textContent = certTitle;
    document.getElementById('cert-name-display').textContent = name;
    document.getElementById('cert-desc-display').textContent = desc;
    document.getElementById('cert-score-display').textContent = `${score} / 35`;
    document.getElementById('cert-time-display').textContent = timeStr;

    document.getElementById('results-modal').classList.add('active');
}

// --- TTS LOGIC (Reused from TEG) ---
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
        .replace(/_+/g, ', ')
        .replace(/[\/\(\)\[\]]/g, ' ')
        .replace(/&amp;/g, 'and')
        .replace(/&quot;/g, '')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .replace(/[^\w\s\.,\?!'-]/g, '')
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
