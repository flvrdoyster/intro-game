// import { gameData, uselessFacts } from './data.js'; // Removed for local file compatibility

class GameManager {
    constructor() {
        this.hearts = 3;
        this.maxHearts = 3;
        this.typingInterval = null;
        this.solvedQuestions = new Set();
        this.currentSceneId = null;

        // Cache DOM elements
        this.elements = {
            sceneView: document.getElementById('scene-view'),
            gameImage: document.getElementById('gameImage'),
            storyText: document.getElementById('storyText'),
            optionsContainer: document.getElementById('optionsContainer'),

            // Heart Container
            heartContainer: document.getElementById('heart-container'),

            correctSound: document.getElementById('correctSound'),
            incorrectSound: document.getElementById('incorrectSound'),
        };

        this.typewriterSound = new Audio("mp3/typewriter.mp3");
        this.typewriterSound.loop = true;
        this.init();
    }

    init() {
        // Start by showing the Title Scene
        this.showTitle();
    }

    showTitle() {
        // Construct Title Scene Data from Config
        const config = window.gameConfig || {
            title: "Game Title",
            image: "",
            buttonText: "Start"
        };

        const titleSceneData = {
            text: config.title,
            image: config.image,
            options: [
                { text: config.buttonText, action: 'startGame' }
            ]
        };

        // Render it using the common renderer
        this.renderScene(titleSceneData);

        // Hide Hearts on Title
        this.elements.heartContainer.style.display = 'none';
    }

    startGame(skipIntro = false) {
        if (!skipIntro) {
            this.hearts = this.maxHearts;
        }
        this.updateHeartsUI();
        this.elements.heartContainer.style.display = 'flex'; // Show Hearts

        // Random Question Logic
        // 1. Filter valid questions (q + number, e.g., q1, q10)
        const allKeys = Object.keys(window.gameData);
        const questionKeys = allKeys.filter(key => /^q\d+$/.test(key));

        // 2. Filter out already solved questions
        const remainingQuestions = questionKeys.filter(key => !this.solvedQuestions.has(key));

        // Check if True Ending condition met (all randoms solved)
        if (remainingQuestions.length === 0 && questionKeys.length > 0) {
            this.loadScene('true_ending');
            this.elements.heartContainer.style.display = 'none'; // Hide hearts for ending
            return;
        }

        // 3. Shuffle remaining
        for (let i = remainingQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [remainingQuestions[i], remainingQuestions[j]] = [remainingQuestions[j], remainingQuestions[i]];
        }

        // 4. Pick 3 (or less)
        this.questionQueue = remainingQuestions.slice(0, 3);
        this.currentQIndex = -1;

        console.log("Selected Questions:", this.questionQueue);

        if (skipIntro) {
            // Directly load to first random question if possible
            if (this.questionQueue.length > 0) {
                this.currentQIndex = 0;
                this.loadScene(this.questionQueue[0]);
            } else {
                this.loadScene('q_end');
            }
        } else {
            // Load Fixed First Question
            this.loadScene('start');
        }
    }

    gameOver() {
        // Load Game Over scene from data
        this.loadScene('game_over');
        this.elements.heartContainer.style.display = 'none';
    }

    updateHeartsUI() {
        const hearts = this.elements.heartContainer.querySelectorAll('.heart-icon');
        hearts.forEach((heart, index) => {
            if (index < this.hearts) {
                heart.src = 'img/full-heart.svg';
            } else {
                heart.src = 'img/empty-heart.svg';
            }
        });

        // Update image filter
        this.elements.gameImage.classList.remove('image-filter-low', 'image-filter-medium', 'image-filter-high');
        if (this.hearts === 3) {
            this.elements.gameImage.classList.add('image-filter-low');
        } else if (this.hearts === 2) {
            this.elements.gameImage.classList.add('image-filter-medium');
        } else if (this.hearts === 1) {
            this.elements.gameImage.classList.add('image-filter-high');
        }
    }

    playSound(type) {
        try {
            if (type === 'correct') {
                this.elements.correctSound.currentTime = 0;
                this.elements.correctSound.play().catch(e => console.log('Audio play failed', e));
            } else if (type === 'incorrect') {
                this.elements.incorrectSound.currentTime = 0;
                this.elements.incorrectSound.play().catch(e => console.log('Audio play failed', e));
            }
        } catch (e) {
            console.warn("Sound error:", e);
        }
    }

    typewriterEffect(text, onComplete) {
        let i = 0;
        this.elements.storyText.innerHTML = '';
        if (this.typingInterval) clearInterval(this.typingInterval);

        this.isTyping = true;

        // Sound start
        if (this.typewriterSound) {
            this.typewriterSound.currentTime = 0;
            this.typewriterSound.volume = 0.5;
            this.typewriterSound.play().then(() => {
                if (!this.isTyping) {
                    this.typewriterSound.pause();
                    this.typewriterSound.currentTime = 0;
                }
            }).catch(() => { });
        }

        this.typingInterval = setInterval(() => {
            if (i < text.length) {
                const char = text.charAt(i);
                this.elements.storyText.innerHTML += (char === '\n') ? '<br>' : char;
                i++;
            } else {
                clearInterval(this.typingInterval);
                this.isTyping = false;

                if (this.typewriterSound) {
                    this.typewriterSound.pause();
                    this.typewriterSound.currentTime = 0;
                }

                this.elements.storyText.innerHTML += '<span class="typing-cursor">|</span>';
                if (onComplete) onComplete();
            }
        }, 50);
    }

    loadScene(sceneId) {
        this.currentSceneId = sceneId;
        const data = window.gameData[sceneId];
        if (!data) {
            console.error(`Scene ${sceneId} not found`);
            return;
        }

        // Pass the sceneId primarily for Useless Fact logic
        this.renderScene(data, sceneId);
    }

    renderScene(data, sceneId = null) {
        // Reset UI
        this.elements.optionsContainer.innerHTML = '';

        // Handle Image presence
        // Check for empty string or null/undefined
        if (data.image && data.image.trim() !== "") {
            this.elements.sceneView.classList.remove('no-image');
            this.elements.gameImage.src = data.image;
            this.elements.gameImage.style.display = 'block';
        } else {
            this.elements.sceneView.classList.add('no-image');
            this.elements.gameImage.src = '';
        }

        // Type text
        this.typewriterEffect(data.text, () => {
            this.showOptions(data.options);
        });

        // Useless Fact Logic (Show on 'wrong' screens)
        const factEl = document.getElementById('useless-fact');
        if (factEl) {
            // Only show facts if sceneId is provided (meaning it's a game scene)
            if (sceneId && (sceneId.includes('wrong') || sceneId.includes('half') || sceneId.includes('roast'))) {
                const uselessFacts = window.uselessFacts;
                const randomFact = uselessFacts[Math.floor(Math.random() * uselessFacts.length)];
                factEl.textContent = `* ${randomFact}`;
                factEl.style.display = 'block';
            } else {
                factEl.style.display = 'none';
            }
        }
    }

    showOptions(options) {
        this.elements.optionsContainer.innerHTML = '';
        if (!options) return;

        // Clone and Shuffle Options
        const shuffledOptions = [...options];
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }

        shuffledOptions.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-button';
            btn.textContent = opt.text;
            btn.onclick = () => this.handleOptionClick(opt);
            this.elements.optionsContainer.appendChild(btn);
        });
    }

    handleOptionClick(option) {
        // Special Action: Start Game
        if (option.action === 'startGame') {
            this.startGame();
            return;
        }

        // Reset All Action
        if (option.nextInfo === 'reset_all') {
            this.solvedQuestions.clear();
            this.showTitle();
            return;
        }

        // Random Flow Logic
        if (option.nextInfo === 'next_random') {
            this.currentQIndex++;
            if (this.currentQIndex < this.questionQueue.length) {
                this.loadScene(this.questionQueue[this.currentQIndex]);
            } else if (this.currentQIndex === this.questionQueue.length) {
                // Check if q_end is already solved
                if (this.solvedQuestions.has('q_end')) {
                    // Start New Round directly
                    this.startGame(true);
                } else {
                    this.loadScene('q_end');
                }
            } else {
                // Already passed q_end logic (Index > length) -> Start New Round
                this.startGame(true);
            }
            return;
        }

        // Check correctness if defined
        if (option.hasOwnProperty('isCorrect')) {
            if (option.isCorrect) {
                this.playSound('correct');
                // Mark solved
                // Mark q_end as solved if current scene is q_end (meaning we just answered it correctly)
                // Or generalized regex for q\d+
                if (this.currentSceneId && (/^q\d+$/.test(this.currentSceneId) || this.currentSceneId === 'q_end')) {
                    this.solvedQuestions.add(this.currentSceneId);
                }
            } else {
                this.playSound('incorrect');
                this.hearts--;
                this.updateHeartsUI();

                if (this.hearts <= 0) {
                    this.gameOver();
                    return;
                }
            }
        }

        if (option.nextInfo) {
            this.loadScene(option.nextInfo);
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.game = new GameManager();
});